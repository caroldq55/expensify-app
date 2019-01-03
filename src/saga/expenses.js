import {store} from "../app";
import database from "../firebase/firebase";
import {addExpense, editExpense, removeExpense, setExpenses} from "../actions/expenses";

export function* startAddExpenseHandler(action) {
    const uid = store.getState().auth.uid;
    const {
        description = "",
        note = "",
        amount = 0,
        createAt = 0
    } = action.expenseData;
    const expense = {description, note, amount, createAt};

    try {
        const ref = yield database.ref(`users/${uid}/expenses`).push(expense);
        yield put(addExpense({
            id: ref.key,
            ...expense
        }));
    } catch (e) {
    }
}

export function* startRemoveExpenseHandler(action) {
    const id = action.id;
    const uid = store.getState().auth.uid;
    yield database.ref(`users/${uid}/expenses/${id}`).remove();
    yield put(removeExpense(id));
}

export function* startEditExpenseHandler(action) {
    const {id, updates} = action;
    const uid = store.getState().auth.uid;
    yield database.ref(`users/${uid}/expenses/${id}`).update(updates);
    yield put(editExpense(id, updates));
}

export function* startSetExpenseHandler() {
    const uid = store.getState().auth.uid;
    const snapshot = yield database.ref(`users/${uid}/expenses`).once("value");
    const expenses = [];
    snapshot.forEach((childSnapshot) => {
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        });
    });
    yield put(setExpenses(expenses));
}