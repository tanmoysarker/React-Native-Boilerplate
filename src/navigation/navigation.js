import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons'
import AsyncStorage from '@react-native-async-storage/async-storage';

import Home from '../screens/Home/Home.screen'
import Profile from '../screens/Profile/Profile.screen'
import Login from '../screens/Login/LoginScreen'
import Setting from '../screens/Setting/SettingScreen'
import RegisterScreen from '../screens/Login/RegisterScreen'


const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()
const Drawer = createDrawerNavigator()

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return <Icon name={'ios-home'} size={25} color={color} />
          }
        }}
      />
      <Tab.Screen
        name="Stats"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return <Icon name={'ios-stats-chart'} size={25} color={color} />
          }
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return <Icon name={'ios-settings'} size={25} color={color} />
          }
        }}
      />
    </Tab.Navigator>
  )
}

var asyncValue;
const getData = async () => {
  try {
    asyncValue = await AsyncStorage.getItem('auth')
    if (value !== null) {
      // value previously stored
    }
  } catch (e) {
    // error reading value
  }
}
getData();


const LoginStack = () => {
  return (
    <Stack.Navigator
    >
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: false }} />



    </Stack.Navigator >
  );
}

const MyStack = () => {
  return (
    <Stack.Navigator
    >
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />



    </Stack.Navigator >
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Login"
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      {/* {asyncValue === 'logged'
        ? */}
      <Drawer.Screen name="Login" header={null} component={LoginStack} options={{ headerShown: false }} />
      {/* :
        <> */}
      <Drawer.Screen name="Home" component={MyTabs} />
      <Drawer.Screen name="Profile" header={null} component={MyStack} options={{ headerShown: false }} />
      {/* </>

      } */}
    </Drawer.Navigator>
  )
}



const MainNavigation = () => {
  return (
    <NavigationContainer>
      <MyDrawer />
      {/* <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="HomeBase"
          options={{ headerShown: false }}
          component={MyTabs}
        />
        <Stack.Screen
          name="MyDrawer"
          options={{ headerShown: false }}
          component={MyDrawer}
        />
       
      </Stack.Navigator> */}
    </NavigationContainer>
  )
}

export default MainNavigation
