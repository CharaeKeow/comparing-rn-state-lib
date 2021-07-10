import React from 'react'
import { StyleSheet, Text, View, FlatList, Image } from 'react-native'

import { useStoreState } from 'easy-peasy'

const CartItem = ({ item }) => {

  return (
    <View style={styles.itemCard}>
      <Image style={styles.image} source={{ uri: item.image }} />
      <View style={{ paddingLeft: 20, flex: 1 }}>
        <Text numberOfLines={1} style={styles.title}>{item.title}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <Text numberOfLines={1}>${item.price}</Text>
          <Text>x{item.quantity}</Text>
        </View>
      </View>
    </View>
  )
}

const Cart = () => {
  const products = useStoreState((state)=> state.products)
  return (
      <View style={styles.itemsList}>
      <FlatList data={Object.values(products)} renderItem={CartItem} keyExtractor={item=> `item-${item.id}`}></FlatList>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  itemsList: {
    padding: 20,
    flex: 1,
  },
  itemCard: {
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
