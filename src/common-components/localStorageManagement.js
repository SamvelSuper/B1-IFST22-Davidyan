import iphones from './data.js';

export function addToCart(productId, increment) {
  const key = `product_${productId}`;
  let quantity = localStorage.getItem(key);

  if (quantity === null) localStorage.setItem(key, increment.toString());
  else {
    quantity = parseInt(quantity);
    if (!isNaN(quantity)) {
      quantity += increment;
      localStorage.setItem(key, quantity.toString());
    }
  }

  if (localStorage.getItem(key) <= 0) localStorage.removeItem(key);
}

export function calculateTotalPriceFromLocalStorage() {
  let totalPrice = 0;

  for (let key in localStorage) {
    if (key.startsWith('product_')) {
      const productId = parseInt(key.replace('product_', ''));

      const iphone = iphones.find((item) => item.id === productId);

      if (iphone) {
        const quantity = parseInt(localStorage.getItem(key));
        totalPrice += iphone.price * quantity;
      }
    }
  }

  return totalPrice;
}

export function getAmountByProductId(productId) {
  for (let key in localStorage) {
    if (key.startsWith('product_')) {
      const id = parseInt(key.substring(8));

      if (id === productId) return localStorage.getItem(key);
    }
  }
  return null;
}

export function getAllProductId() {
  let productIdentifiers = [];

  for (let key in localStorage)
    if (key.startsWith('product_'))
      productIdentifiers.push(parseInt(key.substring(8)));

  return productIdentifiers;
}
