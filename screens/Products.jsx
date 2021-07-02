import React, {useEffect, useState} from 'react'
import { StyleSheet, View, ActivityIndicator, ScrollView, FlatList } from 'react-native'
import ProductCard from '../components/ProductCard'

import axios from 'axios'



const Products = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const signal = axios.CancelToken.source()
    axios.get('https://fakestoreapi.com/products', {
      cancelToken: signal.token
    })
      .then(({data}) => {
  
        setProducts(data)
        setLoading(false)
      })
      .catch(err => console.log(err))
    return () => signal.cancel('request cancelled')
  }, [])

  const renderItem = ({ item }) => {
    return <ProductCard product={item} />
  }


  return (
    <View style={styles.container}>
      {
        loading ? (
          <View style={styles.loader}>
              <ActivityIndicator ></ActivityIndicator>
          </View>
        )
          : (
            <View style={styles.productList}>
              <FlatList data={products} renderItem={renderItem} keyExtractor={item => `key-${item.id}`} />
            </View>
          )
      }

    </View>
  )
}

export default Products

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loader: {
    flex: 1,
    justifyContent: 'center'
  },
  productList: {
    padding: 20,
    flex: 1,
  }
})
