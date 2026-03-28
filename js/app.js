/* global PRODUCTS */

const state = {
  category: "Todas",
  subCategory: "Todas", // ✅ NUEVO
  search: "",
  cart: [],
  finalPrice: 0,
  cartSeq: 0
};
state.gifts = new Set(); // guarda cartId de productos regalados 

// ✅ SOLO estos 3 tendrán opción de regalo
const GIFT_ELIGIBLE_IDS = new Set([
  "formador-pezon-pigeon",
  "bolsitas-leche-250ml-30unid",
  "dispensador-formula-3-capas",
  "camara-baby-monitor-proteccion",
  "formador-pezon-babypal",
  "mordedor-oruga-baby-toys",
  "set-plato-vaso-bebe-azul"

  
]);
const GIFT_IMAGE_BY_PRODUCT_ID = {
   "almohada-lactancia-3en1": "extras/lactancia.jpg",
  "coche-moises-multifuncional": "extras/coche moises.jpg",
  "banera-plegable-termometro": "extras/regadera_cojin_bebe.jpg"
};

function getGiftImage(product) {
  return GIFT_IMAGE_BY_PRODUCT_ID[product.id] || null;
}

function isGiftEligible(product) {
  return GIFT_ELIGIBLE_IDS.has(product.id);
}
function isGift(item) {
  return state.gifts.has(item.cartId);
}

function toggleGift(item) {
  if (isGift(item)) {
    state.gifts.delete(item.cartId);
  } else {
    state.gifts.add(item.cartId);
  }
  renderSummary(); // recalcula precios y vuelve a pintar
}




const el = (id) => document.getElementById(id);

function formatPEN(n) {
  const val = Math.max(0, Math.round(Number(n) || 0));
  return `S/ ${val}`;
}

function safeImg(src) {
  return src && src.trim().length ? src : "assets/images/placeholder.jpg";
}
const CATEGORY_ORDER = [
  "Todas",
  "Lactancia",
  "Alimentación del Bebé",
  "Higiene y Limpieza",
  "Baño del Bebé",
  "Sueño y Descanso",
  "Paseo y Transporte",
  "Estimulación y Juegos",
  "Protección",
  "Accesorios",
  "Organización",
  "Combos"
];



function categoriesFromProducts() {
  const set = new Set(PRODUCTS.map(p => p.category));
  const existing = Array.from(set);

  const ordered = CATEGORY_ORDER.filter(cat =>
    existing.includes(cat)
  );

  return ["Todas", ...ordered];
}

function subCategoriesFromProducts(category) {
  if (category === "Todas") return ["Todas"];

  const set = new Set(
    PRODUCTS
      .filter(p => p.category === category)
      .map(p => String(p.subCategory || "").trim())
      .filter(Boolean)
  );

  const subs = Array.from(set);

  // Si no hay subcategorías, solo "Todas"
  if (subs.length === 0) return ["Todas"];

  return ["Todas", ...subs];
}



function filteredProducts() {
  const q = state.search.trim().toLowerCase();

  return PRODUCTS.filter(p => {
    const byCat = state.category === "Todas" || p.category === state.category;

    const bySub =
      state.category === "Todas" ||
      state.subCategory === "Todas" ||
      String(p.subCategory || "").trim() === state.subCategory;

    const bySearch =
      !q ||
      p.name.toLowerCase().includes(q) ||
      p.id.toLowerCase().includes(q);

    return byCat && bySub && bySearch;
  });
}


function cartTotal() {
  return state.cart.reduce((acc, p) => acc + (Number(p.price) || 0), 0);
}

function cartTotal() {
  return state.cart.reduce((acc, p) => acc + (Number(p.price) || 0), 0);
}

// ✅ Descuento se calcula, NO se escribe
function computedDiscount(subtotal) {
  const fp = Number(state.finalPrice) || 0;
  // si no escribiste final o escribiste algo >= subtotal, descuento 0
  if (fp <= 0 || fp >= subtotal) return 0;
  return Math.max(0, subtotal - fp);
}

// ✅ Final: si hay finalPrice válido (< subtotal) úsalo, si no, subtotal
function finalTotalFrom(subtotal) {
  const fp = Number(state.finalPrice) || 0;
  if (fp > 0 && fp < subtotal) return fp;
  return subtotal;
}


function renderTabs() {
  const tabs = el("categoryTabs");
  tabs.innerHTML = "";
  const cats = categoriesFromProducts();

  cats.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "tab" + (state.category === cat ? " active" : "");
    btn.textContent = cat;
    btn.onclick = () => {
      state.category = cat;
      state.subCategory = "Todas";
      renderAll();
    };
    tabs.appendChild(btn);
  });
}
function renderSubTabs() {
  const box = el("subCategoryTabs");
  if (!box) return; // ✅ si no existe en HTML, no revienta

  box.innerHTML = "";

  // solo mostrar subtabs cuando NO sea "Todas"
  if (state.category === "Todas") return;

  const subs = subCategoriesFromProducts(state.category);

  subs.forEach(sc => {
    const btn = document.createElement("button");
    btn.className = "tab small" + (state.subCategory === sc ? " active" : "");
    btn.textContent = sc;

    btn.onclick = () => {
      state.subCategory = sc;
      renderGrid();
    };

    box.appendChild(btn);
  });
}



function renderGrid() {
  const grid = el("productGrid");
  grid.innerHTML = "";

  const items = filteredProducts();

  // ✅ Agrupar por subCategory REAL cuando estés en una categoría específica
  // (ej: Lactancia) y existan subcategorías.
  const shouldGroup =
    state.category !== "Todas" &&
    items.some(p => String(p.subCategory || "").trim() !== "");

  if (shouldGroup) {
    // Crear grupos dinámicos por subCategory
    const groups = {};
    items.forEach(p => {
      const key = String(p.subCategory || "Otros").trim() || "Otros";
      if (!groups[key]) groups[key] = [];
      groups[key].push(p);
    });

    // Orden sugerido (si existe en esa categoría)
    const preferredOrder = [
      
      "Extractores y Recolector de leche",
      "Biberones y Tetinas",
      "Sillas de Comer",
      "Calentadores de Leche",
      "Almacenamiento",
      "Higiene",
      "Limpiadores",
      "Bañeras",
      "Accesorios",
      "Mecedoras",
      "Coches",
      "Mochilas infantiles",
      "Complementos"
    ];

    // Orden final: primero los del preferredOrder que existan, luego el resto alfabético
    const keys = Object.keys(groups);
    const ordered = [
      ...preferredOrder.filter(k => keys.includes(k)),
      ...keys.filter(k => !preferredOrder.includes(k)).sort((a, b) => a.localeCompare(b, "es"))
    ];

    let anyRendered = false;

    ordered.forEach(title => {
      const arr = groups[title];
      if (!arr || arr.length === 0) return;

      anyRendered = true;

      // Subtítulo
      const h = document.createElement("div");
      h.className = "grid-subtitle";
      h.textContent = title;
      grid.appendChild(h);

      // Cards
      arr.forEach(p => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
          <div class="card-img">
            <img src="${safeImg(p.image)}" alt="${p.name}">
          </div>
          <div class="card-body">
            <div class="card-name">${p.name}</div>
            <div class="card-meta">
              <span class="badge">${p.category}</span>
              <span class="price">${formatPEN(p.price)}</span>
            </div>
          </div>
          <div class="card-actions">
            <button class="btn small ghost" data-action="zoom">Ver</button>
            <button class="btn small" data-action="add">Agregar</button>
          </div>
        `;

        card.querySelector('[data-action="add"]').onclick = () => addToCart(p);
        card.querySelector('[data-action="zoom"]').onclick = () => openModal(p);

        card.onclick = (e) => {
          if (e.target.closest("button")) return;
          openModal(p);
        };

        grid.appendChild(card);
      });
    });

    if (!anyRendered) {
      const empty = document.createElement("div");
      empty.className = "empty";
      empty.textContent = "No hay productos con ese filtro.";
      grid.appendChild(empty);
    }

    return;
  }

  // ✅ Render normal si NO se agrupa
  items.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <div class="card-img">
        <img src="${safeImg(p.image)}" alt="${p.name}">
      </div>
      <div class="card-body">
        <div class="card-name">${p.name}</div>
        <div class="card-meta">
          <span class="badge">${p.category}</span>
          <span class="price">${formatPEN(p.price)}</span>
        </div>
      </div>
      <div class="card-actions">
        <button class="btn small ghost" data-action="zoom">Ver</button>
        <button class="btn small" data-action="add">Agregar</button>
      </div>
    `;

    card.querySelector('[data-action="add"]').onclick = () => addToCart(p);
    card.querySelector('[data-action="zoom"]').onclick = () => openModal(p);

    card.onclick = (e) => {
      if (e.target.closest("button")) return;
      openModal(p);
    };

    grid.appendChild(card);
  });

  if (items.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty";
    empty.textContent = "No hay productos con ese filtro.";
    grid.appendChild(empty);
  }
}


function renderCart() {
  const list = el("cartItems");
  if (list) list.innerHTML = "";

  state.cart.forEach((p, idx) => {
    const li = document.createElement("li");
    li.className = "cart-item";
    li.innerHTML = `
      <div class="ci-left">
        <div class="ci-name">${p.name}</div>
        <div class="ci-sub">${p.category}</div>
      </div>
      <div class="ci-right">
        <div class="ci-price">${formatPEN(p.price)}</div>
        <button class="ci-remove" title="Quitar">✕</button>
      </div>
    `;

    li.querySelector(".ci-remove").onclick = (e) => {
      e.stopPropagation();
      removeAt(idx);
    };

    li.onclick = () => openModal(p);
    list.appendChild(li);
  });

  // ✅ solo total del combo
  const ct = el("cartTotal");
  if (ct) ct.textContent = formatPEN(cartTotal());
}


function renderAll() {
  renderTabs();
  renderSubTabs(); 
  renderGrid();
  renderCart();
}

function addToCart(product) {
  resetFinalPrice();

  const item = {
    ...product,
    cartId: ++state.cartSeq,
    livePrice: null   // ✅ NUEVO
  };

  // ✅ cada cámara tiene su propia memoria (64 por defecto)
  if (item.type === "camera") item.memory = "64";

  state.cart.push(item);
  renderCart();
}

function removeAt(index) {
  resetFinalPrice();
  state.cart.splice(index, 1);
  renderCart();
}

function undoLast() {
  resetFinalPrice();
  state.cart.pop();
  renderCart();
}

function clearCart() {
  state.cart = [];
  resetFinalPrice();
  renderCart();
  showCopyNote("");
}



/* ✅ MODAL */
let modalProduct = null;

function openModal(product) {
  modalProduct = product;

  el("modalImg").src = safeImg(product.image);
  el("modalName").textContent = product.name;
  el("modalPrice").textContent = formatPEN(product.price);

  // ✅ render 5 puntos
  const ul = el("modalHighlights");
  ul.innerHTML = "";

  const highlights = Array.isArray(product.highlights) ? product.highlights : [];
  highlights.slice(0, 8).forEach(text => {
    const li = document.createElement("li");
    li.textContent = text;
    ul.appendChild(li);
  });

  // si faltan puntos, rellena para que siempre se vean 5 (opcional)
  const missing = 5 - ul.children.length;
  for (let i = 0; i < missing; i++) {
    const li = document.createElement("li");
    li.textContent = "—";
    li.style.opacity = "0.35";
    ul.appendChild(li);
  }

  const addBtn = el("modalAdd");
  const addedNote = el("modalAddedNote");

  if (isInCart(product)) {
    addBtn.classList.add("hidden");
    addedNote.classList.remove("hidden");
  } else {
    addBtn.classList.remove("hidden");
    addedNote.classList.add("hidden");
  }


  el("modal").classList.remove("hidden");
}

function closeModal() {
  el("modal").classList.add("hidden");
  modalProduct = null;
}







function openSummary() {
  renderSummary();

  // sincroniza input descuento con el actual
  const sumInput = el("sumDiscountInput");
  if (sumInput) sumInput.value = Number(state.discount) || 0;

  el("summaryModal").classList.remove("hidden");
}

function closeSummary() {
  el("summaryModal").classList.add("hidden");
}
function getEffectivePrice(p) {
  if (isGiftEligible(p) && isGift(p)) return 0;

  if (p.livePrice && p.livePrice > 0) {
    return p.livePrice;
  }

  return Number(p.price) || 0;
}
function renderSummary() {
  // ---- Helpers memoria (solo se usa si hay cámaras) ----
  function memoryExtra(mem) {
    if (mem === "128") return 20;
    if (mem === "256") return 69;
    if (mem === "512") return 149;
    return 0; // 64 incluida
  }
  function memoryImg(mem) {
    if (mem === "128") return "memorias/MEMORIA 128 GB.jpg";
    if (mem === "256") return "memorias/MEMORIA 256 GB.jpg";
    if (mem === "512") return "memorias/MEMORIA 512 GB.jpg";
    return "memorias/MEMORIA 64 GB.jpg";
  }
  function memoryText(mem) {
    if (mem === "128") return "128GB (+ S/20)";
    if (mem === "256") return "256GB (+ S/69)";
    if (mem === "512") return "512GB (+ S/149)";
    return "64GB (incluida)";
  }

  const COURSE_TEXT = 'Curso virtual incluido: "Como Incrementar tu Banco de Leche"';

  // ✅ items / cams / extras
  const items = state.cart || [];
  const cams = items.filter(p => p.type === "camera");
  const extras = items.filter(p => p.type !== "camera");

  // 🎁 Helpers REGALO (clic para regalar → precio base 0; memoria NO se regala)
  const isGifted = (p) => isGiftEligible(p) && isGift(p);
  const basePriceOrZero = (p) => (isGifted(p) ? 0 : (Number(p.price) || 0));

  const giftTagHTML = (p) => {
    if (!isGiftEligible(p)) return "";
    const gifted = isGifted(p);
    return `
      <span class="gift-click ${gifted ? "active" : ""}" data-cartid="${p.cartId}">
        🎁
      </span>
    `;
  };

  const bindGiftClick = (container, p) => {
    if (!isGiftEligible(p)) return;
    const btn = container.querySelector(".gift-click");
    if (btn) btn.onclick = () => toggleGift(p);
  };

  // === 1) Render líneas ===
  const linesBox = el("summaryLines");
  if (linesBox) {
    linesBox.innerHTML = "";

    if (cams.length > 0) {
      // Cámaras con memoria (precio base puede ser 0 si es regalo, memoria SIEMPRE se cobra)
      cams.forEach(p => {
        const row = document.createElement("div");
        row.className = "sum-line";
        row.innerHTML = `
          <div class="name">
            ${giftTagHTML(p)}
            ${p.name}
            <div style="margin-top:8px; opacity:.9; font-weight:800; font-size:12px;">
              Memoria:
              <select class="mem-select" data-cartid="${p.cartId}">
                <option value="64"  ${p.memory === "64" ? "selected" : ""}>64GB (incluida)</option>
                <option value="128" ${p.memory === "128" ? "selected" : ""}>128GB (+ S/20)</option>
                <option value="256" ${p.memory === "256" ? "selected" : ""}>256GB (+ S/69)</option>
                <option value="512" ${p.memory === "512" ? "selected" : ""}>512GB (+ S/149)</option>
              </select>
            </div>
          </div>
          <div class="price">${formatPEN(basePriceOrZero(p))}</div>
        `;
        linesBox.appendChild(row);
        bindGiftClick(row, p);
      });

      // Extras debajo
      extras.forEach(p => {
        const row = document.createElement("div");
        row.className = "sum-line";
        row.innerHTML = `
          <div class="name">
            ${giftTagHTML(p)}
            ${p.name}
            ${
              p.type === "extractor"
                ? `<div style="margin-top:8px; opacity:.9; font-weight:800; font-size:12px;">
                     ✅ ${COURSE_TEXT}
                   </div>`
                : ``
            }
          </div>
          <div class="price">${formatPEN(basePriceOrZero(p))}</div>
        `;
        linesBox.appendChild(row);
        bindGiftClick(row, p);
      });

    } else {
      // Caso normal (sin cámaras)
      items.forEach(p => {
        const row = document.createElement("div");
        row.className = "sum-line";
        row.innerHTML = `
          <div class="name">
            ${giftTagHTML(p)}
            ${p.name}
            ${
              p.type === "extractor"
                ? `<div style="margin-top:8px; opacity:.9; font-weight:800; font-size:12px;">
                     ✅ ${COURSE_TEXT}
                   </div>`
                : ``
            }
          </div>
          <div class="price">${formatPEN(basePriceOrZero(p))}</div>
        `;
        linesBox.appendChild(row);
        bindGiftClick(row, p);
      });
    }
  }

  // === 2) SUBTOTAL (regalo solo base; memoria NO se regala) ===
  let subtotal = 0;

  if (cams.length > 0) {
    const camBase = cams.reduce((a, p) => {
  const price = getEffectivePrice(p);
  return a + price;
}, 0);
    const memTotal = cams.reduce((a, p) => a + memoryExtra(p.memory), 0);
    const extrasBase = extras.reduce((a, p) => {
  const price = getEffectivePrice(p);
  return a + price;
}, 0);
    subtotal = camBase + memTotal + extrasBase;
  } else {
    subtotal = items.reduce((a, p) => {
  const price = getEffectivePrice(p);
  return a + price;
}, 0);
  }

  // === 3) Precio final negociado ===
  const fp = Number(state.finalPrice) || 0;
  const final = (fp > 0 && fp < subtotal) ? fp : subtotal;
  const discount = Math.max(0, subtotal - final);

  if (el("sumSubtotal")) el("sumSubtotal").textContent = formatPEN(subtotal);
  if (el("sumFinal")) el("sumFinal").textContent = formatPEN(final);
  if (el("sumDiscountValue")) el("sumDiscountValue").textContent = formatPEN(discount);

  // === 4) Render resumen visual (comboBox) ===
  const comboBox = el("comboBox");
  if (comboBox) {
    comboBox.innerHTML = "";

    if (cams.length > 0) {
      // Cámaras con memoria (regalo clic solo a base; memoria se cobra)
      cams.forEach(p => {
        const item = document.createElement("div");
        item.className = "combo-item";

        const priceShown = basePriceOrZero(p) + memoryExtra(p.memory);
        const giftImg = getGiftImage(p);
        if (giftImg) {
          item.classList.add("has-gift");
        }


        item.innerHTML = `
          <div class="combo-img-wrap">
            <img class="combo-img" src="${safeImg(p.image)}" alt="${p.name}">
            ${giftImg ? `<img class="gift-side-img" src="${safeImg(giftImg)}" alt="Regalo">` : ""}
          </div>

          <div class="combo-meta">
            ${giftTagHTML(p)}
            <div class="combo-name">${p.name}</div>
            <div class="combo-mem">
              <img class="mem-img" src="${memoryImg(p.memory)}" alt="Memoria ${p.memory}GB">
              <span>${memoryText(p.memory)}</span>
            </div>
          </div>

          <div class="combo-price">
  <div class="normal-price">${formatPEN(priceShown)}</div>
  <div class="live-price-box">
    S/
    <input 
      type="text"
      class="live-price-input"
      data-cartid="${p.cartId}"
      value="${p.livePrice ? p.livePrice : ""}"
      placeholder="0"
      inputmode="numeric"
    >
  </div>
</div>
        `;
        comboBox.appendChild(item);
        bindGiftClick(item, p);
      });

      // Extras
      extras.forEach(p => {
        const item = document.createElement("div");
        item.className = "combo-item";

        const giftImg = getGiftImage(p);

        item.innerHTML = `
          <div class="combo-img-wrap">
            <img class="combo-img" src="${safeImg(p.image)}" alt="${p.name}">
            ${giftImg ? `<img class="gift-side-img" src="${safeImg(giftImg)}" alt="Regalo">` : ""}
          </div>

          <div class="combo-meta">
            ${giftTagHTML(p)}
            <div class="combo-name">${p.name}</div>
            <div class="combo-mem" style="opacity:.7;">
              ${p.type === "extractor" ? "✅ Curso incluido" : p.category}
            </div>
          </div>

          <div class="combo-price">
  <div class="normal-price">
    ${formatPEN(basePriceOrZero(p))}
  </div>

  <div class="live-price-box">
    S/
    <input 
      type="text"
      class="live-price-input"
      data-cartid="${p.cartId}"
      value="${p.livePrice ? p.livePrice : ""}"
      placeholder="0"
      inputmode="numeric"
    >
  </div>
</div>
        `;
        comboBox.appendChild(item);
        bindGiftClick(item, p);
      });

    } else {
      // Caso normal
      items.forEach(p => {
        const item = document.createElement("div");
        item.className = "combo-item";

        const giftImg = getGiftImage(p);
        if (giftImg) item.classList.add("has-gift");


        item.innerHTML = `
          <div class="combo-img-wrap">
            <img class="combo-img" src="${safeImg(p.image)}" alt="${p.name}">
            ${giftImg ? `<img class="gift-side-img" src="${safeImg(giftImg)}" alt="Regalo">` : ""}
          </div>

          <div class="combo-meta">
            ${giftTagHTML(p)}
            <div class="combo-name">${p.name}</div>
            <div class="combo-mem" style="opacity:.7;">
              ${p.type === "extractor" ? "✅ Curso incluido" : p.category}
            </div>
          </div>

          <div class="combo-price">
  <div class="normal-price">
    ${formatPEN(basePriceOrZero(p))}
  </div>

  <div class="live-price-box">
    S/
    <input 
      type="text"
      class="live-price-input"
      data-cartid="${p.cartId}"
      value="${p.livePrice ? p.livePrice : ""}"
      placeholder="0"
      inputmode="numeric"
    >
  </div>
</div>
        `;
        comboBox.appendChild(item);
        bindGiftClick(item, p);
      });
    }
  }

  // ✅ no pisar mientras escribes el precio final
  const fi = el("finalInput");
  if (fi && document.activeElement !== fi) {
    fi.value = state.finalPrice ? String(state.finalPrice) : "";
  }



}

// Estado regalos
state.gifts = new Set();

function isGift(item) {
  return state.gifts.has(item.cartId);
}

function toggleGift(item) {
  if (isGift(item)) state.gifts.delete(item.cartId);
  else state.gifts.add(item.cartId);
  renderSummary();
}








/* Copiar texto */
function cartText() {
  const names = state.cart.map(p => p.name);
  const total = cartTotal();
  const disc = Number(state.discount) || 0;
  const final = finalTotal();

  return [
    `COMBO BuyPal (Live)`,
    `Productos: ${names.length ? names.join(" + ") : "(vacío)"}`,
    `Total: ${formatPEN(total)}`,
    `Descuento: ${formatPEN(disc)}`,
    `Final: ${formatPEN(final)}`
  ].join("\n");
}

function showCopyNote(msg) {
  el("copyNote").textContent = msg || "";
}

async function copyToClipboard() {
  try {
    await navigator.clipboard.writeText(cartText());
    showCopyNote("✅ Copiado. Pégalo en WhatsApp si lo necesitas.");
    setTimeout(() => showCopyNote(""), 2500);
  } catch {
    showCopyNote("No se pudo copiar (permiso bloqueado).");
  }
}

/* Fullscreen */
async function goFullscreen() {
  try { await document.documentElement.requestFullscreen(); } catch { }
}
  function updateSummaryTotalsOnly() {
  const items = state.cart || [];

  // subtotal ORIGINAL (sin regalos)
  let subtotalOriginal = items.reduce((acc, p) => {
    return acc + (Number(p.price) || 0);
  }, 0);

  // subtotal ACTUAL (considerando regalos y live price)
  let subtotalLive = items.reduce((acc, p) => {

    // 🎁 si es regalo vale 0
    if (isGiftEligible(p) && isGift(p)) {
      return acc;
    }

    const price =
      p.livePrice !== null
        ? p.livePrice
        : (Number(p.price) || 0);

    return acc + price;

  }, 0);

  const subtotal = subtotalOriginal;
  const final = subtotalLive;
  const discount = Math.max(0, subtotalOriginal - subtotalLive);

  if (el("sumSubtotal")) el("sumSubtotal").textContent = formatPEN(subtotal);
  if (el("sumFinal")) el("sumFinal").textContent = formatPEN(final);
  if (el("sumDiscountValue")) el("sumDiscountValue").textContent = formatPEN(discount);

  const fi = el("finalInput");
  if (fi && document.activeElement !== fi) {
    fi.value = final;
  }
}
/* Eventos */
function bindEvents() {
  const searchInput = el("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.search = e.target.value;
      renderGrid();
    });
  }

  const btnUndo = el("btnUndo");
  if (btnUndo) btnUndo.onclick = undoLast;

  const btnClear = el("btnClear");
  if (btnClear) btnClear.onclick = clearCart;

  const btnSummary = el("btnSummary");
  if (btnSummary) btnSummary.onclick = openSummary;

  const btnFull = el("btnFull");
  if (btnFull) btnFull.onclick = goFullscreen;

  // modal producto
  const modalClose = el("modalClose");
  if (modalClose) modalClose.onclick = closeModal;

  const modal = el("modal");
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target.id === "modal") closeModal();
    });
  }

  const modalAdd = el("modalAdd");
  if (modalAdd) {
    modalAdd.onclick = () => {
      if (modalProduct) addToCart(modalProduct);
      closeModal();
    };
  }

  // modal resumen (cerrar)
  const summaryClose = el("summaryClose");
  if (summaryClose) summaryClose.onclick = closeSummary;

  const summaryModal = el("summaryModal");
  if (summaryModal) {
    summaryModal.addEventListener("click", (e) => {
      if (e.target.id === "summaryModal") closeSummary();
    });
  }

  // ✅ INPUT PRECIO FINAL EN TIEMPO REAL (delegación)
  document.addEventListener("input", (e) => {
    if (e.target && e.target.id === "finalInput") {
      const clean = String(e.target.value || "").replace(/\D/g, "");
      if (e.target.value !== clean) e.target.value = clean;

      state.finalPrice = Number(clean) || 0;

      renderCart();
      renderSummary();
    }
  }, true);

  // upgrade memoria
  const btnUpgradeMemory = el("btnUpgradeMemory");
  if (btnUpgradeMemory) btnUpgradeMemory.onclick = cycleMemoryUpgrade;

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { closeModal(); closeSummary(); }
    if (e.key.toLowerCase() === "z") undoLast();
    if (e.key.toLowerCase() === "c") clearCart();
  });


  // ✅ Cambiar memoria por cámara (en resumen)
  document.addEventListener("change", (e) => {
    const sel = e.target;
    if (sel && sel.classList && sel.classList.contains("mem-select")) {
      const cartId = Number(sel.dataset.cartid);
      const item = state.cart.find(x => x.cartId === cartId);
      if (item) {
        resetFinalPrice();
        item.memory = sel.value; // "64" | "128" | "256"
        renderSummary();
        renderCart();
      }
    }
  }, true);

  document.addEventListener("focus", (e) => {
  if (e.target && e.target.classList.contains("live-price-input")) {

    const input = e.target;

    // si tiene un valor, se selecciona todo para escribir encima
    if (input.value) {
      input.select();
    }

  }
}, true);

document.addEventListener("input", (e) => {
  if (e.target && e.target.classList.contains("live-price-input")) {

    const input = e.target;

    const clean = String(input.value || "").replace(/\D/g, "");
    if (input.value !== clean) input.value = clean;

    const cartId = Number(input.dataset.cartid);
    const item = state.cart.find(x => x.cartId === cartId);

    if (item) {
      item.livePrice = clean === "" ? null : Number(clean);

      // 🔥 SOLO recalcular totales sin reconstruir todo
      updateSummaryTotalsOnly();
    }
  }
}, true);

}





function init() {
  bindEvents();
  renderAll();
}

function isInCart(product) {
  return state.cart.some(p => p.id === product.id);
}
function resetFinalPrice() {
  state.finalPrice = 0;
}


init();
