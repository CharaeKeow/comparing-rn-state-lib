import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StoreProvider } from 'easy-peasy';

import cartStore from './state/cart';

import Products from './screens/Products.jsx';
import Cart from './screens/Cart.jsx';

import CartButton from './components/CartButton.jsx';

const Stack = createStackNavigator();

export default function App() {
  function cartButtonHandler(navigation) {
    return () => navigation.navigate('Cart');
  }
  return (
    <>
      <StoreProvider store={cartStore}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Products">
            <Stack.Screen
              name="Products"
              component={Products}
              options={{
                headerRight: (props) => {
                  return <CartButton {...props} onPressHandler={cartButtonHandler}></CartButton>;
                },
              }}
            ></Stack.Screen>
            <Stack.Screen name="Cart" component={Cart}></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </StoreProvider>
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
