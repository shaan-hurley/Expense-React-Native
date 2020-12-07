
import * as React from 'react';
import { Button, SafeAreaView, View, Text, StyleSheet, FlatList, StatusBar } from 'react-native';
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


const test = () => {
  return (
      <Text>
          This is working
      </Text>
  )
}


export default function HomeScreen( ) {
  const data = [
    { name: 'Transport', expense: 300, color: '#5DA5DA', legendFontColor: '#7F7F7F', legendFontSize: 14 },
    { name: 'Groceries', expense: 200, color: '#B276B2', legendFontColor: '#7F7F7F', legendFontSize: 14 },
    { name: 'Car Payment', expense: 500, color: '#FAA43A', legendFontColor: '#7F7F7F', legendFontSize: 14 },
    { name: 'Rent', expense: 2500, color: '#F15854', legendFontColor: '#7F7F7F', legendFontSize: 14 },
    { name: 'Miscelleneous', expense: 300, color: '#60BD68', legendFontColor: '#7F7F7F', legendFontSize: 14 }
  ]
  const Item = ({ name }) => (
    <View style={styles.item}>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
  
  const renderItem = ({ item }) => (
    <Item name={item.name} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Expense Tracker</Text>
      <PieChart
        data={data}
        width={340}
        height={210}
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
        paddingLeft="2"
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.listContainer}
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
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  listContainer: {
    marginTop: 30,
    width: "100%",
    backgroundColor: "#8ABAD3ff",
    opacity: 0.8,
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
  item: {
    backgroundColor: '#f9c2ff',
    width: "100%",
    padding: 10,
    margin: 2,
    // marginVertical: 8,
    // marginHorizontal: 16,
    alignItems: "center",
    
  }, 
  name: {
    fontSize: 28,
  },
  list: {
    flex: 1,
    alignItems: 'flex-end',
  },
  input: {
    width: '100%', 
    borderWidth: 1,
    padding: 10
  },
});