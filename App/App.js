
// To run this app just cd app => npm install => npx react-native run-android

import 'react-native-gesture-handler';
import { AuthProvider } from "./providers/AuthProvider";

import * as React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Dashboard from './views/Dashboard';
// import SecondPage from './views/SecondPage';
import Settings from './views/Settings';
import Recipes from './views/Recipes';
import SensorData from './views/SensorData';

import WelcomeView from './views/WelcomeView';
import { Logout } from "./components/Logout";

// Import Custom Sidebar
import CustomSidebarMenu from './components/CustomSidebarMenu';
import Registration from './views/Registration';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={toggleDrawer}>
        {/*Donute Button Image */}
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
          }}
          style={{width: 25, height: 25, marginLeft: 5}}
        />
      </TouchableOpacity>
    </View>
  );
};

// welcome page login
function WelcomeStack({navigation}) {
  return (
    <AuthProvider>
    <Stack.Navigator initialRouteName="WelcomeView">
      <Stack.Screen
        name="WelcomeView"
        component={WelcomeView}
        options={{
          drawerLockMode: 'locked-closed',
          title: 'WelcomeView', //Set Header Title
          headerLeft: () => (
            null
          ),
          headerStyle: {
            backgroundColor: '#32cd32', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  </AuthProvider>
  );
}

// recipe page navigation
function RecipeStack({navigation}) {
  return (
    <AuthProvider>
    <Stack.Navigator
      initialRouteName="Recipes"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerRight: () => (
                 <Logout />
         ),
        headerStyle: {
          backgroundColor: '#32cd32', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="Recipes"
        component={Recipes}
        options={{
          title: 'Recipe Searching', //Set Header Title
        }}
      />
    </Stack.Navigator>
  </AuthProvider>
  );
}

//settings page unfinished
function SettingsStack({navigation}) {
  return (
  <AuthProvider>
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerRight: () => (
                 <Logout />
         ),
        headerStyle: {
          backgroundColor: '#32cd32', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          title: 'Settings', //Set Header Title
        }}
      />
    </Stack.Navigator>
  </AuthProvider>
  );
}

//Registration page unfinished
function RegistrationStack({navigation}) {
  return (
  <AuthProvider>
    <Stack.Navigator
      initialRouteName="Registration"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#32cd32', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="Registration"
        component={Registration}
        options={{
          headerLeft: () => (
            null
          ),
          drawerLockMode: 'locked-closed',
          title: 'Registration', //Set Header Title
        }}
      />
    </Stack.Navigator>
  </AuthProvider>
  );
}

//Sensor Data page unfinished
function SensorDataStack({navigation}) {
  return (
  <AuthProvider>
    <Stack.Navigator
      initialRouteName="SensorData"
      screenOptions={{
         headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerRight: () => (
                 <Logout />
         ),
        headerStyle: {
          backgroundColor: '#32cd32', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="Sensor Data"
        component={SensorData}
        options={{
          title: 'SensorData', //Set Header Title
        }}
      />
    </Stack.Navigator>
  </AuthProvider>
  );
}

//Dashboard page unfinished
function DashboardStack({navigation}) {
  return (
  <AuthProvider>
    <Stack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
         headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerRight: () => (
                 <Logout />
         ),
        headerStyle: {
          backgroundColor: '#32cd32', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          title: 'Dashboard', //Set Header Title
        }}
      />
    </Stack.Navigator>
  </AuthProvider>
  );
}

//Main App
function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        // For setting Custom Sidebar Menu
        drawerContent={(props) => <CustomSidebarMenu {...props} />}>
        <Drawer.Screen
          name="WelcomeView"
          options={{
            drawerLabel: 'Signin or Signup',
            drawerLockMode: 'locked-closed',
            // Section/Group Name
            groupName: 'Authentication',
            activeTintColor: '#e91e63',
          }}
          component={WelcomeStack}
        />
        <Drawer.Screen
          name="Dashboard"
          options={{
            drawerLabel: 'Dashboard',
            // Section/Group Name
            groupName: 'Dashboard',
            activeTintColor: '#e91e63',
          }}
          component={DashboardStack}
        />
        <Drawer.Screen
          name="Recipes"
          options={{
            drawerLabel: 'Recipe Searching',
            // Section/Group Name
            groupName: 'Dashboard',
            activeTintColor: '#e91e63',
          }}
          component={RecipeStack}
        />
        <Drawer.Screen
          name="Settings"
          options={{
            drawerLabel: 'Settings',
            // Section/Group Name
            groupName: 'Dashboard',
            activeTintColor: '#32cd32',
          }}
          component={SettingsStack}
        />
        <Drawer.Screen
          name="SensorData"
          options={{
            drawerLabel: 'Sensor Data',
            // Section/Group Name
            groupName: 'Dashboard',
            activeTintColor: '#32cd32',
          }}
          component={SensorDataStack}
        />
 {/* Registration is intended to be accessed only from the login screen */}
        <Drawer.Screen
          name="Registration"
          options={{
            drawerLockMode: 'locked-closed',
            // drawerLabel: 'Registration',
            // Section/Group Name
            // groupName: 'Authentication',
            activeTintColor: '#e91e63',
          }}
          component={RegistrationStack}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;