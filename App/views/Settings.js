// React Navigation Drawer with Sectioned Menu Options & Footer
// https://aboutreact.com/navigation-drawer-sidebar-menu-with-sectioned-menu-options-footer/

import * as React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

const Settings = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View style={styles.container}>
          <Text style={styles.textStyle}>
            Settings 
            {'\n\n'}
            This page will host extra features to manage the account and pods
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

export default Settings;