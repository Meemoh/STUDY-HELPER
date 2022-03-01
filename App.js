import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from './Screens/HomeScreen'
import LoadingScreen from './Screens/LoadingScreen'
import LoginScreen from './Screens/LoginScreen'
import LogOut from './Screens/LogOut'
import QuizScreen from './Screens/QuizScreen'
import ResultScreen from './Screens/ResultScreen'
import SearchScreen from './Screens/SearchScreen'
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { RFValue } from 'react-native-responsive-fontsize'

const Tab = createBottomTabNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => {
            tabBarIcon:({focused, color, size})
            let iconName
            if (route.name === 'Home') {
              iconName = focused ? "home" : 'home-outline'
            }
            else if (route.name === 'Loading') {
              iconName = focused ? "reload" : "reload-outline"
            }
            else if (route.name === 'Login') {
              iconName = focused ? "log-in" : "log-in-outline"
            }
            else if (route.name === 'LogOut') {
              iconName = focused ? "log-out" : "log-out-outline"
            }
            else if (route.name === 'Quiz') {
              iconName = focused ? "help" : "help-outline"
            }
            else if (route.name === 'Result') {
              iconName = focused ? "happy" : "happy-outline"
            }
            else if (route.name === 'Search') {
              iconName = focused ? "search" : "search-outline"
            }
            return (
              <Ionicons
                name={iconName}
                size={RFValue(25)}
                color={color}
                
              />
            );
          }
          }
          activeColor={"#ee8249"}
          inactiveColor={"gray"}
        >

          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Loading" component={LoadingScreen} />
          <Tab.Screen name="Login" component={LoginScreen} />
          <Tab.Screen name="LogOut" component={LogOut} />
          <Tab.Screen name="Quiz" component={QuizScreen} />
          <Tab.Screen name="Result" component={ResultScreen} />
          <Tab.Screen name="Search" component={SearchScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomTabStyle: {
    backgroundColor: "#2f345d",
    height: "8%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden",
    position: "absolute"
  },
  icons: {
    width: RFValue(30),
    height: RFValue(30)
  }
});
