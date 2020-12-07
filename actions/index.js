export const NEW_EXPENSE = 'NEW_EXPENSE'


export const newExpense = (name, amount, description) => {
    return {
        type: NEW_EXPENSE,
        payload: { name, amount, description, }

    }
}