// React Navigation Drawer with Sectioned Menu Options & Footer
// https://aboutreact.com/navigation-drawer-sidebar-menu-with-sectioned-menu-options-footer/

import React, { useEffect, useState } from "react";
// import styles from "../stylesheet";
import { View, SafeAreaView, StyleSheet, Text, TextInput, Button, TouchableOpacity, ScrollView } from "react-native";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from "react-native-table-component";


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
 
  const tableHead = ['Sensors', 'Readings'];
    const tableData = [
      ['Temperature', sdata[0]],
      ['Humidity', sdata[1]],
      ['Water Level', sdata[2]],
      ['Light Level', sdata[3]],
      ['tds', sdata[4]],
      ['ph', sdata[5]],
    ];
  
  return (
    <SafeAreaView style={{flex: 1}}>
    <View>
        <Table borderStyle={{borderWidth: 1, borderColor: '#ffa1d2'}}>
          <Row data={tableHead} style={styles.HeadStyle} textStyle={styles.TableText} />
          <Rows data={tableData} textStyle={styles.TableText}/>
        </Table>
      </View>
        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.inputStyle}
            placeholder="Set pH level"
            // onChangeText={onChange}
            // value={query}
            autoComplete="off"
          />
          <Text>
            {'\n'}
          </Text>
           <TextInput 
            style={styles.inputStyle}
            placeholder="Set water level"
            // onChangeText={onChange}
            // value={query}
            autoComplete="off"
          />
          <Text>
            {'\n'}
          </Text>
           <TextInput 
            style={styles.inputStyle}
            placeholder="Set tds"
            // onChangeText={onChange}
            // value={query}
            autoComplete="off"
          />
        </View>
      
      <View style={{flex: 1}}>
        <View style={styles.container}>
        <Text style={styles.footerHeading}>
          This page will host all important pod sensor data information
        </Text>
        <Text style={styles.footerText}>
          Control of pod is next to be implemented as a button below sensor readings
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
   inputContainer: {
    padding: 15
  },
  footerHeading: {
    fontSize: 18,
    textAlign: 'center',
    color: 'grey',
  },
  HeadStyle: { 
    height: 50,
    alignContent: "center",
    backgroundColor: '#ffe0f0'
  },
  TableText: { 
    margin: 10
  },
  footerText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'grey',
  },
    inputStyle: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    borderRadius: 2,
  },
});

export default SensorData;


