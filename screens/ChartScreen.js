import React, { useState } from "react";
import { SafeAreaView, Text, Dimensions, View, StyleSheet } from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
} from "react-native-chart-kit";

import { connect, useSelector } from "react-redux";
import { newExpense } from "../actions";

function Chart({ navigation }) {
  const expense = useSelector((state) => state.expense);

  const expenseList = expense.map((item, index) => {
    return (
        <View key={index}>
            <Text>name: {item.name}</Text>
            <Text>{item.amount}</Text>
            <Text>{item.description}</Text>
        </View>
    );
  });
  const data = expense.map((item, index) => {
    return{
      data: [
        Math.random() * 100
      ]
    }
  })
  return (
    <SafeAreaView>
      <Text style={styles.title}>History</Text>
      <LineChart
        data={{
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              data: [
                300 / 100,
                2000 / 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={Dimensions.get("window").width} // from react-native
        height={220}
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2, 
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
      {expenseList}
    </SafeAreaView>
  );
}

export default Chart;



const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});