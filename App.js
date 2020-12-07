// In App.js in a new project

import React, { useState } from 'react';
import { View, Text, Button  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen'
import DetailsScreen  from './screens/DetailsScreen'
import Chart from './screens/ChartScreen'
import Expense  from "./screens/ExpenseScreen";
import { Ionicons } from 'react-native-vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { loadState, saveState } from "./utils";
import { createStore } from "redux";
import { Provider } from 'react-redux'
import reducers from './reducers'


const persistedState = loadState();
const store = createStore(reducers, persistedState);
store.subscribe(() => {
  saveState(store.getState());
})

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TestScreen({ route, navigation }) {
  // const { title, info } = route.params
  return (
    <View style={{justifyContent:'center', width:'100%'}}>
      <Text style={{fontSize:40}}>title</Text>
      <Text style={{fontSize:20}}>hello</Text>
      <Button title="More Details" onPress={() => {
        navigation.navigate('NewScreen', { title: "this works", info: 'this works too'})
        }} />
    </View>
  )
}

function NewScreen({ route, navigation }) {
  const { title, info } = route.params
  return (
    <View style={{justifyContent:'center', width:'100%'}}>
      <Text style={{fontSize:40}}>{title}</Text>
      <Text style={{fontSize:20}}>{info}</Text>
      {/* <Button title="More Details" onPress={() => {
        navigation.navigate('Screen2', { title, info: 'more info...'})
      }} /> */}
    </View>
  )
}

function StackScreen(navigation) {
  return (
    <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: 'tomato',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
      <Stack.Screen name="Screen1" component={TestScreen} />
      <Stack.Screen name="NewScreen" component={NewScreen} />
    </Stack.Navigator>
  )
}

function App() {
  const [ query, setQuery ] = useState('')
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'ios-home' : 'ios-home';
              } else if (route.name === 'Chart') {
                iconName = focused ? 'ios-add-bar-chart' : 'ios-add-bar-chart';
              } else if (route.name === 'Add Expense') {
                iconName = focused ? 'ios-add-circle' : 'ios-add-circle'
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
          <Tab.Screen name="Test" component={StackScreen} />
          <Tab.Screen name="Chart" component={Chart} />
          <Tab.Screen name="Add Expense" component={Expense} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;