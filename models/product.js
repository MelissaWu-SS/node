const { rejects } = require('assert');
const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

const getProductsFromFile = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        reject(new Error('Loading file is failed.'));
      } else {
        resolve(JSON.parse(fileContent));
      }
    });
  });
};

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    getProductsFromFile(products => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });
    });
  }

  static fetchAll() {
    return getProductsFromFile().then((products) => {
      return products;
    });
  }

  static fetchProduct(productId) {
    return getProductsFromFile().then((products) => {
        const requestedProduct = products.find((product) => {
          return product.id === productId;
        });

        return requestedProduct;
    });
  }
};
