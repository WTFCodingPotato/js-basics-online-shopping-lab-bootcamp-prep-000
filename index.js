var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100) + 1
  var itemObj = {itemName: item, itemPrice: price}
  cart.push(itemObj)
  return `${item} has been added to your cart.`
}

function viewCart() {
  var mainString = "In your cart, you have"
  var subString = ""
  if(cart.length===0){
    return "Your shopping cart is empty."
  }else{
    if (cart.length ===1){
      mainString += ` ${cart[0].itemName} at $${cart[0].itemPrice}.`
    }
    //
    /*for (var i = 0; i < cart.length; i++) {
      if(i < cart.length){
      mainString += ` ${cart[i].key} at ${cart[i].value},`}
      else {mainString += ` and ${cart[i].key} at ${cart[i].value}.`
        
      }
    }*/
    
  }
  return mainString
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
