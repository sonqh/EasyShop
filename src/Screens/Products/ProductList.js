import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ProductCard from './ProductCard';

const width = Dimensions.get('window').width;
const ProductList = props => {
  const {item} = props;

  return (
    <TouchableOpacity style={styles.productListContainer}>
      <View style={styles.productList}>
        <ProductCard {...item} />
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  productListContainer: {
    width: '50%',
  },
  productList: {
    width: width / 2,
    backgroundColor: 'gainsboro',
  },
});
export default ProductList;
