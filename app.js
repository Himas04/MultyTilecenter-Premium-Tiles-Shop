/* ===========================
   MULTYTILECENTER – MAIN JS
   =========================== */

// ===== TILE DATA =====
window.tileData = [
  {
    id: 1, name: "Calacatta Marble", category: "marble", color: "white",
    size: "60x120", price: 13050, stock: 48, badges: ["new","popular"],
    img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&q=80",
    imgs: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80"
    ],
    desc: "Inspired by the iconic Italian Calacatta marble, this large-format porcelain tile features bold grey veining on a pristine white background. Perfect for luxury bathrooms and open-plan living areas.",
    specs: { finish:"Polished", thickness:"10mm", surface:"Indoor", slip:"R9", coverage:"1.44 m²/box" }
  },
  {
    id: 2, name: "Terracotta Heritage", category: "floor", color: "terracotta",
    size: "30x30", price: 5220, stock: 120, badges: ["popular"],
    img: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=600&q=80",
    imgs: [
      "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=600&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80"
    ],
    desc: "Authentic terracotta-effect floor tiles with a warm, earthy tone that brings character and warmth to any space. Ideal for kitchens, hallways, and outdoor patios.",
    specs: { finish:"Matt", thickness:"9mm", surface:"In/Outdoor", slip:"R11", coverage:"1.08 m²/box" }
  },
  {
    id: 3, name: "Nordic Slate Grey", category: "wall", color: "grey",
    size: "30x60", price: 6480, stock: 95, badges: [],
    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80",
    imgs: [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80",
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=600&q=80"
    ],
    desc: "Cool, sophisticated slate-grey wall tiles with a subtle texture that adds depth to minimalist interiors. Pairs beautifully with white sanitary ware and warm wood accents.",
    specs: { finish:"Matt", thickness:"8mm", surface:"Indoor", slip:"R10", coverage:"1.08 m²/box" }
  },
  {
    id: 4, name: "Mediterranean Blue Mosaic", category: "mosaic", color: "blue",
    size: "30x30", price: 8550, stock: 60, badges: ["new"],
    img: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&q=80",
    imgs: [
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&q=80"
    ],
    desc: "Hand-laid glass mosaic tiles in deep ocean blues and turquoise. Perfect for swimming pools, feature walls, and bathroom niches. Each tile is individually cut for authenticity.",
    specs: { finish:"Gloss", thickness:"4mm", surface:"In/Outdoor", slip:"R9", coverage:"0.81 m²/box" }
  },
  {
    id: 5, name: "Desert Sand Travertine", category: "floor", color: "beige",
    size: "60x60", price: 7920, stock: 75, badges: ["popular"],
    img: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80",
    imgs: [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80",
      "https://images.unsplash.com/photo-1564540574859-0dfb63985953?w=600&q=80"
    ],
    desc: "Travertine-inspired large format tiles in warm sandy beige tones with natural veining. Creates a seamless, flowing aesthetic for open-plan living and dining spaces.",
    specs: { finish:"Lappato", thickness:"10mm", surface:"Indoor", slip:"R9", coverage:"1.44 m²/box" }
  },
  {
    id: 6, name: "Volcanic Black Matte", category: "floor", color: "black",
    size: "60x60", price: 10080, stock: 42, badges: ["new"],
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
    imgs: [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80"
    ],
    desc: "Dramatically dark and utterly sophisticated. This ultra-matte black tile references the texture of volcanic stone, bringing bold, contemporary energy to modern interiors.",
    specs: { finish:"Ultra Matt", thickness:"10mm", surface:"Indoor", slip:"R11", coverage:"1.44 m²/box" }
  },
  {
    id: 7, name: "Garden Stone Outdoor", category: "outdoor", color: "beige",
    size: "60x60", price: 5850, stock: 200, badges: [],
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    imgs: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80"
    ],
    desc: "Heavy-duty outdoor porcelain tiles that mimic natural garden stone. Frost-resistant, slip-resistant, and UV stable — ideal for patios, pool surrounds, and driveways.",
    specs: { finish:"Textured", thickness:"20mm", surface:"Outdoor", slip:"R13", coverage:"0.72 m²/box" }
  },
  {
    id: 8, name: "Ivory Arabesque", category: "mosaic", color: "white",
    size: "20x20", price: 10620, stock: 35, badges: ["new","sale"],
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=600&q=80",
    imgs: [
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=600&q=80"
    ],
    desc: "Arabesque-shaped mosaic tiles in creamy ivory with a lustrous gloss finish. Evokes the artistry of Moroccan tilework, perfect for kitchen splashbacks and bathroom feature walls.",
    specs: { finish:"Gloss", thickness:"6mm", surface:"Indoor", slip:"R9", coverage:"0.72 m²/box" }
  },
  {
    id: 9, name: "Rustic Brick Wall", category: "wall", color: "terracotta",
    size: "30x60", price: 4950, stock: 140, badges: [],
    img: "https://images.unsplash.com/photo-1564540574859-0dfb63985953?w=600&q=80",
    imgs: [
      "https://images.unsplash.com/photo-1564540574859-0dfb63985953?w=600&q=80"
    ],
    desc: "Exposed brick-effect wall tiles with genuine texture and colour variation. Adds industrial character to feature walls, open kitchens, and alfresco dining areas.",
    specs: { finish:"Matt Textured", thickness:"9mm", surface:"Indoor", slip:"R10", coverage:"1.08 m²/box" }
  },
  {
    id: 10, name: "Pearl White Satin", category: "wall", color: "white",
    size: "30x60", price: 5580, stock: 88, badges: ["popular"],
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    imgs: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"
    ],
    desc: "Timeless pearl white satin tiles with a subtle sheen. This versatile classic complements any colour palette and is the perfect backdrop for contemporary or traditional interiors.",
    specs: { finish:"Satin", thickness:"8mm", surface:"Indoor", slip:"R9", coverage:"1.08 m²/box" }
  },
  {
    id: 11, name: "Tundra Grey Marble", category: "marble", color: "grey",
    size: "60x120", price: 13950, stock: 28, badges: ["new"],
    img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&q=80",
    imgs: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&q=80"
    ],
    desc: "Sophisticated cool grey marble-effect porcelain with sweeping white veins. Ideal for creating gallery-worthy floors and statement feature walls in luxury spaces.",
    specs: { finish:"Polished", thickness:"10mm", surface:"Indoor", slip:"R9", coverage:"1.44 m²/box" }
  },
  {
    id: 12, name: "Jungle Green Zellige", category: "mosaic", color: "blue",
    size: "10x10", price: 12150, stock: 52, badges: ["new","sale"],
    img: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&q=80",
    imgs: [
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&q=80"
    ],
    desc: "Hand-crafted Zellige-style mosaic tiles in rich emerald and sage greens. Each piece has unique natural variation — no two tiles are the same, ensuring a truly one-of-a-kind installation.",
    specs: { finish:"Gloss Crackle", thickness:"12mm", surface:"Indoor", slip:"R9", coverage:"0.36 m²/box" }
  }
];

// ===== STATE =====
let cart = JSON.parse(localStorage.getItem('tvCart') || '[]');
let currentQty = 1;

// ===== PRELOADER =====
window.addEventListener('load', () => {
  setTimeout(() => {
    const pl = document.getElementById('preloader');
    if (pl) pl.classList.add('hidden');
  }, 2000);
});

// ===== NAV SCROLL =====
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) navbar.classList.add('scrolled');
    else if (!navbar.classList.contains('scrolled-auto')) navbar.classList.remove('scrolled');
  });
}

// ===== HAMBURGER =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('open');
  });
  // Close mobile nav when any link is clicked
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('open');
  }));
}

// ===== CART HELPERS =====
function saveCart() { localStorage.setItem('tvCart', JSON.stringify(cart)); updateCartUI(); }
function updateCartUI() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  document.querySelectorAll('#cartCount').forEach(el => el.textContent = count);
  renderCartItems();
}
function renderCartItems() {
  const el = document.getElementById('cartItems');
  const totalEl = document.getElementById('cartTotal');
  if (!el) return;
  if (cart.length === 0) {
    el.innerHTML = '<div class="cart-empty"><i class="fas fa-shopping-cart"></i><p>Your cart is empty</p></div>';
    if (totalEl) totalEl.textContent = 'LKR 0.00';
    return;
  }
  el.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.img}" alt="${item.name}"/>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">LKR ${(item.price * item.qty).toFixed(2)}</div>
        <div class="cart-item-qty">${item.qty} box${item.qty>1?'es':''} × LKR ${item.price}/box</div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${item.id})"><i class="fas fa-trash-alt"></i></button>
    </div>
  `).join('');
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  if (totalEl) totalEl.textContent = `LKR ${total.toFixed(2)}`;
}
function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
}
function addToCart(product, qty = 1) {
  const existing = cart.find(i => i.id === product.id);
  if (existing) existing.qty += qty;
  else cart.push({ id: product.id, name: product.name, price: product.price, img: product.img, qty });
  saveCart();
  showToast(`<i class="fas fa-check"></i> "${product.name}" added to cart`);
  openCart();
}
function openCart() {
  document.getElementById('cartSidebar')?.classList.add('open');
  document.getElementById('cartOverlay')?.classList.add('open');
}
function closeCart() {
  document.getElementById('cartSidebar')?.classList.remove('open');
  document.getElementById('cartOverlay')?.classList.remove('open');
}
document.getElementById('closeCart')?.addEventListener('click', closeCart);
document.getElementById('cartOverlay')?.addEventListener('click', closeCart);
document.querySelectorAll('.cart-btn').forEach(btn => btn.addEventListener('click', e => { e.preventDefault(); openCart(); }));

// ===== TOAST =====
function showToast(msg) {
  let t = document.querySelector('.toast');
  if (!t) { t = document.createElement('div'); t.className = 'toast'; document.body.appendChild(t); }
  t.innerHTML = msg;
  t.classList.add('show');
  clearTimeout(t._timeout);
  t._timeout = setTimeout(() => t.classList.remove('show'), 3000);
}

// ===== PRODUCT CARD =====
function createProductCard(p) {
  const badgeHtml = p.badges.map(b => `<span class="badge badge-${b}">${b}</span>`).join('');
  return `
    <div class="product-card fade-up" onclick="window.location='product.html?id=${p.id}'">
      <div class="product-card-img">
        <img src="${p.img}" alt="${p.name}" loading="lazy"/>
        <div class="product-card-badges">${badgeHtml}</div>
        <button class="product-card-wish" onclick="event.stopPropagation();this.classList.toggle('wished')"><i class="fas fa-heart"></i></button>
      </div>
      <div class="product-card-body">
        <div class="product-card-cat">${p.category.replace(/\b\w/g,c=>c.toUpperCase())}</div>
        <div class="product-card-title">${p.name}</div>
        <div class="product-card-meta"><i class="fas fa-ruler-combined"></i>${p.size} cm <span>·</span> <i class="fas fa-cubes"></i>${p.stock} in stock</div>
        <div class="product-card-footer">
          <div class="product-card-price">LKR ${p.price}<span>/box</span></div>
          <button class="add-cart-btn" onclick="event.stopPropagation();addToCart(window.tileData.find(x=>x.id===${p.id}))"><i class="fas fa-cart-plus"></i></button>
        </div>
      </div>
    </div>`;
}

// ===== HOMEPAGE FEATURED =====
const featuredGrid = document.getElementById('featuredGrid');
if (featuredGrid) {
  const featured = window.tileData.filter(p => p.badges.length > 0).slice(0, 6);
  featuredGrid.innerHTML = featured.map(createProductCard).join('');
  observeFadeUps();
}

// ===== CATALOGUE PAGE =====
const catalogueGrid = document.getElementById('catalogueGrid');
if (catalogueGrid) {
  let filtered = [...window.tileData];
  let currentPage = 1;
  const PER_PAGE = 9;

  function applyFilters() {
    const search = document.getElementById('searchInput')?.value.toLowerCase() || '';
    const catVal = document.querySelector('input[name="cat"]:checked')?.value || 'all';
    const maxPrice = parseFloat(document.getElementById('priceRange')?.value || 25000);
    const activeCol = document.querySelector('.swatch.active-swatch')?.dataset.col || 'all';
    const sizes = [...document.querySelectorAll('.size-check:checked')].map(i => i.value);
    const sort = document.getElementById('sortSelect')?.value || 'default';

    filtered = window.tileData.filter(p => {
      if (search && !p.name.toLowerCase().includes(search) && !p.category.includes(search)) return false;
      if (catVal !== 'all' && p.category !== catVal) return false;
      if (p.price > maxPrice) return false;
      if (activeCol !== 'all' && p.color !== activeCol) return false;
      if (sizes.length && !sizes.includes(p.size)) return false;
      return true;
    });

    if (sort === 'price-asc') filtered.sort((a,b) => a.price - b.price);
    else if (sort === 'price-desc') filtered.sort((a,b) => b.price - a.price);
    else if (sort === 'name') filtered.sort((a,b) => a.name.localeCompare(b.name));

    currentPage = 1;
    render();
  }

  function render() {
    const start = (currentPage - 1) * PER_PAGE;
    const page = filtered.slice(start, start + PER_PAGE);
    const countEl = document.getElementById('resultCount');
    if (countEl) countEl.textContent = `Showing ${filtered.length} tile${filtered.length !== 1 ? 's' : ''}`;
    catalogueGrid.innerHTML = page.length
      ? page.map(createProductCard).join('')
      : '<p style="padding:3rem;text-align:center;color:var(--warm-grey);grid-column:1/-1">No tiles match your filters.</p>';
    renderPagination();
    observeFadeUps();
  }

  function renderPagination() {
    const pages = Math.ceil(filtered.length / PER_PAGE);
    const el = document.getElementById('pagination');
    if (!el || pages <= 1) { if(el) el.innerHTML=''; return; }
    let html = '';
    for (let i = 1; i <= pages; i++) {
      html += `<button class="page-btn ${i===currentPage?'active-page':''}" onclick="goPage(${i})">${i}</button>`;
    }
    el.innerHTML = html;
  }

  window.goPage = (n) => { currentPage = n; render(); window.scrollTo({ top: document.querySelector('.catalogue-section').offsetTop - 80, behavior: 'smooth' }); };

  // Filters
  document.getElementById('searchInput')?.addEventListener('input', applyFilters);
  document.getElementById('catFilter')?.addEventListener('change', e => {
    document.querySelectorAll('.filter-check').forEach(l => l.classList.remove('active-filter'));
    e.target.closest('.filter-check')?.classList.add('active-filter');
    applyFilters();
  });
  document.getElementById('priceRange')?.addEventListener('input', e => {
    const el = document.getElementById('priceVal');
    if (el) el.textContent = `LKR ${e.target.value}`;
    applyFilters();
  });
  document.querySelectorAll('.swatch').forEach(sw => sw.addEventListener('click', () => {
    document.querySelectorAll('.swatch').forEach(s => s.classList.remove('active-swatch'));
    sw.classList.add('active-swatch');
    applyFilters();
  }));
  document.querySelectorAll('.size-check').forEach(cb => cb.addEventListener('change', applyFilters));
  document.getElementById('sortSelect')?.addEventListener('change', applyFilters);
  document.getElementById('resetFilters')?.addEventListener('click', () => {
    document.getElementById('searchInput').value = '';
    document.querySelector('input[value="all"]').checked = true;
    document.querySelectorAll('.filter-check').forEach(l => l.classList.remove('active-filter'));
    document.querySelector('.filter-check[data-val="all"]')?.classList.add('active-filter');
    document.getElementById('priceRange').value = 20000;
    document.getElementById('priceVal').textContent = 'LKR 20000';
    document.querySelectorAll('.swatch').forEach(s => s.classList.remove('active-swatch'));
    document.querySelector('.swatch[data-col="all"]')?.classList.add('active-swatch');
    document.querySelectorAll('.size-check').forEach(cb => cb.checked = false);
    document.getElementById('sortSelect').value = 'default';
    applyFilters();
  });

  // URL params
  const params = new URLSearchParams(window.location.search);
  const urlCat = params.get('cat');
  if (urlCat) {
    const radio = document.querySelector(`input[value="${urlCat}"]`);
    if (radio) { radio.checked = true; document.querySelectorAll('.filter-check').forEach(l=>l.classList.remove('active-filter')); radio.closest('.filter-check')?.classList.add('active-filter'); }
  }

  applyFilters();
}

// ===== PRODUCT DETAIL =====
window.loadProductDetail = function(product) {
  if (!product) return;
  document.getElementById('pdBreadcrumb').textContent = product.name;
  document.getElementById('pdCategory').textContent = product.category.replace(/\b\w/g,c=>c.toUpperCase());
  document.getElementById('pdTitle').textContent = product.name;
  document.getElementById('pdPrice').textContent = `LKR ${product.price} / box`;
  document.getElementById('pdDesc').textContent = product.desc;

  const badgeEl = document.getElementById('pdBadges');
  if (badgeEl) badgeEl.innerHTML = product.badges.map(b=>`<span class="badge badge-${b}">${b}</span>`).join('');

  const mainImg = document.getElementById('mainImage');
  if (mainImg) mainImg.src = product.imgs[0];

  const thumbs = document.getElementById('galleryThumbs');
  if (thumbs && product.imgs.length > 1) {
    thumbs.innerHTML = product.imgs.map((src, i) =>
      `<img src="${src}" class="thumb-img ${i===0?'active-thumb':''}" onclick="switchImg(this,'${src}')"/>`
    ).join('');
  }

  const specsEl = document.getElementById('pdSpecs');
  if (specsEl) {
    specsEl.innerHTML = Object.entries(product.specs).map(([k,v]) =>
      `<div class="spec-item"><div class="spec-label">${k}</div><div class="spec-value">${v}</div></div>`
    ).join('');
  }

  const addBtn = document.getElementById('addToCartBtn');
  if (addBtn) addBtn.onclick = () => addToCart(product, currentQty);

  // Related
  const related = window.tileData.filter(p => p.id !== product.id && p.category === product.category).slice(0, 4);
  const relGrid = document.getElementById('relatedGrid');
  if (relGrid) relGrid.innerHTML = related.map(createProductCard).join('');

  observeFadeUps();
};

window.switchImg = function(thumb, src) {
  document.getElementById('mainImage').src = src;
  document.querySelectorAll('.thumb-img').forEach(t => t.classList.remove('active-thumb'));
  thumb.classList.add('active-thumb');
};

window.changeQty = function(delta) {
  currentQty = Math.max(1, currentQty + delta);
  const el = document.getElementById('qtyVal');
  if (el) el.textContent = currentQty;
};

// ===== AUTH TABS =====
const loginTab = document.getElementById('loginTab');
const registerTab = document.getElementById('registerTab');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
if (loginTab && registerTab) {
  loginTab.addEventListener('click', () => {
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
    loginTab.classList.add('active');
    registerTab.classList.remove('active');
  });
  registerTab.addEventListener('click', () => {
    registerForm.style.display = 'block';
    loginForm.style.display = 'none';
    registerTab.classList.add('active');
    loginTab.classList.remove('active');
  });
}

// ===== PASSWORD TOGGLE =====
window.togglePwd = function(id) {
  const input = document.getElementById(id);
  if (input) input.type = input.type === 'password' ? 'text' : 'password';
};

// ===== ENQUIRY FORM =====
const enquiryForm = document.getElementById('enquiryForm');
if (enquiryForm) {
  enquiryForm.addEventListener('submit', e => {
    e.preventDefault();
    enquiryForm.style.display = 'none';
    document.getElementById('formSuccess').style.display = 'block';
  });
}

// ===== SCROLL ANIMATIONS =====
function observeFadeUps() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); obs.unobserve(entry.target); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-up:not(.visible)').forEach(el => obs.observe(el));
}
observeFadeUps();

// ===== PRODUCT PAGE AUTO-INIT =====
if (document.getElementById('pdTitle')) {
  const pid = parseInt(new URLSearchParams(window.location.search).get('id'));
  const prod = window.tileData.find(p => p.id === pid);
  if (prod) window.loadProductDetail(prod);
}

// ===== INIT =====
updateCartUI();
