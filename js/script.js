
let addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    let product = button.closest('.product');
    let productName = product.querySelector('h3').textContent;
    let productPrice = product.querySelector('.price').textContent;

    let item = {
      name: productName,
      price: productPrice
    };

    let cartItemsArray = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItemsArray.push(item);
    localStorage.setItem('cartItems', JSON.stringify(cartItemsArray));
  });
});

function addToCart(event) {
  const product = event.target.closest('.product');
  const productName = product.querySelector('h3').textContent;


  let cartItems = localStorage.getItem('cartItems');
  cartItems = cartItems ? JSON.parse(cartItems) : [];


  cartItems.push(productName);


  localStorage.setItem('cartItems', JSON.stringify(cartItems));

  alert(`Added ${productName} to cart!`);
}


let burgerMenu = document.querySelector('.burger-menu');
let menu = document.querySelector('.menu');

burgerMenu.addEventListener('click', function() {
  menu.classList.toggle('active');
});