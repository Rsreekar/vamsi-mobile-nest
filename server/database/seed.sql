-- VAMSI MOBILE NEST - Seed Data Script

USE vamsi_mobile_nest;

-- Insert Brands
INSERT IGNORE INTO brands (name, logo_text) VALUES
('Apple', ' Apple'),
('Samsung', 'SAMSUNG'),
('OnePlus', 'ONEPLUS'),
('Xiaomi', 'Xiaomi'),
('Redmi', 'Redmi'),
('Realme', 'realme'),
('Vivo', 'vivo'),
('OPPO', 'oppo'),
('Motorola', 'motorola'),
('Nothing', 'NOTHING'),
('Google Pixel', 'Google Pixel');

-- Insert Products
INSERT IGNORE INTO products (id, name, brand, category, price, mrp, variant, ram, storage, color, condition_grade, battery_health, stock_status, warranty, image, description, featured) VALUES
(1, 'Samsung Galaxy S25 5G', 'Samsung', 'new-phones', 74999.00, 79999.00, '12GB / 256GB', '12GB', '256GB', 'Navy Blue', 'New', NULL, TRUE, '1 Year Brand Warranty', 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&auto=format&fit=crop&q=80', 'Latest Samsung flagship featuring Snapdragon 8 Elite and Dynamic AMOLED display.', TRUE),
(2, 'Apple iPhone 15', 'Apple', 'new-phones', 69900.00, 79900.00, '128GB', '6GB', '128GB', 'Blue', 'New', NULL, TRUE, '1 Year Apple India Warranty', 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&auto=format&fit=crop&q=80', 'Dynamic Island, 48MP Main camera with 2x Telephoto and USB-C.', TRUE),
(3, 'OnePlus 12R 5G', 'OnePlus', 'new-phones', 39999.00, 42999.00, '16GB / 256GB', '16GB', '256GB', 'Cool Blue', 'New', NULL, TRUE, '1 Year Brand Warranty', 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&auto=format&fit=crop&q=80', '120Hz ProXDR display, Snapdragon 8 Gen 2, 5500 mAh battery with 100W SUPERVOOC charging.', TRUE),
(4, 'Apple iPhone 13 (Pre-Owned)', 'Apple', 'used-phones', 38500.00, 59900.00, '128GB', '4GB', '128GB', 'Midnight Black', 'Excellent Condition', '89%', TRUE, '3 Months Shop Warranty', 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=80', 'Verified pre-owned iPhone 13. Excellent cosmetic state, 89% battery health.', TRUE),
(5, 'Samsung Galaxy S22 Ultra (Pre-Owned)', 'Samsung', 'used-phones', 44999.00, 109999.00, '12GB / 256GB', '12GB', '256GB', 'Phantom Black', 'Good Condition', '86%', TRUE, '3 Months Shop Warranty', 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&auto=format&fit=crop&q=80', 'Built-in S-Pen, 108MP 100x Space Zoom camera. Tested 56-point hardware check passed.', FALSE),
(6, 'Boat Airdopes 141 TWS Earbuds', 'Accessories', 'accessories', 1299.00, 2990.00, 'Black', NULL, NULL, 'Black', 'New', NULL, TRUE, '1 Year Brand Warranty', 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&auto=format&fit=crop&q=80', '42H total playback, ENx Technology for clear calls.', TRUE);

-- Insert Services
INSERT IGNORE INTO services (id, name, icon, description, highlight) VALUES
(1, 'Mobile Screen Replacement', 'Smartphone', 'High quality original & OEM screen replacements for Apple, Samsung, OnePlus, Vivo, Oppo, Realme, Xiaomi with quick turnaround.', 'Includes free tempered glass installation!'),
(2, 'Tempered Glass Installation', 'ShieldCheck', 'Precision bubble-free installation of 9H tempered glass, UV curved glass, and matte privacy screen protectors.', 'Done in under 5 minutes.'),
(3, 'Used Mobile Sale', 'Repeat', 'Strictly quality-inspected pre-owned smartphones with up to 3 months store warranty and testing certificate.', '100% genuine checked phones.'),
(4, 'Buy Old Phones (Instant Cash / Exchange)', 'Banknote', 'Instant evaluation & top price offer for your old working or broken smartphone. Quick cash or trade-in discount on new phones.', 'Immediate valuation at store.'),
(5, 'All Mobile Accessories', 'ShoppingBag', 'Huge inventory of back covers, fast chargers, braided cables, power banks, smartwatches, and TWS Bluetooth audio.', 'All major brands in stock.');
