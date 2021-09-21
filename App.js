/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {StyleSheet, View} from 'react-native';

import ProductContainter from './src/Screens/Products/ProductContainer';
import Header from './src/Shared/Header';

const App: () => Node = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ProductContainter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gainsboro',
  },
});

export default App;
