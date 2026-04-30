# TileVista – Multy Tile Center Website

**A modern, responsive tiles shop website built with HTML, CSS, JavaScript & PHP**

---

## 📋 Project Overview

TileVista is a full-featured web application for **Multy Tile Center**, a premium tiles shop located in Galewela, Sri Lanka. The website allows customers to browse a complete tile catalogue, request quotes, and contact the shop — while giving the shop owner a clean backend to manage products and enquiries.

---

## 🏪 Shop Details

| Field        | Info                                        |
|--------------|---------------------------------------------|
| **Shop Name**  | Multy Tile Center                          |
| **Address**    | 346 Kurunegala - Dambulla Rd, Galewela, Sri Lanka |
| **Phone**      | +94 77 599 3388                            |
| **Email**      | multytilecenter.mtc@gmail.com              |
| **Hours**      | Mon–Fri: 8AM–7PM · Sat: 8AM–5PM           |
| **WhatsApp**   | https://wa.me/94775993388                  |

---

## 📁 File Structure

```
Tiles Vista/
│
├── index.html              ← Homepage (hero, featured tiles, testimonials, CTA)
├── catalogue.html          ← Tile catalogue with live search & filters
├── product.html            ← Product detail page (gallery, specs, add to cart)
├── contact.html            ← Contact page with enquiry form & map
├── login.html              ← Login & registration page
│
├── style.css               ← All styles (warm stone/terracotta theme)
├── app.js                  ← All frontend logic (cart, filters, product data)
│
├── process_enquiry.php     ← Handles enquiry form submissions → saves to DB
├── process_login.php       ← Handles user login with session management
├── process_register.php    ← Handles user registration with bcrypt password
│
├── database.sql            ← MySQL schema (run this first to set up the DB)
└── README.md               ← This file
```

---

## 🚀 How to Run Locally (XAMPP / Laragon)

### Step 1 — Install a Local Server
Download and install **[XAMPP](https://www.apachefriends.org/)** (free) or **[Laragon](https://laragon.org/)** (recommended).

### Step 2 — Copy the Project Files
Place the entire `Tiles Vista` folder inside:
- **XAMPP:** `C:/xampp/htdocs/tilevista/`
- **Laragon:** `C:/laragon/www/tilevista/`

### Step 3 — Set Up the Database
1. Start Apache and MySQL from the XAMPP/Laragon control panel
2. Open your browser and go to: `http://localhost/phpmyadmin`
3. Click **New** → create a database named `tilevista_db`
4. Select `tilevista_db` → click **Import** → choose `database.sql` → click **Go**

### Step 4 — Configure Database Connection
Open `process_enquiry.php`, `process_login.php`, and `process_register.php`.
Check these lines and update if your MySQL setup is different:

```php
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');           // Add your MySQL password if set
define('DB_NAME', 'tilevista_db');
```

### Step 5 — Open the Website
Go to: **`http://localhost/tilevista/`**

---

## 🌐 Pages & Features

### Homepage (`index.html`)
- Full-screen hero banner with animated tile imagery
- Category strip (Floor, Wall, Outdoor, Mosaic, Marble Effect)
- Featured tile products grid
- Promotional banner section
- "Why TileVista" section with image mosaic
- Customer testimonials
- Call-to-action section

### Catalogue (`catalogue.html`)
- Displays all 12+ tile products in a responsive grid
- **Live search** by tile name or category
- **Sidebar filters:** Category · Price range · Colour · Size
- **Sort options:** Featured · Price Low–High · Price High–Low · A–Z
- Pagination (9 tiles per page)
- Sliding cart sidebar

### Product Detail (`product.html`)
- Dynamic page loaded via URL parameter (`?id=1`)
- Image gallery with thumbnail switcher
- Full specifications table
- Quantity selector
- Add to cart button + Quote request link
- Related products section

### Contact (`contact.html`)
- Shop info cards (address, phone, email, hours)
- Embedded Google Map (Galewela, Sri Lanka)
- Enquiry form with:
  - Name, phone, email fields
  - Enquiry type dropdown (General / Quote / Sample / Bulk / Design)
  - Category checkboxes
  - Message textarea
  - Success confirmation screen

### Login & Register (`login.html`)
- Tab-switcher between Sign In and Register
- Password show/hide toggle
- Remember me checkbox
- Social login buttons (UI only — needs OAuth integration)

---

## 🛒 Cart System

The cart is powered by **localStorage** (client-side) for demo purposes.

- Add tiles from the catalogue or product pages
- Cart slides in from the right
- Shows item image, name, quantity, and price
- Cart count badge on the nav icon
- "Request Quote" links to the contact page
- Cart persists across page refreshes

---

## 🗄️ Database Tables

| Table         | Description                               |
|---------------|-------------------------------------------|
| `users`       | Customer & admin accounts (bcrypt passwords) |
| `categories`  | Tile categories (Floor, Wall, etc.)       |
| `tiles`       | All tile products with specs & pricing    |
| `tile_images` | Multiple images per tile                  |
| `enquiries`   | Customer messages & quote requests        |
| `wishlist`    | Saved favourites per user                 |
| `promotions`  | Homepage banners & offers                 |

### Default Admin Account
- **Email:** `multytilecenter.mtc@gmail.com`
- **Password:** `Admin@123`  
  ⚠️ **Change this immediately after first login in production!**

---

## 🎨 Design System

| Element       | Value                          |
|---------------|--------------------------------|
| **Theme**     | Warm Stone & Terracotta Luxury |
| **Primary**   | Terracotta `#c27752`           |
| **Background**| Warm Cream `#f7f4ef`           |
| **Text**      | Charcoal `#2d2926`             |
| **Accent**    | Gold `#b8953a`                 |
| **Font 1**    | Cormorant Garamond (headings)  |
| **Font 2**    | DM Sans (body text)            |

---

## 📦 Technologies Used

| Layer        | Technology                              |
|--------------|-----------------------------------------|
| Frontend     | HTML5, CSS3, JavaScript (Vanilla ES6+) |
| Backend      | PHP 8+                                  |
| Database     | MySQL 8                                 |
| Icons        | Font Awesome 6.5                        |
| Fonts        | Google Fonts                            |
| Images       | Unsplash (royalty-free)                 |
| Local Server | XAMPP / Laragon                         |

---

## ⚙️ Configuration & Customisation

### Changing Product Data
All tile data is stored in `app.js` as a JavaScript array (`window.tileData`).
To add/edit tiles, modify the objects in that array.  
In production, this should be loaded from the MySQL `tiles` table via PHP.

### Connecting Frontend to Database (PHP API)
Create a `api/tiles.php` endpoint that returns JSON from MySQL, then replace `window.tileData` in `app.js` with a `fetch()` call to that endpoint.

### Email Notifications
The `process_enquiry.php` uses PHP's `mail()` function. For reliable delivery, replace it with [PHPMailer](https://github.com/PHPMailer/PHPMailer) + SMTP (Gmail or any mail provider).

### Customising Business Hours
Edit the hours in the footer section of each HTML file and in `contact.html`'s info card.

---

## 🔒 Security Notes

- Passwords are hashed using **bcrypt** via `password_hash()` (PHP built-in)
- All user inputs are sanitised before database insertion
- Prepared statements are used for all SQL queries (prevents SQL injection)
- In production: enable **HTTPS**, set PHP `display_errors = Off`, and restrict phpMyAdmin access

---

## 📞 Support & Contact

For website-related questions, contact the shop at:

- 📧 **multytilecenter.mtc@gmail.com**
- 📱 **+94 77 599 3388**
- 📍 **346 Kurunegala - Dambulla Rd, Galewela, Sri Lanka**

---

*Built for CMN211 IT Project Management – TileVista Group Assignment, April 2026*
