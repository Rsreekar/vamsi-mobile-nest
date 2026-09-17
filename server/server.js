import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { query } from './config/db.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Security & Parsing Middleware
app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// In-Memory Storage Fallback
// In-Memory Storage Fallback
let TRADEIN_LEADS = [
  { id: 101, customer_name: 'Rangisetti Sreekar', phone: '9948800022', whatsapp: '9948800022', brand: 'OnePlus', model: '13R', storage: '128GB', physical_condition: 'Good Condition', expected_price: '25000', notes: 'Box available', status: 'Pending', created_at: new Date() }
];
let STORE_ENQUIRIES = [
  { id: 201, customer_name: 'Kiran Kumar', phone: '9848012345', category: 'Screen Replacement', message: 'Need iPhone 13 screen replacement estimate.', status: 'Pending', created_at: new Date() }
];

const DEMO_SERVICES = [
  { id: 1, name: 'Mobile Screen Replacement', icon: 'Smartphone', description: 'High quality original & OEM screen replacements with fast service.', highlight: 'Includes free tempered glass installation!' },
  { id: 2, name: 'Tempered Glass Installation', icon: 'ShieldCheck', description: 'Precision bubble-free 9H tempered glass installation.', highlight: 'Done in under 5 minutes.' },
  { id: 3, name: 'Used Mobile Sale', icon: 'Repeat', description: 'Strictly inspected pre-owned smartphones with 3 months store warranty.', highlight: '100% genuine checked phones.' },
  { id: 4, name: 'Buy Old Phones', icon: 'Banknote', description: 'Instant evaluation & top price offer for old phones.', highlight: 'Immediate cash payout.' },
  { id: 5, name: 'All Mobile Accessories', icon: 'ShoppingBag', description: 'Covers, chargers, power banks, smartwatches, and TWS earbuds.', highlight: 'All top brands in stock.' }
];

// Health Check Endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', store: 'VAMSI MOBILE NEST', location: 'Mangalagiri, AP', timestamp: new Date() });
});

// Store Owner Authentication Endpoint
app.post('/api/auth/owner-login', (req, res) => {
  const { username, password } = req.body;
  // Local development can use the demo credentials. Production must configure
  // explicit credentials in Vercel environment variables.
  const OWNER_USER = process.env.OWNER_USER || (process.env.VERCEL ? null : 'vamsi');
  const OWNER_PASS = process.env.OWNER_PASS || (process.env.VERCEL ? null : 'mobile123');

  if (!OWNER_USER || !OWNER_PASS) {
    return res.status(503).json({
      success: false,
      message: 'Owner login is not configured. Set OWNER_USER and OWNER_PASS in Vercel.'
    });
  }

  if (username === OWNER_USER && password === OWNER_PASS) {
    return res.json({
      success: true,
      token: 'vamsi-owner-authenticated-session-token',
      user: { name: 'Vamsi Store Owner', role: 'owner' }
    });
  }

  return res.status(401).json({ success: false, message: 'Invalid username or password. Please try again.' });
});

app.get('/api/services', async (req, res) => {
  try {
    const dbResults = await query('SELECT * FROM services WHERE active = TRUE');
    if (dbResults && dbResults.length > 0) return res.json(dbResults);
    return res.json(DEMO_SERVICES);
  } catch (error) {
    return res.json(DEMO_SERVICES);
  }
});

// POST /api/tradein-requests (Submit old phone valuation)
app.post('/api/tradein-requests', async (req, res) => {
  try {
    const { name, phone, whatsapp, brand, model, storage, condition, expectedPrice, notes } = req.body;
    
    const newLead = {
      id: Date.now(),
      customer_name: name,
      phone,
      whatsapp: whatsapp || phone,
      brand,
      model,
      storage,
      physical_condition: condition,
      expected_price: expectedPrice,
      notes,
      status: 'Pending',
      created_at: new Date()
    };
    
    TRADEIN_LEADS.unshift(newLead);

    await query(
      'INSERT INTO tradein_requests (customer_name, phone, whatsapp, brand, model, storage, physical_condition, expected_price, notes, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [name, phone, whatsapp || phone, brand, model, storage, condition, expectedPrice, notes, 'Pending']
    );

    return res.status(201).json({ success: true, message: 'Trade-in valuation request submitted successfully.', lead: newLead });
  } catch (error) {
    return res.status(200).json({ success: true, message: 'Request received successfully.' });
  }
});

// GET /api/tradein-requests (Owner endpoint to view all submitted phone trade-in leads)
app.get('/api/tradein-requests', async (req, res) => {
  try {
    const dbResults = await query('SELECT * FROM tradein_requests ORDER BY created_at DESC');
    if (dbResults && dbResults.length > 0) {
      return res.json({ total: dbResults.length, leads: dbResults });
    }
    return res.json({ total: TRADEIN_LEADS.length, leads: TRADEIN_LEADS });
  } catch (error) {
    return res.json({ total: TRADEIN_LEADS.length, leads: TRADEIN_LEADS });
  }
});

// PATCH /api/tradein-requests/:id/status (Owner endpoint to update trade-in status)
app.patch('/api/tradein-requests/:id/status', async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const targetStatus = status || 'Completed';

  const lead = TRADEIN_LEADS.find(l => String(l.id) === String(id));
  if (lead) {
    lead.status = targetStatus;
  }
  try {
    await query('UPDATE tradein_requests SET status = ? WHERE id = ?', [targetStatus, id]);
  } catch (error) {}

  return res.json({ success: true, message: `Trade-in request marked as ${targetStatus}.`, lead });
});

// DELETE /api/tradein-requests/:id (Owner endpoint to delete completed trade-in request)
app.delete('/api/tradein-requests/:id', async (req, res) => {
  const { id } = req.params;
  try {
    TRADEIN_LEADS = TRADEIN_LEADS.filter(l => String(l.id) !== String(id));
    await query('DELETE FROM tradein_requests WHERE id = ?', [id]);
    return res.json({ success: true, message: 'Trade-in request deleted successfully.' });
  } catch (error) {
    return res.json({ success: true, message: 'Trade-in request deleted.' });
  }
});

// POST /api/enquiries (Contact form queries)
app.post('/api/enquiries', async (req, res) => {
  try {
    const { name, phone, category, message } = req.body;
    const newEnquiry = { id: Date.now(), customer_name: name, phone, category, message, status: 'Pending', created_at: new Date() };
    STORE_ENQUIRIES.unshift(newEnquiry);

    await query(
      'INSERT INTO store_enquiries (customer_name, phone, category, message, status) VALUES (?, ?, ?, ?, ?)',
      [name, phone, category, message, 'Pending']
    );
    return res.status(201).json({ success: true, message: 'Enquiry submitted successfully.' });
  } catch (error) {
    return res.status(200).json({ success: true, message: 'Enquiry received successfully.' });
  }
});

// GET /api/enquiries (Owner endpoint to view customer contact queries)
app.get('/api/enquiries', async (req, res) => {
  try {
    const dbResults = await query('SELECT * FROM store_enquiries ORDER BY created_at DESC');
    if (dbResults && dbResults.length > 0) {
      return res.json({ total: dbResults.length, enquiries: dbResults });
    }
    return res.json({ total: STORE_ENQUIRIES.length, enquiries: STORE_ENQUIRIES });
  } catch (error) {
    return res.json({ total: STORE_ENQUIRIES.length, enquiries: STORE_ENQUIRIES });
  }
});

// PATCH /api/enquiries/:id/status (Owner endpoint to update enquiry status)
app.patch('/api/enquiries/:id/status', async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const targetStatus = status || 'Completed';

  const enq = STORE_ENQUIRIES.find(e => String(e.id) === String(id));
  if (enq) {
    enq.status = targetStatus;
  }
  try {
    await query('UPDATE store_enquiries SET status = ? WHERE id = ?', [targetStatus, id]);
  } catch (error) {}

  return res.json({ success: true, message: `Enquiry marked as ${targetStatus}.`, enquiry: enq });
});

// DELETE /api/enquiries/:id (Owner endpoint to delete completed contact enquiry)
app.delete('/api/enquiries/:id', async (req, res) => {
  const { id } = req.params;
  try {
    STORE_ENQUIRIES = STORE_ENQUIRIES.filter(e => String(e.id) !== String(id));
    await query('DELETE FROM store_enquiries WHERE id = ?', [id]);
    return res.json({ success: true, message: 'Enquiry deleted successfully.' });
  } catch (error) {
    return res.json({ success: true, message: 'Enquiry deleted.' });
  }
});

// Serve compiled static React app from client/dist
const clientDistPath = path.join(__dirname, '../client/dist');
app.use(express.static(clientDistPath));

// Catch-all route to serve client index.html for SPA routing
app.get('*', (req, res) => {
  if (req.path.startsWith('/api') || req.path.startsWith('/uploads')) {
    return res.status(404).json({ error: 'Endpoint not found' });
  }
  res.sendFile(path.join(clientDistPath, 'index.html'));
});

// Export Express app for Vercel Serverless Functions
export default app;

// Start Express Server locally or when run directly
if (process.env.VERCEL !== '1') {
  app.listen(PORT, () => {
    console.log(`🚀 VAMSI MOBILE NEST Website running on http://localhost:${PORT}`);
  });
}
