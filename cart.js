let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price, image) {
  cart.push({ name, price, image });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
  toggleCart();
}

function updateCart() {
  let cartItems = document.getElementById("cart-items");
  let total = 0;

  cartItems.innerHTML = "";

  cart.forEach((item, index) => {
    total += item.price;

    cartItems.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}">
        <div>
          <p>${item.name}</p>
          <p>P${item.price}</p>
          <button onclick="removeItem(${index})">Remove</button>
        </div>
      </div>
    `;
  });

  document.getElementById("total").innerText = "Total: P" + total;
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
}

function toggleCart() {
  document.getElementById("cartDrawer").classList.toggle("open");
  document.getElementById("overlay").classList.toggle("show");
}

window.onload = updateCart;