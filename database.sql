-- ===========================
-- TILEVISTA DATABASE SCHEMA
-- Run this in phpMyAdmin or MySQL
-- ===========================

CREATE DATABASE IF NOT EXISTS tilevista_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE tilevista_db;

-- ===== USERS =====
CREATE TABLE IF NOT EXISTS users (
    id           INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    firstname    VARCHAR(80)  NOT NULL,
    lastname     VARCHAR(80)  NOT NULL,
    email        VARCHAR(150) NOT NULL UNIQUE,
    phone        VARCHAR(30),
    password_hash VARCHAR(255) NOT NULL,
    role         ENUM('customer','admin') DEFAULT 'customer',
    created_at   DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at   DATETIME ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- Default admin account (password: Admin@123)
INSERT INTO users (firstname, lastname, email, phone, password_hash, role)
VALUES ('Admin', 'TileVista', 'admin@tilevista.com.my', '+60355556789',
        '$2y$12$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'admin');

-- ===== CATEGORIES =====
CREATE TABLE IF NOT EXISTS categories (
    id          INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name        VARCHAR(100) NOT NULL,
    slug        VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    img_url     VARCHAR(500),
    created_at  DATETIME DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

INSERT INTO categories (name, slug, description) VALUES
('Floor Tiles',    'floor',    'Durable tiles designed for floor installation'),
('Wall Tiles',     'wall',     'Decorative tiles for interior walls'),
('Outdoor Tiles',  'outdoor',  'Weather-resistant tiles for exterior use'),
('Mosaic Tiles',   'mosaic',   'Decorative mosaic patterns'),
('Marble Effect',  'marble',   'Porcelain tiles with marble-inspired designs');

-- ===== TILES / PRODUCTS =====
CREATE TABLE IF NOT EXISTS tiles (
    id           INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    category_id  INT UNSIGNED,
    name         VARCHAR(200) NOT NULL,
    slug         VARCHAR(200) NOT NULL UNIQUE,
    description  TEXT,
    price        DECIMAL(10,2) NOT NULL,
    size         VARCHAR(30),
    color        VARCHAR(50),
    finish       VARCHAR(80),
    thickness    VARCHAR(20),
    surface_use  VARCHAR(50),
    slip_rating  VARCHAR(10),
    stock        INT DEFAULT 0,
    is_new       TINYINT(1) DEFAULT 0,
    is_popular   TINYINT(1) DEFAULT 0,
    is_sale      TINYINT(1) DEFAULT 0,
    img_url      VARCHAR(500),
    created_at   DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at   DATETIME ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL
) ENGINE=InnoDB;

-- ===== TILE IMAGES =====
CREATE TABLE IF NOT EXISTS tile_images (
    id       INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    tile_id  INT UNSIGNED NOT NULL,
    img_url  VARCHAR(500),
    sort_order TINYINT DEFAULT 0,
    FOREIGN KEY (tile_id) REFERENCES tiles(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- ===== ENQUIRIES =====
CREATE TABLE IF NOT EXISTS enquiries (
    id            INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user_id       INT UNSIGNED DEFAULT NULL,
    name          VARCHAR(120) NOT NULL,
    email         VARCHAR(150) NOT NULL,
    phone         VARCHAR(30),
    enquiry_type  ENUM('general','quote','sample','bulk','design') DEFAULT 'general',
    categories    VARCHAR(200),
    message       TEXT NOT NULL,
    status        ENUM('new','read','replied','closed') DEFAULT 'new',
    created_at    DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
) ENGINE=InnoDB;

-- ===== CART / WISHLIST =====
CREATE TABLE IF NOT EXISTS wishlist (
    id         INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user_id    INT UNSIGNED NOT NULL,
    tile_id    INT UNSIGNED NOT NULL,
    added_at   DATETIME DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY unique_wish (user_id, tile_id),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (tile_id) REFERENCES tiles(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- ===== PROMOTIONS / BANNERS =====
CREATE TABLE IF NOT EXISTS promotions (
    id          INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title       VARCHAR(200) NOT NULL,
    description TEXT,
    img_url     VARCHAR(500),
    link_url    VARCHAR(500),
    is_active   TINYINT(1) DEFAULT 1,
    start_date  DATE,
    end_date    DATE,
    created_at  DATETIME DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- ===== USEFUL VIEWS =====
CREATE OR REPLACE VIEW v_enquiry_summary AS
SELECT
    e.id,
    e.name,
    e.email,
    e.phone,
    e.enquiry_type,
    e.categories,
    LEFT(e.message, 80) AS preview,
    e.status,
    e.created_at
FROM enquiries e
ORDER BY e.created_at DESC;
