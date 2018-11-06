import expensesReducers from "../../reducers/expenses";
import expenses from "../fixtures/expenses";


test("should set default state", () => {
    const state = expensesReducers( undefined, { type: "@@INIT"});
    expect(state).toEqual([]);
});

test("should add expense", () => {
    const action = {
        type: "ADD_EXPENSE",
        expense: {
            id: "abc123",
            description: "apple",
            note: "",
            amount: 10,
            createAt: 0
        }
    };
    const state = expensesReducers( expenses, action);
    expect(state).toEqual([
        ...expenses, 
        action.expense
    ]);
});

test("should remove expense by id", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: expenses[1].id
    };
    const state = expensesReducers(expenses, action);
    expect(state).toEqual([ expenses[0], expenses[2]]);
});

test("should not remove expense if id not found", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: "-1"
    };
    const state = expensesReducers(expenses, action);
    expect(state).toEqual(expenses);
});



test("should edit expense", () => {
    const action = {
        type: "EDIT_EXPENSE",
        id: expenses[0].id,
        updates: {amount: 200}
    };
    const state = expensesReducers(expenses, action);
    expect(state[0].amount).toBe(200);
});

test("should not edit expense if expense not found", () => {
    const action = {
        type: "EDIT_EXPENSE",
        id: "-1",
        updates: {amount: 200}
    };
    const state = expensesReducers(expenses, action);
    expect(state).toEqual(expenses);
});