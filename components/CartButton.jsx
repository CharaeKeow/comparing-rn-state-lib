import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import {MaterialCommunityIcons} from '@expo/vector-icons'

const CartButton = ({ onPressHandler }) => {
  
  const navigation = useNavigation()
  
  return (

    <TouchableOpacity style={styles.button} onPress={onPressHandler(navigation)}>
      <MaterialCommunityIcons name="cart-outline" size={24} color="black" />
    </TouchableOpacity>
  
  )
}

export default CartButton

const styles = StyleSheet.create({
  button: {
    marginRight: 20
  }
})
