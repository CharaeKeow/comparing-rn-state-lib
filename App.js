import { StatusBar } from 'expo-status-bar';
import React, { useReducer } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { CartContext, initialState } from './contexts/CartContext.js';

import Products from './screens/Products.jsx';
import Cart from './screens/Cart.jsx';

import CartButton from './components/CartButton.jsx';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      if (!state.products[`item-${action.payload.id}`]) {
        return { size: (state.size += 1), products: { ...state.products, [`item-${action.payload.id}`]: { ...action.payload, quantity: 1 } } };
      } else {
        let productsCopy = { ...state.products };
        productsCopy[`item-${action.payload.id}`].quantity += 1;
        return { size: (state.size += 1), products: productsCopy };
      }
  }
};

const Stack = createStackNavigator();

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  function cartButtonHandler(navigation) {
    return () => navigation.navigate('Cart');
  }
  return (
    <>
      <CartContext.Provider value={[state, dispatch]}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Products">
            <Stack.Screen
              name="Products"
              component={Products}
              options={{
                headerRight: (props) => {
                  return <CartButton cartCount={state.size} {...props} onPressHandler={cartButtonHandler}></CartButton>;
                },
              }}
            ></Stack.Screen>
            <Stack.Screen name="Cart" component={Cart}></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </CartContext.Provider>
      <StatusBar style="dark" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
