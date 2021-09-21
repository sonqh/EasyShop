import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import ProductList from './ProductList';
const data = require('../../assets/data/products.json');

const ProductContainter = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    setProduct(data);
    return () => {
      setProduct([]);
    };
  }, []);
  return (
    <View>
      <View style={styles.productContainer}>
        <FlatList
          horizontal={false}
          numColumns="2"
          data={product}
          renderItem={({item}) => <ProductList key={item.name} item={item} />}
          keyExtractor={item => item.name}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  productContainer: {
    marginTop: 100,
  },
});
export default ProductContainter;
