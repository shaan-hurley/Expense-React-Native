// import { AsyncStorage } from "react-native";
const EXPENSE_STATE = "EXPENSE_STATE"

// Load State
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(EXPENSE_STATE)
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch(err) {
    return undefined
  }
}

// Save State
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(EXPENSE_STATE, serializedState)
  } catch(err) {
    console.log("Error saving data:"+err)
  }
}