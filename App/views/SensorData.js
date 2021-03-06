// React Navigation Drawer with Sectioned Menu Options & Footer
// https://aboutreact.com/navigation-drawer-sidebar-menu-with-sectioned-menu-options-footer/

import React, { useEffect, useState } from "react";
// import styles from "../stylesheet";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from "react-native-table-component";

// import * as React from 'react';
// import {SafeAreaView, StyleSheet, View, Button, Text} from 'react-native';

const SensorData = () => {
  const [sdata, setSdata] = useState([]);

  const refreshPage = () => {
    window.location.reload(false);
  };

  useEffect(() => {
    fetch(
      "https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/appwebsite-uirte/service/sensorData/incoming_webhook/sensorData"
    )
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

  const tableHead = ["Sensors", "Data"];
  const tableData = [
    ["Temperature (fahrenheit)", sdata[0]],
    ["Humidity (%)", sdata[1]],
    ["Water Level (FULL = 1, EMPTY= 0)", sdata[2]],
    ["Light Level (on = 1, off = 0)", sdata[3]],
    ["Total Dissolved Solids (mg/l)", sdata[4]],
    ["ph (acidic 0 - basic 14)", sdata[5]],
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Table borderStyle={{ borderWidth: 1, borderColor: "#ffa1d2" }}>
          <Row
            data={tableHead}
            style={styles.HeadStyle}
            textStyle={styles.TableText}
          />
          <Rows data={tableData} textStyle={styles.TableText} />
        </Table>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontSize: 18,
    textAlign: "center",
  },
  inputContainer: {
    padding: 15,
  },
  footerHeading: {
    fontSize: 18,
    textAlign: "center",
    color: "grey",
  },
  HeadStyle: {
    height: 50,
    alignContent: "center",
    backgroundColor: "#ffe0f0",
  },
  TableText: {
    margin: 10,
  },
  footerText: {
    fontSize: 16,
    textAlign: "center",
    color: "grey",
  },
  inputStyle: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    borderRadius: 2,
  },
});

export default SensorData;
