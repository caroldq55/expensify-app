import { put, takeLatest } from 'redux-saga/effects';
import { store } from '../app';
import {startLoginHandler, startLogoutHandler} from "./auth";
import {
    startAddExpenseHandler,
    startEditExpenseHandler,
    startRemoveExpenseHandler,
    startSetExpenseHandler
} from "./expenses";

export default function* appSaga() {
	yield takeLatest("START_LOGIN", startLoginHandler);
	yield takeLatest("START_LOGOUT", startLogoutHandler);
	yield takeLatest("START_ADD_EXPENSE", startAddExpenseHandler);
	yield takeLatest("START_EDIT_EXPENSE", startEditExpenseHandler);
	yield takeLatest("START_REMOVE_EXPENSE", startRemoveExpenseHandler);
	yield takeLatest("START_SET_EXPENSE", startSetExpenseHandler);
}
