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
    return 'Your shopping cart is empty.';
  }
  for (var i = 0; i < cart.length; i++) {
    for (var value in cart[i])
     if (i < cart.length - 1) {
       str += `${value} at $${cart[i][value]},`
     } else {
       str += `${value} at $${cart[i][value]}.`
     }
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
