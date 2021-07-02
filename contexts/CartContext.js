import React, { createContext } from 'react';

export const initialState = {
  size: 0,
  products: {},
};
export const CartContext = createContext(initialState);
