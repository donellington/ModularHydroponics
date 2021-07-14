import React from "react";
import {View, Text} from 'react-native';
import styles from "../stylesheet";

// unfinished 
// plan to prompt user to enter data for recipe search
const Alert = ({ alert }) => {
  return (
    <View className="alert">
      <Text h3>{alert}</Text>
    </View>
  );
};

export default Alert;
