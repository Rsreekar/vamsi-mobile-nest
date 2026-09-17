import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PhoneCall, MessageSquare, RefreshCw, LogOut, Trash2, CheckCircle2, RotateCcw, UserCheck, Calendar, Check } from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';

export default function OwnerRequests() {
  const [tradeInLeads, setTradeInLeads] = useState([]);
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('tradein');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('ownerToken');
    if (!token) {
      navigate('/owner-login');
      return;
    }

    fetchRequests();
  }, [navigate]);

  const fetchRequests = async () => {
    setLoading(true);
    try {
      const [resTrade, resEnq] = await Promise.all([
        fetch('/api/tradein-requests'),
        fetch('/api/enquiries')
      ]);

      const dataTrade = await resTrade.json();
      const dataEnq = await resEnq.json();

      setTradeInLeads(dataTrade.leads || []);
      setEnquiries(dataEnq.enquiries || []);
    } catch (err) {
      console.error('Error fetching leads:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleToggleTradeInStatus = async (id, currentStatus) => {
    const nextStatus = currentStatus === 'Completed' ? 'Pending' : 'Completed';
    try {
      await fetch(`/api/tradein-requests/${id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: nextStatus })
      });
      setTradeInLeads(prev =>
        prev.map(item => (item.id === id ? { ...item, status: nextStatus } : item))
      );
    } catch (err) {
      console.error('Error updating trade-in status:', err);
    }
  };

  const handleToggleEnquiryStatus = async (id, currentStatus) => {
    const nextStatus = currentStatus === 'Completed' ? 'Pending' : 'Completed';
    try {
      await fetch(`/api/enquiries/${id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: nextStatus })
      });
      setEnquiries(prev =>
        prev.map(item => (item.id === id ? { ...item, status: nextStatus } : item))
      );
    } catch (err) {
      console.error('Error updating enquiry status:', err);
    }
  };

  const handleDeleteTradeIn = async (id) => {
    if (!window.confirm('Are you sure you want to permanently delete this trade-in request?')) return;
    try {
      await fetch(`/api/tradein-requests/${id}`, { method: 'DELETE' });
      setTradeInLeads(prev => prev.filter(lead => lead.id !== id));
    } catch (err) {
      console.error('Error deleting lead:', err);
    }
  };

  const handleDeleteEnquiry = async (id) => {
    if (!window.confirm('Are you sure you want to permanently delete this enquiry?')) return;
    try {
      await fetch(`/api/enquiries/${id}`, { method: 'DELETE' });
      setEnquiries(prev => prev.filter(enq => enq.id !== id));
    } catch (err) {
      console.error('Error deleting enquiry:', err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('ownerToken');
    localStorage.removeItem('ownerUser');
    navigate('/owner-login');
  };

  const pendingTradeIn = tradeInLeads.filter(l => l.status !== 'Completed');
  const pendingEnquiries = enquiries.filter(e => e.status !== 'Completed');
  
  const completedTradeIn = tradeInLeads.filter(l => l.status === 'Completed').map(item => ({ ...item, _type: 'tradein' }));
  const completedEnquiries = enquiries.filter(e => e.status === 'Completed').map(item => ({ ...item, _type: 'enquiry' }));
  
  const completedItems = [...completedTradeIn, ...completedEnquiries].sort(
    (a, b) => new Date(b.created_at || Date.now()) - new Date(a.created_at || Date.now())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 pb-28 lg:pb-12">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-1">
            <UserCheck className="w-3.5 h-3.5 text-emerald-600" /> Authenticated Owner Session
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
            Customer Requests Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Manage submitted old phone valuation requests and store contact queries.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={fetchRequests}
            className="flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs px-3.5 py-2.5 rounded-xl transition border border-slate-300"
          >
            <RefreshCw className="w-3.5 h-3.5 text-blue-600" /> Refresh
          </button>

          <button
            onClick={handleLogout}
            className="flex items-center gap-1.5 bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow transition"
          >
            <LogOut className="w-3.5 h-3.5" /> Logout
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 border-b border-slate-200 -mx-4 px-4 sm:mx-0 sm:px-0">
        <button
          onClick={() => setActiveTab('tradein')}
          className={`pb-3 px-3.5 font-extrabold text-xs sm:text-sm whitespace-nowrap transition border-b-2 shrink-0 ${
            activeTab === 'tradein'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          📱 Sell Old Phone Requests ({pendingTradeIn.length})
        </button>

        <button
          onClick={() => setActiveTab('enquiries')}
          className={`pb-3 px-3.5 font-extrabold text-xs sm:text-sm whitespace-nowrap transition border-b-2 shrink-0 ${
            activeTab === 'enquiries'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          💬 Contact Form Enquiries ({pendingEnquiries.length})
        </button>

        <button
          onClick={() => setActiveTab('completed')}
          className={`pb-3 px-3.5 font-extrabold text-xs sm:text-sm whitespace-nowrap transition border-b-2 shrink-0 ${
            activeTab === 'completed'
              ? 'border-emerald-600 text-emerald-600'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          ✅ Completed Requests ({completedItems.length})
        </button>
      </div>

      {/* Content */}
      {loading ? (
        <div className="py-16 text-center text-slate-400 font-medium text-xs">
          Loading store requests...
        </div>
      ) : activeTab === 'tradein' ? (
        /* Pending Trade-in leads list */
        <div className="space-y-4">
          {pendingTradeIn.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pendingTradeIn.map((lead, idx) => (
                <div key={lead.id || idx} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-3 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100 mb-2">
                      <span className="text-xs font-bold text-slate-900">{lead.customer_name || 'Customer'}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-semibold text-slate-400 flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> {new Date(lead.created_at || Date.now()).toLocaleDateString('en-IN')}
                        </span>
                        <span className="text-[10px] font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">Pending</span>
                      </div>
                    </div>

                    <div className="space-y-1.5 text-xs text-slate-700">
                      <p><strong className="text-slate-900 font-bold">Device:</strong> {lead.brand} {lead.model} ({lead.storage || 'N/A'})</p>
                      <p><strong className="text-slate-900 font-bold">Condition:</strong> <span className="bg-amber-50 text-amber-900 px-2 py-0.5 rounded font-medium border border-amber-200">{lead.physical_condition || lead.condition || 'N/A'}</span></p>
                      {lead.expected_price && (
                        <p><strong className="text-slate-900 font-bold">Expected Price:</strong> ₹{lead.expected_price}</p>
                      )}
                      <p><strong className="text-slate-900 font-bold">Phone Number:</strong> {lead.phone}</p>
                      {lead.notes && <p className="text-slate-500 italic">"{lead.notes}"</p>}
                    </div>
                  </div>

                  {/* Owner Action Buttons */}
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
                    <a
                      href={`tel:${lead.phone}`}
                      className="flex items-center justify-center gap-1 py-2 px-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition"
                    >
                      <PhoneCall className="w-3.5 h-3.5 text-blue-400" />
                      <span>Call</span>
                    </a>

                    <a
                      href={getWhatsAppLink(`Hi ${lead.customer_name || ''}, regarding your ${lead.brand || ''} ${lead.model || ''} valuation request at VAMSI MOBILE NEST.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1 py-2 px-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow transition"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>

                    <button
                      onClick={() => handleToggleTradeInStatus(lead.id, lead.status)}
                      className="flex items-center justify-center gap-1 py-2 px-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold text-xs rounded-xl border border-emerald-200 transition"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Complete</span>
                    </button>

                    <button
                      onClick={() => handleDeleteTradeIn(lead.id)}
                      className="flex items-center justify-center gap-1 py-2 px-2 bg-rose-50 hover:bg-rose-100 text-rose-600 font-bold text-xs rounded-xl border border-rose-200 transition"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center text-slate-500 text-xs">
              No pending old phone trade-in requests.
            </div>
          )}
        </div>
      ) : activeTab === 'enquiries' ? (
        /* Pending Enquiries list */
        <div className="space-y-4">
          {pendingEnquiries.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pendingEnquiries.map((enq, idx) => (
                <div key={enq.id || idx} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-3 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100 mb-2">
                      <span className="text-xs font-bold text-slate-900">{enq.customer_name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold bg-blue-50 text-blue-700 px-2.5 py-0.5 rounded-full">{enq.category}</span>
                        <span className="text-[10px] font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">Pending</span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed">"{enq.message}"</p>
                    <p className="text-xs text-slate-500 mt-2 font-medium">Phone: {enq.phone}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
                    <a
                      href={`tel:${enq.phone}`}
                      className="flex items-center justify-center gap-1 py-2 px-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition"
                    >
                      <PhoneCall className="w-3.5 h-3.5 text-blue-400" />
                      <span>Call</span>
                    </a>

                    <a
                      href={getWhatsAppLink(`Hi ${enq.customer_name || ''}, regarding your query at VAMSI MOBILE NEST.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1 py-2 px-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow transition"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>

                    <button
                      onClick={() => handleToggleEnquiryStatus(enq.id, enq.status)}
                      className="flex items-center justify-center gap-1 py-2 px-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold text-xs rounded-xl border border-emerald-200 transition"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Complete</span>
                    </button>

                    <button
                      onClick={() => handleDeleteEnquiry(enq.id)}
                      className="flex items-center justify-center gap-1 py-2 px-2 bg-rose-50 hover:bg-rose-100 text-rose-600 font-bold text-xs rounded-xl border border-rose-200 transition"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center text-slate-500 text-xs">
              No pending contact form enquiries.
            </div>
          )}
        </div>
      ) : (
        /* Completed Requests list */
        <div className="space-y-4">
          {completedItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {completedItems.map((item, idx) => (
                <div key={item.id || idx} className="bg-slate-50/80 rounded-2xl border border-emerald-200 p-5 shadow-sm space-y-3 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-2 border-b border-slate-200 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-900">{item.customer_name || 'Customer'}</span>
                        <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                          <Check className="w-3 h-3 text-emerald-600" /> Completed
                        </span>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200 text-slate-700">
                        {item._type === 'tradein' ? '📱 Old Phone Trade-In' : '💬 Contact Enquiry'}
                      </span>
                    </div>

                    {item._type === 'tradein' ? (
                      <div className="space-y-1 text-xs text-slate-700">
                        <p><strong className="text-slate-900 font-bold">Device:</strong> {item.brand} {item.model} ({item.storage || 'N/A'})</p>
                        <p><strong className="text-slate-900 font-bold">Condition:</strong> {item.physical_condition || item.condition || 'N/A'}</p>
                        {item.expected_price && <p><strong className="text-slate-900 font-bold">Expected Price:</strong> ₹{item.expected_price}</p>}
                        <p><strong className="text-slate-900 font-bold">Phone:</strong> {item.phone}</p>
                        {item.notes && <p className="text-slate-500 italic">"{item.notes}"</p>}
                      </div>
                    ) : (
                      <div className="space-y-1 text-xs text-slate-700">
                        <p><strong className="text-slate-900 font-bold">Category:</strong> {item.category}</p>
                        <p className="leading-relaxed">"{item.message}"</p>
                        <p><strong className="text-slate-900 font-bold">Phone:</strong> {item.phone}</p>
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-200">
                    <a
                      href={`tel:${item.phone}`}
                      className="flex items-center justify-center gap-1 py-2 px-2 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl transition"
                    >
                      <PhoneCall className="w-3.5 h-3.5 text-blue-400" />
                      <span>Call</span>
                    </a>

                    <a
                      href={getWhatsAppLink(`Hi ${item.customer_name || ''}, regarding your completed request at VAMSI MOBILE NEST.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1 py-2 px-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow transition"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>

                    <button
                      onClick={() =>
                        item._type === 'tradein'
                          ? handleToggleTradeInStatus(item.id, item.status)
                          : handleToggleEnquiryStatus(item.id, item.status)
                      }
                      className="flex items-center justify-center gap-1 py-2 px-2 bg-amber-50 hover:bg-amber-100 text-amber-800 font-bold text-xs rounded-xl border border-amber-200 transition"
                    >
                      <RotateCcw className="w-3.5 h-3.5 text-amber-600" />
                      <span>Mark Pending</span>
                    </button>

                    <button
                      onClick={() =>
                        item._type === 'tradein'
                          ? handleDeleteTradeIn(item.id)
                          : handleDeleteEnquiry(item.id)
                      }
                      className="flex items-center justify-center gap-1 py-2 px-2 bg-rose-50 hover:bg-rose-100 text-rose-600 font-bold text-xs rounded-xl border border-rose-200 transition"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center text-slate-500 text-xs">
              No completed requests yet. Click "Complete" on any request to store it here.
            </div>
          )}
        </div>
      )}

    </div>
  );
}
