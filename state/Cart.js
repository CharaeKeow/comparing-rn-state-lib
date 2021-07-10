import { createState, useState } from '@hookstate/core';

const cartState = createState({
  size: 0,
  products: {},
});

export const useGlobalState = () => {
  const cart = useState(cartState);
  return {
    get: () => cart.value,
    addToCart: (product) => {
      // cart.products['item-1'].quantity.value;
      if (cart.products[`item-${product.id}`].value) {
        cart.products[`item-${product.id}`].merge({ quantity: cart.products[`item-${product.id}`].quantity.value + 1 });
        cart.size.set(cart.size.value + 1);
        // console.log(cart.products);
        // cart.products.merge({ [`item-${product.id}`]: { ...product, quantity: cart.products[`item-${product.id}`].quantity + 1 } });
        // cart.merge({ size: cart.size.value + 1 });
      } else {
        cart.products.merge({ [`item-${product.id}`]: { ...product, quantity: 1 } });
        cart.size.set(cart.size.value + 1);
        // cart.merge({ size: cart.size.value + 1 });
      }
    },
  };
};
