import React from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet } from 'react-native'



export default function DetailsScreen({ route, navigation }) {
  // const { title, info } = route.params
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Details</Text>
      <Text style={{ fontSize: 40 }}>title</Text>
      <Text style={{ fontSize: 20 }}>hello</Text>
    </SafeAreaView>
  );
}


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
