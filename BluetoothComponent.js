import BleManager from 'react-native-ble-manager';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button, PermissionsAndroid} from 'react-native';


// Create a React functional component
const BluetoothComponent = () => {
  // Define the state of the component using the useState hook
  const [isBluetoothEnabled, setIsBluetoothEnabled] = useState(false); // A boolean flag to indicate if bluetooth is enabled or not

  const permission = async () => {
    try {
      console.log("hello");
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      ]);
      if (
        granted[PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION] ===
        PermissionsAndroid.RESULTS.GRANTED
      ) {
        console.log('Location permission granted');
      } else {
        console.log('Location permission denied');
      }
    } catch (error) {
      console.log('Error requesting location permission: ', error);
    }
  };
  const checkAndEnableBluetooth = () => {
    try {
      BleManager.enableBluetooth()
        .then(() => {
          // Success code
          setIsBluetoothEnabled(true);
          console.log("The bluetooth is already enabled or the user confirm");
        })
        .catch((error) => {
          // Failure code
          setIsBluetoothEnabled(false);
          console.log(error)
          console.log("The user refuse to enable bluetooth");
        });
    } catch (error) {
      // Handle any errors
      console.error(error);
    }
  };

  const scanDevices = async () => {
    // try{
    //   // console.log("hello");
    //   BleManager.scan([], 5, true).then(() => {
    //     // Success code
    //     console.log("Scan started");
    //   }).catch((error) => {
    //     // Failure code
    //     console.log(error);
    //   });
    // }catch (error) {
    //   console.error(error);
    // }
    BleManager.scan([], 5, true).then(() => {
      // Success code
      console.log("Scan started");
    });
  };

  useEffect(() => {
    permission();
  }, []); // Pass an empty dependency array to run the effect only once

  // Define a function to render the component
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bluetooth Component</Text>
      <Text style={styles.status}>
        Bluetooth is {isBluetoothEnabled ? 'enabled' : 'disabled'}
      </Text>
      <Button
        title="Turn on Bluetooth"
        onPress={checkAndEnableBluetooth}
        disabled={isBluetoothEnabled}
      />
      <Button title="Scan for devices" onPress={scanDevices} />

    </View>
  );
};

// Define some styles for the component
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

// Export the component
export default BluetoothComponent;