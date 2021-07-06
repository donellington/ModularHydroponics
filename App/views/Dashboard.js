// React Navigation Drawer with Sectioned Menu Options & Footer
// https://aboutreact.com/navigation-drawer-sidebar-menu-with-sectioned-menu-options-footer/

import * as React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

const Dashboard = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View style={styles.container}>
          <Text style={styles.textStyle}>
            {'\n\n'}
            This is the Dashboard
          </Text>
        </View>
        <Text style={styles.footerHeading}>
          Intended to be landing page to help user navigate the app
        </Text>
        <Text style={styles.footerText}></Text>
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

export default Dashboard;