
import * as React from 'react';
import { Button, SafeAreaView, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from 'react-native-vector-icons'
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph
} from 'react-native-chart-kit'

export default function HomeScreen( ) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Expense</Text>
      {/* <Button
        title="Go to Details"
        onPress= { () => {
            navigation.navigate('Details', {
                itemId: 86,
                otherParam: 'Testing params through routes'
            })
        }}
      />
      <Button title="Go to charts" onPress={() => navigation.navigate('Chart')} /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  title: {
    color: 'red',
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
    letterSpacing: 3,
    padding: (0, 20),
    backgroundColor: "#1abc9c",
    color: "white",
    width: "100%",
    
  },
  list: {
    flex: 1,
    width: "100%"
  },
  input: {
    width: '100%', 
    borderWidth: 1,
    padding: 10
  },
});