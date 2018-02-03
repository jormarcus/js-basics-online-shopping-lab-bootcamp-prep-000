var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * (100) + 1);
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart() {
  var str = 'In your cart, you have ';
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.');
  }
  for (var i = 0; i < cart.length; i++) {
    for (var food in cart[i]) {
      if (i < cart.length - 1) {
        str += `${food} at $${cart[i][food]}, `;
      } else {
        str += `and ${food} at $${cart[i][food]}.`;
      }
    }
  }
  console.log(str);
}

function total() {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    for (var food in cart[i]) {
      total += cart[i][food];
    }
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
