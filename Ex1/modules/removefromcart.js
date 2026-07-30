const cart = require("../data/cart");

function removeFromCart(id) {

    const index = cart.findIndex(item => item.id === id);

    if (index === -1) {
        console.log("Product not found in cart");
        return;
    }

    console.log(`${cart[index].name} removed from cart`);

    cart.splice(index, 1);
}

module.exports = removeFromCart;