/**
 * ملف الوظائف والتفاعل البرمجي (script.js)
 * يتولى عرض المنتجات ديناميكياً من data.js، الفلترة والبحث والفرز،
 * إدارة سلة المشتريات بالكامل، وتأثيرات الميلان ثلاثية الأبعاد (3D Tilt Effect).
 */

// ==================== حالة التطبيق (State) ====================
let currentCategory = "الكل";
let searchQuery = "";
let currentSort = "default";
let cart = [];

// تحميل السلة والوضع اللوني المحفوظ بأمان
try {
  const savedCart = localStorage.getItem("turboPartsCart");
  if (savedCart) {
    cart = JSON.parse(savedCart);
  }
  const savedTheme = localStorage.getItem("turboPartsTheme");
  if (savedTheme === "light") {
    document.body.classList.add("light-mode");
  }
} catch (err) {
  cart = [];
}

// ==================== عناصر الـ DOM ====================
const productsGrid = document.getElementById("products-grid");
const cartCountEl = document.getElementById("cart-count");
const cartItemsContainer = document.getElementById("cart-items-list");
const cartSubtotalEl = document.getElementById("cart-subtotal");
const cartTotalEl = document.getElementById("cart-total");
const cartDrawer = document.getElementById("cart-drawer");
const backdropOverlay = document.getElementById("backdrop-overlay");
const productModal = document.getElementById("product-modal");
const modalContent = document.getElementById("modal-content");
const searchInput = document.getElementById("search-input");
const sortSelect = document.getElementById("sort-select");
const themeToggleBtn = document.getElementById("theme-toggle");
const toastContainer = document.getElementById("toast-container");

// ==================== توليد نجوم التقييم ====================
function renderStars(rating) {
  const fullStars = Math.round(rating);
  return "★".repeat(fullStars) + "☆".repeat(5 - fullStars);
}

// ==================== عرض المنتجات في الشبكة ====================
function renderProducts() {
  if (!productsGrid) return;

  let filtered = productsData.filter((item) => {
    const matchesCategory =
      currentCategory === "الكل" || item.category === currentCategory;
    const matchesSearch =
      item.name.includes(searchQuery) ||
      item.description.includes(searchQuery) ||
      item.oem.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (currentSort === "price-asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (currentSort === "price-desc") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (currentSort === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  if (filtered.length === 0) {
    productsGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; background: var(--bg-card); border-radius: 18px; border: 1px solid var(--border-color);">
        <h3 style="margin-bottom: 0.5rem;">لا توجد نتائج مطابقة للبحث</h3>
        <p style="color: var(--text-secondary);">جرّب اختيار قسم آخر أو مسح كلمة البحث.</p>
      </div>
    `;
    return;
  }

  productsGrid.innerHTML = filtered
    .map(
      (product) => `
      <article class="product-card-3d" data-id="${product.id}">
        <div class="card-glare"></div>
        <div>
          <div class="card-top-meta">
            <span class="product-badge ${product.badgeType || ""}">${product.badge}</span>
            <span class="stock-status">
              <span class="stock-dot"></span>
              ${product.availabilityText}
            </span>
          </div>

          <div class="product-image-wrap">
            <img src='${product.image}' alt="${product.name}" loading="lazy" />
          </div>

          <div class="card-body-3d">
            <div class="category-Row">
              <span>قسم: <strong>${product.category}</strong></span>
              <span class="oem-code">${product.oem}</span>
            </div>
            <h3 class="product-title">${product.name}</h3>
            <div class="rating-row">
              <span class="stars">${renderStars(product.rating)}</span>
              <strong>${product.rating}</strong>
              <span style="color: var(--text-muted);">(${product.reviewsCount} تقييم)</span>
            </div>
            <p class="product-desc">${product.description}</p>
          </div>
        </div>

        <div class="card-footer-3d">
          <div class="price-block">
            <span class="old-price">${product.oldPrice.toLocaleString()} ر.س</span>
            <span class="current-price">${product.price.toLocaleString()} ر.س</span>
          </div>
          <div class="card-actions">
            <button class="btn-quick-view" data-action="quick-view" data-id="${product.id}" title="معاينة التفاصيل">
              👁️
            </button>
            <button class="btn-add-cart" data-action="add-to-cart" data-id="${product.id}">
              <span>+ أضف للسلة</span>
            </button>
          </div>
        </div>
      </article>
    `
    )
    .join("");

  init3DTiltCards();
}

// ==================== تأثير الميلان ثلاثي الأبعاد (3D Tilt Effect) ====================
function init3DTiltCards() {
  const cards = document.querySelectorAll(".product-card-3d");
  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // حساب زاوية الدوران حول المحور X والمحور Y
      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
      card.style.setProperty("--glare-x", `${((x / rect.width) * 100).toFixed(1)}%`);
      card.style.setProperty("--glare-y", `${((y / rect.height) * 100).toFixed(1)}%`);
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    });
  });
}

// تفعيل حركة 3D لكرت القسم الرئيسي (Hero 3D Card)
function initHero3DCard() {
  const heroCard = document.getElementById("hero-3d-card");
  if (!heroCard) return;

  heroCard.addEventListener("mousemove", (e) => {
    const rect = heroCard.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -12;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 12;
    heroCard.style.transform = `perspective(1100px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
  });

  heroCard.addEventListener("mouseleave", () => {
    heroCard.style.transform = "perspective(1100px) rotateX(4deg) rotateY(-8deg)";
  });
}

// ==================== إدارة سلة المشتريات (Shopping Cart) ====================
function saveCart() {
  try {
    localStorage.setItem("turboPartsCart", JSON.stringify(cart));
  } catch (err) {
    // تجاهل قيود التخزين في البيئات المعزولة
  }
}

function addToCart(productId) {
  const product = productsData.find((p) => p.id === Number(productId));
  if (!product) return;

  const existing = cart.find((item) => item.id === product.id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      oem: product.oem,
      qty: 1
    });
  }

  saveCart();
  updateCartUI();

  if (cartCountEl) {
    cartCountEl.classList.add("bump");
    setTimeout(() => cartCountEl.classList.remove("bump"), 260);
  }
  showToast(`تمت إضافة "${product.name}" إلى السلة بنجاح`);
}

function changeQty(productId, delta) {
  const item = cart.find((i) => i.id === Number(productId));
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter((i) => i.id !== Number(productId));
  }
  saveCart();
  updateCartUI();
}

function removeFromCart(productId) {
  cart = cart.filter((i) => i.id !== Number(productId));
  saveCart();
  updateCartUI();
  showToast("تم حذف القطعة من سلة المشتريات");
}

function clearCart() {
  cart = [];
  saveCart();
  updateCartUI();
  showToast("تم إفراغ سلة المشتريات");
}

function updateCartUI() {
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (cartCountEl) {
    cartCountEl.textContent = totalCount;
  }
  if (cartSubtotalEl) {
    cartSubtotalEl.textContent = `${subtotal.toLocaleString()} ر.س`;
  }
  if (cartTotalEl) {
    cartTotalEl.textContent = `${subtotal.toLocaleString()} ر.س`;
  }

  if (!cartItemsContainer) return;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem; color: var(--text-secondary);">
        <p style="font-size: 2.5rem; margin-bottom: 0.5rem;">🛒</p>
        <p style="font-weight: 700;">سلة المشتريات فارغة حالياً</p>
        <p style="font-size: 0.85rem;">تصفح قطع الغيار الأصلية وأضف ما تحتاجه لسيارتك.</p>
      </div>
    `;
    return;
  }

  cartItemsContainer.innerHTML = cart
    .map(
      (item) => `
      <div class="cart-item">
        <img src='${item.image}' alt="${item.name}" />
        <div>
          <div class="cart-item-title">${item.name}</div>
          <div class="cart-item-price">${(item.price * item.qty).toLocaleString()} ر.س</div>
          <div class="qty-controls">
            <button class="qty-btn" data-cart-action="dec" data-id="${item.id}">-</button>
            <span>${item.qty}</span>
            <button class="qty-btn" data-cart-action="inc" data-id="${item.id}">+</button>
          </div>
        </div>
        <button class="btn-remove-item" data-cart-action="remove" data-id="${item.id}" title="حذف">
          🗑️
        </button>
      </div>
    `
    )
    .join("");
}

// ==================== نافذة المعاينة السريعة للمنتج ====================
function openQuickView(productId) {
  const product = productsData.find((p) => p.id === Number(productId));
  if (!product || !productModal || !modalContent) return;

  modalContent.innerHTML = `
    <div class="product-image-wrap" style="height: 240px; margin-bottom: 0;">
      <img src='${product.image}' alt="${product.name}" />
    </div>
    <div>
      <span class="product-badge ${product.badgeType || ""}" style="margin-bottom: 0.5rem; display: inline-block;">${product.badge}</span>
      <h3 style="font-size: 1.3rem; font-weight: 900; margin-bottom: 0.4rem;">${product.name}</h3>
      <p style="font-size: 0.85rem; color: var(--accent-orange); font-family: monospace; margin-bottom: 0.6rem;">رقم القطعة OEM: ${product.oem}</p>
      <p style="font-size: 0.92rem; color: var(--text-secondary); margin-bottom: 0.85rem;">${product.description}</p>
      <p style="font-size: 0.85rem; margin-bottom: 1rem;"><strong>التوافق:</strong> ${product.compatibility}</p>
      <div style="display: flex; align-items: center; justify-content: space-between; padding-top: 0.9rem; border-top: 1px solid var(--border-color);">
        <span class="current-price">${product.price.toLocaleString()} ر.س</span>
        <div style="display: flex; gap: 0.5rem;">
          <button class="btn-add-cart" id="modal-add-btn" data-id="${product.id}">+ أضف للسلة</button>
          <button class="btn-secondary" id="modal-close-btn" style="padding: 0.55rem 1rem;">إغلاق</button>
        </div>
      </div>
    </div>
  `;

  productModal.classList.add("open");
  backdropOverlay.classList.add("open");

  document.getElementById("modal-add-btn").addEventListener("click", () => {
    addToCart(product.id);
    closeAllModals();
  });
  document.getElementById("modal-close-btn").addEventListener("click", closeAllModals);
}

function closeAllModals() {
  if (cartDrawer) cartDrawer.classList.remove("open");
  if (productModal) productModal.classList.remove("open");
  if (backdropOverlay) backdropOverlay.classList.remove("open");
}

// ==================== فلترة الأقسام ====================
function setCategory(category) {
  currentCategory = category;

  document.querySelectorAll("[data-category]").forEach((btn) => {
    if (btn.getAttribute("data-category") === category) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  renderProducts();
}

// ==================== الإشعارات الفورية (Toast) ====================
function showToast(message) {
  if (!toastContainer) return;
  const toast = document.createElement("div");
  toast.className = "toast-msg";
  toast.textContent = message;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 2800);
}

// ==================== ربط الأحداث عند تحميل الصفحة ====================
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  updateCartUI();
  initHero3DCard();

  // تحديث أيقونة الوضع الليلي/النهاري
  const updateThemeIcon = () => {
    if (!themeToggleBtn) return;
    themeToggleBtn.textContent = document.body.classList.contains("light-mode")
      ? "🌙"
      : "☀️";
  };
  updateThemeIcon();

  // تبديل الوضع الليلي والنهاري
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
      updateThemeIcon();
      const mode = document.body.classList.contains("light-mode") ? "light" : "dark";
      try {
        localStorage.setItem("turboPartsTheme", mode);
      } catch (e) {}
      showToast(mode === "light" ? "تم تفعيل الوضع النهاري" : "تم تفعيل الوضع الليلي الرياضي");
    });
  }

  // أزرار الفلترة في شريط التنقل والقسم والتذييل
  document.querySelectorAll("[data-category]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const cat = btn.getAttribute("data-category");
      setCategory(cat);
      const productsSec = document.getElementById("products-section");
      if (productsSec) {
        productsSec.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // البحث الفوري
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim();
      renderProducts();
    });
  }

  // الترتيب والفرز
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      currentSort = e.target.value;
      renderProducts();
    });
  }

  // تفويض الأحداث لكروت المنتجات
  if (productsGrid) {
    productsGrid.addEventListener("click", (e) => {
      const addBtn = e.target.closest('[data-action="add-to-cart"]');
      const viewBtn = e.target.closest('[data-action="quick-view"]');
      if (addBtn) {
        addToCart(addBtn.getAttribute("data-id"));
      } else if (viewBtn) {
        openQuickView(viewBtn.getAttribute("data-id"));
      }
    });
  }

  // فتح وإغلاق السلة
  const openCartBtn = document.getElementById("open-cart-btn");
  const closeCartBtn = document.getElementById("close-cart-btn");
  if (openCartBtn) {
    openCartBtn.addEventListener("click", () => {
      cartDrawer.classList.add("open");
      backdropOverlay.classList.add("open");
    });
  }
  if (closeCartBtn) {
    closeCartBtn.addEventListener("click", closeAllModals);
  }
  if (backdropOverlay) {
    backdropOverlay.addEventListener("click", closeAllModals);
  }

  // أحداث عناصر السلة
  if (cartItemsContainer) {
    cartItemsContainer.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-cart-action]");
      if (!btn) return;
      const action = btn.getAttribute("data-cart-action");
      const id = btn.getAttribute("data-id");
      if (action === "inc") changeQty(id, 1);
      if (action === "dec") changeQty(id, -1);
      if (action === "remove") removeFromCart(id);
    });
  }

  // إفراغ السلة وإتمام الطلب
  const clearCartBtn = document.getElementById("clear-cart-btn");
  const checkoutBtn = document.getElementById("checkout-btn");
  if (clearCartBtn) {
    clearCartBtn.addEventListener("click", clearCart);
  }
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      if (cart.length === 0) {
        showToast("السلة فارغة! أضف قطع غيار أولاً");
        return;
      }
      showToast("✅ تم استلام طلبك بنجاح! سيتواصل معك فريق المبيعات لتأكيد الشحن");
      cart = [];
      saveCart();
      updateCartUI();
      closeAllModals();
    });
  }

  // أزرار القسم الرئيسي
  const exploreBtn = document.getElementById("hero-explore-btn");
  const heroAddFeaturedBtn = document.getElementById("hero-add-featured");
  if (exploreBtn) {
    exploreBtn.addEventListener("click", () => {
      document.getElementById("products-section").scrollIntoView({ behavior: "smooth" });
    });
  }
  if (heroAddFeaturedBtn) {
    heroAddFeaturedBtn.addEventListener("click", () => {
      addToCart(1);
    });
  }
});
