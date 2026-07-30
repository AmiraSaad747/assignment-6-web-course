const addToCart = require("./modules/addtocart");
const removeFromCart = require("./modules/removefromcart");
const listCart = require("./modules/listcart");
const calculateTotal = require("./modules/calculateTotal");

console.log("Add Products");

addToCart(1);
addToCart(2);
addToCart(3);

console.log("\n----------------");

listCart();

console.log("\n----------------");

calculateTotal();

console.log("\n----------------");

removeFromCart(2);

console.log("\n----------------");

listCart();

console.log("\n----------------");

calculateTotal();