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
import Home from '../screens/Home/Home.screen'
import Profile from '../screens/Profile/Profile.screen'
import Icon from 'react-native-vector-icons/Ionicons'

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
        name="Profile"
        component={Profile}
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

const MyStack = () => {
  return (
    <Stack.Navigator 
      // screenOptions={screenOptionStyle}
    >
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
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
    <Drawer.Navigator initialRouteName="Home"
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
        <Drawer.Screen name="Home" component={MyTabs} />
        <Drawer.Screen name="Profile" component={MyStack} />
      </Drawer.Navigator>
  )
}



const MainNavigation = () => {
  return (
    <NavigationContainer>
       <MyDrawer/>
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
