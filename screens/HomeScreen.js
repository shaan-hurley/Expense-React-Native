
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
  const data = [
    { name: 'Transportation', expense: 300, color: '#5DA5DA', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Groceries', expense: 200, color: '#B276B2', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Car Payment', expense: 500, color: '#FAA43A', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Rent', expense: 2500, color: '#F15854', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Miscelleneous', expense: 300, color: '#60BD68', legendFontColor: '#7F7F7F', legendFontSize: 15 }
  ]
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Expense</Text>
      
      <PieChart
        data={data}
        width={340}
        height={220}
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          }
        }}
        accessor="expense"
        backgroundColor="transparent"
        paddingLeft="15"
      />
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