import React from 'react';
import {Image, SafeAreaView, StyleSheet} from 'react-native';

const Header = props => {
  return (
    <SafeAreaView style={styles.headerContainer}>
      <Image
        source={require('../assets/image/Logo.png')}
        resizeMode="contain"
        style={styles.image}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    padding: 20,
    marginTop: 80,
    backgroundColor: 'white',
  },
  image: {
    height: 50,
  },
});
export default Header;
