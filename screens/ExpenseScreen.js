import { NavigationHelpersContext } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Text,
  SafeAreaView,
  TextInput,
  Button,
  StyleSheet,
  StatusBar,
  View,
  TouchableOpacity,
} from "react-native";
import { connect, useDispatch } from "react-redux";
import { newExpense } from "../actions";
import { saveState } from "../utils";

export default function Expense({ navigation, route }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Add Expense</Text>
      <Text style={styles.inputTitle}>Expense</Text>
      <TextInput
        style={styles.input}
        placeholder="Name of Expense"
        onChangeText={(text) => {
          setName(text);
        }}
        value={name}
      />
      <Text style={styles.inputTitle}>Amount</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Number Amount"
        onChangeText={(text) => {
          setAmount(text);
        }}
        value={amount}
      />
      <Text style={styles.inputTitle}>Description</Text>
      <TextInput
        style={styles.input}
        placeholder='Add a Description'
        onChangeText={(text) => {
          setDescription(text);
        }}
        value={description}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={(e) => {
            dispatch(newExpense(name, amount, description));
          }}
        >
          <Text style={styles.button}>Save</Text>
        </TouchableOpacity>
      </View>
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
    marginBottom: 50,
  },
  buttonContainer: {
    marginTop: 25,
    elevation: 8,
    backgroundColor: "#60BD68",
    borderRadius: 50,
    paddingVertical: 10,
  },
  button: {
    fontSize: 18,
    color: "#000",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 50,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    
  },
  inputTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  }
});
