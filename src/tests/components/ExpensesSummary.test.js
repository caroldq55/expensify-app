import {ExpensesSummary} from "../../components/ExpensesSummary";
import expenses from "../fixtures/expenses";
import React from "react";
import { shallow } from "enzyme";

test("should correctly render ExpensesSummary with 1 expense", () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={"$235.12"}/>);
    expect(wrapper).toMatchSnapshot();
});

test("should correctly render ExpensesSummary with multiple expense", () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={23} expensesTotal={"$23,523,013.23"}/>);
    expect(wrapper).toMatchSnapshot();
});