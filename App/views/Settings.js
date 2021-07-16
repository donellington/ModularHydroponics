// React Navigation Drawer with Sectioned Menu Options & Footer
// https://aboutreact.com/navigation-drawer-sidebar-menu-with-sectioned-menu-options-footer/

import * as React from 'react';
import styles from "../stylesheet";
import { View, SafeAreaView, StyleSheet, Text, TextInput, Button, TouchableOpacity, ScrollView } from "react-native";

// import { Delete } from "./components/DeleteAccount";
import { DeleteAccount } from '../components/DeleteAccount';

const Settings = () => {
  return (
      <View>
          <Text>
            {'\n'}
          </Text>
        <View style={styles.inputContainer}>
          <TextInput 
              style={styles.inputStyle}
              placeholder="Change Password"
              // onChangeText={onChange}
              // value={query}
              autoComplete="off"
            />
            <Text>
              {'\n'}
            </Text>
          <Button 
            title="Save"
            // onPress={onSubmit} 
            value="Save"
            color="#6b8e23"
          />
            <Text>
              {'\n'}
            </Text>
          <DeleteAccount></DeleteAccount>
        </View>
      </View>
  );
};

export default Settings;