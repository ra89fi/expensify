import React from 'react';
import { connect } from 'react-redux';
import ExpensesListItem from './ExpensesListItem';
import selectExpenses from '../selectors/expenses';

const ExpensesList = props => (
  <div>
    <h3>Expense List</h3>
    {props.expenses.map(expense => (
      <ExpensesListItem key={expense.id} {...expense} />
    ))}
  </div>
);

const ConnectedExpensesList = connect(state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
})(ExpensesList);

export default ConnectedExpensesList;
