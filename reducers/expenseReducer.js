import { NEW_EXPENSE } from "../actions";



class Expense {
    constructor(name, description, amount) {
        this.name = name;
        this.description = description;
        this.amount = amount;
        this.date = new Date()
    }
}


export default expenseReducer = ( state = [], action) => {
    switch(action.type) {
        case NEW_EXPENSE:
            return [...state, new Expense(action.payload.name, action.payload.description, action.payload.amount)]
        default:
            return state
    }
}

