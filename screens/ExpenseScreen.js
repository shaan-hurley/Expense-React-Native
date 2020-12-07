import React, { useState } from 'react'
import { Text, SafeAreaView, TextInput, Button, StyleSheet, View, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import { newExpense } from '../actions'


export default function Expense() {
    const [name, setName] = useState("")
    const [amount, setAmount] = useState("")
    const [description, setDescription] = useState("")
    return (
        <SafeAreaView>
            <Text>Expense</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={(e) => {
                    setName(e.target.value)}
                }
                value={name}
            />
            <Text>Amount</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChange={(e) => {
                    setAmount(e.target.value)}
                }
                value={amount}
            />
            <Text>Description</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChange={(e) => {
                    setDescription(e.target.value)}
                }
                value={description}
            />
            <View style={styles.buttonContainer}>
                {/* <Button
                    title="Save"
                    onPress={(e) => {
                        const dispatch = useDispatch()
                        dispatch(newExpense(name, amount, description))
                    }}
                    style={styles.button}
                /> */}

                <TouchableOpacity
                    
                    onPress={(e) => {
                        const dispatch = useDispatch()
                        dispatch(newExpense(name, amount, description))
                    }}
                >
                    <Text style={styles.button}>Save</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
    
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      width: '100%',
    },
    buttonContainer: {
        marginTop: 50,
        elevation: 8,
        backgroundColor: '#60BD68',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    button: {
        fontSize: 18,
        color: "#000",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
  });