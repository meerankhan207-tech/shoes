let cartCount = 0;
const cartCountEl = document.getElementById("cart-count");
const addCartButtons = document.querySelectorAll(".add-cart");

addCartButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    cartCount++;
    cartCountEl.textContent = cartCount;

    button.textContent = "Added!";
    setTimeout(function () {
      button.textContent = "Add to Cart";
    }, 1000);
  });
});