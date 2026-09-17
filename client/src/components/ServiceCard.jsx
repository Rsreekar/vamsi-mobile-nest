import React from 'react';
import { Smartphone, ShieldCheck, Repeat, Banknote, ShoppingBag, Zap, Usb, HardDrive, MessageSquare, Wrench } from 'lucide-react';
import { getServiceWhatsAppLink } from '../utils/whatsapp';

const iconMap = {
  Smartphone: Smartphone,
  ShieldCheck: ShieldCheck,
  Repeat: Repeat,
  Banknote: Banknote,
  ShoppingBag: ShoppingBag,
  Zap: Zap,
  Usb: Usb,
  HardDrive: HardDrive,
};

export default function ServiceCard({ service }) {
  const { name, icon, description, highlight } = service;
  const IconComponent = iconMap[icon] || Wrench;
  const whatsappUrl = getServiceWhatsAppLink(name);

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
          <IconComponent className="w-6 h-6" />
        </div>

        <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition mb-2">
          {name}
        </h3>

        <p className="text-sm text-slate-600 leading-relaxed mb-4">
          {description}
        </p>

        {highlight && (
          <div className="inline-block text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full mb-4">
            ✨ {highlight}
          </div>
        )}
      </div>

      <div className="pt-2">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-xl shadow-md transition"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Enquire on WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
