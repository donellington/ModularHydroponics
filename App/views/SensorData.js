// React Navigation Drawer with Sectioned Menu Options & Footer
// https://aboutreact.com/navigation-drawer-sidebar-menu-with-sectioned-menu-options-footer/

import React, { useEffect, useState } from "react";
// import styles from "../stylesheet";
import { View, SafeAreaView, StyleSheet, Text, TextInput, Button, TouchableOpacity, ScrollView } from "react-native";

// import * as React from 'react';
// import {SafeAreaView, StyleSheet, View, Button, Text} from 'react-native';

const SensorData = () => {

  const [sdata, setSdata] = useState([]);

  useEffect(() => {
    fetch('https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/appwebsite-uirte/service/sensorData/incoming_webhook/sensorData')
      .then((response) => response.json())
      .then((data) => {
        const data_array = [];
        data_array[0] = data.sensors[0].temperature;
        data_array[1] = data.sensors[0].humidity;
        data_array[2] = data.sensors[0].waterlevel;
        data_array[3] = data.sensors[0].lightvalue;
        data_array[4] = data.sensors[0].tds;
        data_array[5] = data.sensors[0].ph;
        setSdata(data_array);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View style={styles.container}>
          <Text style={styles.textStyle}>
            Sensor Data 
            {'\n\n'}
            {sdata[0]}
            {sdata[1]}
            {sdata[2]}
            {sdata[3]}
            {sdata[4]}
          </Text>
        <Text style={styles.footerHeading}>
          This page will host all important pod sensor data information
        </Text>
        <Text style={styles.footerText}>
          Control of pod is next to be implemented
        </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 18,
    textAlign: 'center',
  },
  footerHeading: {
    fontSize: 18,
    textAlign: 'center',
    color: 'grey',
  },
  footerText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'grey',
  },
});

export default SensorData;

