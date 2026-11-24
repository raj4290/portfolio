// ---------- Product data (static array of objects) ----------
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 2499,
    originalPrice: 3499,
    discount: 29,
    description: "Comfortable wireless headphones with clear sound and deep bass.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    category: "Electronics",
    rating: 4.5,
    inStock: true
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 1999,
    originalPrice: 2999,
    discount: 33,
    description: "A stylish smartwatch for fitness tracking and daily use.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    category: "Accessories",
    rating: 4.2,
    inStock: true
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 1799,
    originalPrice: 2499,
    discount: 28,
    description: "Lightweight running shoes designed for comfort and everyday workouts.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    category: "Footwear",
    rating: 4.4,
    inStock: true
  },
  {
    id: 4,
    name: "Travel Backpack",
    price: 1299,
    originalPrice: 1999,
    discount: 35,
    description: "A spacious backpack suitable for college, office, and travel.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
    category: "Bags",
    rating: 4.3,
    inStock: true
  },
  {
    id: 5,
    name: "Digital Camera",
    price: 15999,
    originalPrice: 18999,
    discount: 16,
    description: "Capture memorable moments with a compact digital camera.",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
    category: "Electronics",
    rating: 4.6,
    inStock: true
  },
  {
    id: 6,
    name: "Sunglasses",
    price: 899,
    originalPrice: 1499,
    discount: 40,
    description: "Modern sunglasses with a stylish frame for everyday wear.",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500",
    category: "Fashion",
    rating: 4.1,
    inStock: true
  },
  {
    id: 7,
    name: "Coffee Maker",
    price: 3499,
    originalPrice: 4499,
    discount: 22,
    description: "Prepare fresh coffee at home with this easy-to-use coffee maker.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500",
    category: "Home Appliances",
    rating: 4.4,
    inStock: false
  }
];

// ---------- State ----------
// Each cart entry: { product, quantity }
let cart = [];

// ---------- DOM references ----------
const productList = document.getElementById("productList");
const productsCol = document.getElementById("productsCol");
const cartCol = document.getElementById("cartCol");
const cartItems = document.getElementById("cartItems");
const grandTotalEl = document.getElementById("grandTotal");
const cartCountEl = document.getElementById("cartCount");

// ---------- Helpers ----------
const formatPrice = (n) => "₹" + n.toLocaleString("en-IN");

// ---------- Render product cards ----------
function renderProducts() {
  productList.innerHTML = "";

  products.forEach((p) => {
    const col = document.createElement("div");
    col.className = "col-sm-6 col-md-4 product-col";

    col.innerHTML = `
      <div class="card h-100 shadow-sm product-card ${p.inStock ? "" : "out-of-stock"}">
        <div class="position-relative">
          <img src="${p.image}" class="card-img-top" alt="${p.name}">
          <span class="badge bg-danger discount-badge">${p.discount}% OFF</span>
          <span class="badge ${p.inStock ? "bg-success" : "bg-secondary"} stock-badge">
            ${p.inStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>
        <div class="card-body d-flex flex-column">
          <small class="text-muted">${p.category}</small>
          <h5 class="card-title">${p.name}</h5>
          <p class="card-text text-muted small">${p.description}</p>
          <p class="mb-2 small">⭐ ${p.rating}</p>
          <div class="mb-3">
            <span class="fs-5 fw-bold text-success">${formatPrice(p.price)}</span>
            <span class="original-price ms-2">${formatPrice(p.originalPrice)}</span>
          </div>
          <button class="btn btn-primary mt-auto add-btn" data-id="${p.id}" ${p.inStock ? "" : "disabled"}>
            ${p.inStock ? "Add to Cart" : "Out of Stock"}
          </button>
        </div>
      </div>
    `;
    productList.appendChild(col);
  });
}

// ---------- Cart logic ----------
function addToCart(id) {
  const product = products.find((p) => p.id === id);
  if (!product || !product.inStock) return; // out-of-stock products are not added

  const existing = cart.find((item) => item.product.id === id);
  if (existing) {
    existing.quantity++; // same product -> increase quantity, no duplicate row
  } else {
    cart.push({ product, quantity: 1 });
  }
  renderCart();
}

function changeQuantity(id, delta) {
  const item = cart.find((i) => i.product.id === id);
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter((i) => i.product.id !== id);
  }
  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter((i) => i.product.id !== id);
  renderCart();
}

// ---------- Render cart ----------
function renderCart() {
  cartItems.innerHTML = "";

  // Show cart on the right only when it has items
  if (cart.length === 0) {
    cartCol.classList.add("d-none");
    productsCol.className = "col-12";
    document.querySelectorAll(".product-col").forEach((c) => (c.className = "col-sm-6 col-md-4 product-col"));
  } else {
    cartCol.classList.remove("d-none");
    productsCol.className = "col-lg-8";
    document.querySelectorAll(".product-col").forEach((c) => (c.className = "col-sm-6 product-col"));
  }

  let grandTotal = 0;
  let totalQty = 0;

  cart.forEach(({ product, quantity }) => {
    const subtotal = product.price * quantity;
    grandTotal += subtotal;
    totalQty += quantity;

    const li = document.createElement("li");
    li.className = "list-group-item cart-item";
    li.innerHTML = `
      <div class="d-flex gap-3">
        <img src="${product.image}" alt="${product.name}">
        <div class="flex-grow-1">
          <div class="d-flex justify-content-between">
            <strong>${product.name}</strong>
            <button class="btn-close btn-sm remove-btn" data-id="${product.id}" aria-label="Remove"></button>
          </div>
          <div class="small text-muted">${formatPrice(product.price)} each</div>
          <div class="d-flex justify-content-between align-items-center mt-2">
            <div class="btn-group btn-group-sm">
              <button class="btn btn-outline-secondary dec-btn" data-id="${product.id}">−</button>
              <span class="btn btn-light disabled">${quantity}</span>
              <button class="btn btn-outline-secondary inc-btn" data-id="${product.id}">+</button>
            </div>
            <span class="fw-semibold">${formatPrice(subtotal)}</span>
          </div>
        </div>
      </div>
    `;
    cartItems.appendChild(li);
  });

  grandTotalEl.textContent = formatPrice(grandTotal);
  cartCountEl.textContent = totalQty;
}

// ---------- Event delegation ----------
productList.addEventListener("click", (e) => {
  const btn = e.target.closest(".add-btn");
  if (btn) addToCart(Number(btn.dataset.id));
});

cartItems.addEventListener("click", (e) => {
  const inc = e.target.closest(".inc-btn");
  const dec = e.target.closest(".dec-btn");
  const rem = e.target.closest(".remove-btn");
  if (inc) changeQuantity(Number(inc.dataset.id), 1);
  if (dec) changeQuantity(Number(dec.dataset.id), -1);
  if (rem) removeFromCart(Number(rem.dataset.id));
});

// ---------- Init ----------
renderProducts();
