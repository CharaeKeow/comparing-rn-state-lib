import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import {MaterialCommunityIcons} from '@expo/vector-icons'

const CartButton = ({ onPressHandler, cartCount }) => {


  
  const navigation = useNavigation()
  
  return (

    <TouchableOpacity style={styles.button} onPress={onPressHandler(navigation)}>
      <View style={styles.cartCount}>
        <Text style={{color: 'white'}}>{cartCount}</Text>
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
