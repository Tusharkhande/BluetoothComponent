import { View, Text, StyleSheet, Button } from 'react-native';
import React, {useState, useEffect} from 'react';
import BluetoothComponent from './BluetoothComponent';
import BleManager from 'react-native-ble-manager';

export default function App() {
  return (
    <View style = {styles.container}>
      <BluetoothComponent />
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10
  },
  status: {
    fontSize: 16,
    margin: 10
  }
});