export const NEW_EXPENSE = 'NEW_EXPENSE'


export const newExpense = (name, description, amount) => {
    return {
        type: NEW_EXPENSE,
        payload: { name, description, amount }

    }
}