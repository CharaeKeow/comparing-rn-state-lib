import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ProductCard = ({ product }) => {
  
  function addToCart() {
    
  }
  return (
 
    <View style={styles.productCard}>
      <Image style={styles.image} source={{uri: product.image}}/>
      <View style={{paddingLeft: 20, flex: 1}}>
        <Text numberOfLines={1} style={styles.title}>{product.title}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <Text numberOfLines={1}>${product.price}</Text>
          <TouchableOpacity onPress={addToCart} style={{marginRight: 20}}>
            <MaterialCommunityIcons name="cart-plus" size={24} color="#b35f2e" />
          </TouchableOpacity>
        </View>
      </View>
    </View>

  )
}

export default ProductCard

const styles = StyleSheet.create({
  productCard: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    fontSize: 12,
    fontWeight: '600',
    flex: 1,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 10,
    resizeMode: 'cover',
  }
})
