import React, { Component, useState } from 'react'
import { Text, SafeAreaView, TextInput } from 'react-native'



export default function Expense() {
    const [name, setName] = useState("")
    const [amount, setAmount] = useState("")
    const [description, setDescription] = useState("")
    return (
        <SafeAreaView>
            <Text>Expense</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setName(text)}
                value={name}
            />
            <Text>Amount</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setAmount(text)}
                value={amount}
            />
            <Text>Description</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChange={text => setDescription(text)}
                value={description}
            />
        </SafeAreaView>
    )
    
}