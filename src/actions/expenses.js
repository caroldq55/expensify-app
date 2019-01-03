export const addExpense = ( expense ) => ({
   type: "ADD_EXPENSE",
   expense
});

export const startAddExpense = (expenseData = {}) => ({
	type: 'START_ADD_EXPENSE',
    expenseData,
});

export const removeExpense = ( {id} = {}) => ({
    type: "REMOVE_EXPENSE",
    id: id
});

export const startRemoveExpense = ({id} = {} ) => ({
	type: "START_REMOVE_EXPENSE",
	id: id
});

export const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
});

export const startEditExpense = (id, updates) => ({
	type: "START_EDIT_EXPENSE",
	id,
	updates
});

export const setExpenses = (expenses) => ({
    type: "SET_EXPENSES",
    expenses
});

export const startSetExpenses = () => ({
	type: "START_SET_EXPENSES",
});

