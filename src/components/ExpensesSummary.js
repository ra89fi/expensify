import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  return (
    <div>
      <h4>
        Viewing {expenseCount} expense(s) totalling {numeral(expensesTotal / 100).format('$0,0.00')}
      </h4>
      <hr />
    </div>
  );
};

export default connect(state => {
  const filteredExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expenseCount: filteredExpenses.length,
    expensesTotal: selectExpensesTotal(filteredExpenses)
  };
})(ExpensesSummary);
