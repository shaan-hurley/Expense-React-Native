import * as React from "react";
import {
  Button,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
  TouchableHighlight,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "react-native-vector-icons";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
} from "react-native-chart-kit";
import { useSelector } from 'react-redux'


export default function HomeScreen({ navigation, route }) {
  const expense = useSelector(state => state.expense)
  const data = expense.map((item, index) => {
    return{
      name: item.name,
      expense: parseFloat(item.amount),
      color: `hsl(${360/expense.length * index}, 100%, 40%)`,
      legendFontColor: `hsl(${360/expense.length * index}, 100%, 40%)`,
      legendFontSize: 14
    }
  })

  const Item = ({ name, expense }) => (
    <View style={styles.item}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.expense}>${expense}.00</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#DDDDD"
      onPress={() => navigation.navigate('Test')}
    >
      <Item name={item.name} expense={item.expense} />
    </TouchableHighlight>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Expense Tracker</Text>
      <PieChart
        data={data}
        width={340}
        height={210}
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        }}
        accessor="expense"
        backgroundColor="transparent"
        paddingLeft="2"
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.listContainer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  listContainer: {
    marginTop: 30,
    width: "100%",
    backgroundColor: "#2191FB",
    opacity: 0.8,
  },
  title: {
    textAlign: "center",
    fontSize: 35,
    fontWeight: "bold",
    letterSpacing: 3,
    padding: (0, 20),
    backgroundColor: "#1abc9c",
    color: "white",
    width: "100%",
  },
  item: {
    flexDirection: "row",
    backgroundColor: "#f9c2ff",
    width: "100%",
    padding: 10,
    margin: 2,
    justifyContent: "space-between",

    alignItems: "center",
  },
  name: {
    fontSize: 24,
  },
  expense: {
    fontSize: 24,
  },
  list: {
    flex: 1,
    alignItems: "flex-end",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    padding: 10,
  },
});
