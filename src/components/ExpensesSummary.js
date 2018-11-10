import React from "react";
import { connect } from "react-redux";
import selectExpenses from "../selectors/expenses";
import selectExpensesTotal from "../selectors/expenses-total";
import numeral from "numeral";

export const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
    const expenseWord = expensesCount === 1 ? "expense" : "expenses";
    return (
        <div>
            <h1>
                Viewing {expensesCount} {expenseWord} totalling {expensesTotal}
            </h1>
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expensesCount: visibleExpenses.length,
        expensesTotal: numeral(selectExpensesTotal(visibleExpenses)).format("$0,0.00")
    };
};

export default connect(mapStateToProps)(ExpensesSummary);