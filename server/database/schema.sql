-- VAMSI MOBILE NEST - Database Schema (MySQL)

CREATE DATABASE IF NOT EXISTS vamsi_mobile_nest CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE vamsi_mobile_nest;

-- Brands Table
CREATE TABLE IF NOT EXISTS brands (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE,
  logo_text VARCHAR(100) DEFAULT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- Categories Table
CREATE TABLE IF NOT EXISTS categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  slug VARCHAR(100) NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- Products Table
CREATE TABLE IF NOT EXISTS products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  brand VARCHAR(100) NOT NULL,
  category VARCHAR(100) NOT NULL,
  subcategory VARCHAR(100) DEFAULT NULL,
  price DECIMAL(10,2) NOT NULL,
  mrp DECIMAL(10,2) DEFAULT NULL,
  variant VARCHAR(100) DEFAULT NULL,
  ram VARCHAR(50) DEFAULT NULL,
  storage VARCHAR(50) DEFAULT NULL,
  color VARCHAR(50) DEFAULT NULL,
  condition_grade VARCHAR(50) DEFAULT 'New', -- 'New', 'Excellent Condition', 'Good Condition', 'Pre-Owned'
  battery_health VARCHAR(20) DEFAULT NULL,
  stock_status BOOLEAN DEFAULT TRUE,
  warranty VARCHAR(255) DEFAULT NULL,
  image VARCHAR(500) DEFAULT NULL,
  description TEXT,
  featured BOOLEAN DEFAULT FALSE,
  active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_brand (brand),
  INDEX idx_category (category),
  INDEX idx_condition (condition_grade)
) ENGINE=InnoDB;

-- Services Table
CREATE TABLE IF NOT EXISTS services (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  icon VARCHAR(100) DEFAULT 'Smartphone',
  description TEXT NOT NULL,
  highlight VARCHAR(255) DEFAULT NULL,
  active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- Offers Table
CREATE TABLE IF NOT EXISTS offers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  discount VARCHAR(100) DEFAULT NULL,
  validity VARCHAR(100) DEFAULT NULL,
  image VARCHAR(500) DEFAULT NULL,
  active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- Trade-In Evaluation Requests Table (Buy Old Phone)
CREATE TABLE IF NOT EXISTS tradein_requests (
  id INT AUTO_INCREMENT PRIMARY KEY,
  customer_name VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  whatsapp VARCHAR(20) DEFAULT NULL,
  brand VARCHAR(100) NOT NULL,
  model VARCHAR(255) NOT NULL,
  storage VARCHAR(50) DEFAULT NULL,
  physical_condition VARCHAR(100) DEFAULT NULL,
  expected_price DECIMAL(10,2) DEFAULT NULL,
  notes TEXT,
  images_json TEXT,
  status VARCHAR(50) DEFAULT 'New', -- 'New', 'Contacted', 'Confirmed', 'Completed', 'Cancelled'
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- Store Contact Enquiries Table
CREATE TABLE IF NOT EXISTS store_enquiries (
  id INT AUTO_INCREMENT PRIMARY KEY,
  customer_name VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  category VARCHAR(100) DEFAULT 'General Enquiry',
  message TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'New',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;
