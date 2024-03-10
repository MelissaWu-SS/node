const { v4: uuidv4 } = require("uuid")
const fs = require('fs');
const path = require('path');
const rootDir = require('../util/path');

const p = path.join(
  rootDir,
  'data',
  'carts.json'
);

module.exports = class Cart {
  constructor() {
    this.id = uuidv4();
    this.products = [];
    this.totalPrice = 0;
  }

  static addProduct(productId = null, cartId = null) {
    fs.readFile(p, (err, fileContent) => {
      const carts = JSON.parse(fileContent);
      let cart;
      let updatedProduct;

      // Find existing cart
      if (cartId) {
        cartIndex = carts.findIndex((cart) => { return cart.id === cartId});

        // Add product to the existing cart
        if (productId) {
          const existingProductIndex = carts[cartIndex].products.findIndex((product) => {
            return product.id = productId;
          });

          if (existingProductIndex) {
            carts[cartIndex].products[existingProductIndex].qty++;
          } else {
            updatedProduct = {id: productId, qty: 1};
            carts[cartIndex].products.push(updatedProduct);
          }
        }
      } else { // Create a new cart
        cart = new Cart();
        updatedProduct = {id: productId, qty: 1};

        cart.products.push(updatedProduct);
        carts.push(cart);
      }

      fs.writeFile(p, JSON.stringify(carts), (err)=> {
        console.log(err);
      });
    })
  }
}