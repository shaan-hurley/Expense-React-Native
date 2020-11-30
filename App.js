// In App.js in a new project

import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen'
import DetailsScreen  from './screens/DetailsScreen'
import Chart from './screens/ChartScreen'
import { Ionicons } from 'react-native-vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  const [ query, setQuery ] = useState('')
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-home';
            } else if (route.name === 'Chart') {
              iconName = focused ? 'ios-bar-chart' : 'ios-chart';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'ios-person' : 'ios-person'
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={32} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Chart" component={Chart} />
        {/* <Tab.Screen name="Details" component={DetailsScreen} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;