// React Navigation Drawer with Sectioned Menu Options & Footer
// https://aboutreact.com/navigation-drawer-sidebar-menu-with-sectioned-menu-options-footer/

import * as React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

const Dashboard = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 20}}>
        <View style={styles.container}>
          <Text style={styles.textStyle}>
            {'\n\n'}
            Welcome to Hydroponics Helper!
          </Text>
        </View>
        <Text style={styles.footerHeading}>
          This is the streamlined version of our website. Use this app to interact with our project Stem 'n' Leaf. 
        </Text>
        <Text style={styles.footerText}>
          Our mobile app is designed to assist you in the growth on your plant in our garden pod. Use the sidemenu tab on the top left or swipe right to navigate the pages.
        </Text>
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
    fontSize: 28,
    textAlign: 'center',
  },
  footerHeading: {
    fontSize: 22,
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