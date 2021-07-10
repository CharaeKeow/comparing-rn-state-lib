import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useGlobalState } from '../state/Cart'

import { MaterialCommunityIcons } from '@expo/vector-icons'


const CartButton = ({ onPressHandler }) => {
  const state = useGlobalState()
  
  const navigation = useNavigation()
  
  return (

    <TouchableOpacity style={styles.button} onPress={onPressHandler(navigation)}>
      <View style={styles.cartCount}>
        <Text style={{color: 'white'}}>{state.get().size}</Text>
        </View>
      <MaterialCommunityIcons name="cart-outline" size={24} color="black" />
    </TouchableOpacity>
  
  )
}

export default CartButton

const styles = StyleSheet.create({
  button: {
    marginRight: 20,
    position: 'relative'
  },
  cartCount: {
    height: 20,
    width: 20,
    backgroundColor: '#b35f2e',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 10,
    top: -10,
    right: -10
  }
})
