import React, { useState } from "react";
import { SafeAreaView, Text, Dimensions, View } from "react-native";
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
  const expenseList = expense.map((name, index) => {
    return <View key={index}>name: {expense.name}</View>;
  });
  return (
    <SafeAreaView>
      <LineChart
        data={{
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
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
          decimalPlaces: 2, // optional, defaults to 2dp
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

const mapStateToProps = (state) => {
  const { expense } = state;
  return { expense };
};

export default connect(mapStateToProps)(Chart);
