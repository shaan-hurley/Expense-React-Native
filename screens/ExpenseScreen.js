import React, { useState } from 'react'
import { Text, SafeAreaView, TextInput, Button, StyleSheet } from 'react-native'
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
                onChange={(e) => {
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
            <Button
                title="Save"
                onPress={(e) => {
                    const dispatch = useDispatch()
                    dispatch(newExpense(name, amount, description))
                }}
            />
        </SafeAreaView>
    )
    
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      width: '100%',
    },
    button: {
        marginTop: 700,
        backgroundColor: 'red',
        color: 'red',
    },
  });