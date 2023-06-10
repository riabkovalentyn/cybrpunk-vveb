let cartItems = document.querySelector('.cart-items');
let cartItemsArray = JSON.parse(localStorage.getItem('cartItems')) || [];

cartItemsArray.forEach(function(item) {
  let cartItem = document.createElement('li');
  cartItem.textContent = item.name + ' - ' + item.price;
  cartItems.appendChild(cartItem);
});
const buyButton = document.getElementById('buy-btn');
const clearButton = document.getElementById('clear-btn');

buyButton.addEventListener('click', buyItems);
clearButton.addEventListener('click', clearCart);

function buyItems() {
  alert('Thank you for your purchase!')
  clearCart();
}

function clearCart() {
  localStorage.removeItem('cartItems');
  cartItems.innerHTML = '';
}


