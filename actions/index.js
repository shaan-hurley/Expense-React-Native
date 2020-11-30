export const NEW_EXPENSE = 'NEW_EXPENSE'


export const newExpense = (name, description, ammount) => {
    return {
        type: NEW_EXPENSE,
        payload: { name, description, ammount }

    }
}