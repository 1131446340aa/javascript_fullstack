/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
    <>
      <View style={[styles.view]} onPress={}>
        {/* <View style={{flex:1,backgroundColor: 'red' }}></View>
        <View style={{flex:1,backgroundColor: 'pink'}}></View>
        <View style={{flex:1, backgroundColor: 'red' }}></View> */}
        <Text>161332132</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  view: {
    height: 80,
    flexDirection: 'row',
    backgroundColor: 'yellow'
  }
});

export default App;