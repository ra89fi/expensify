import React from 'react';
import { connect } from 'react-redux';
import ExpensesListItem from './ExpensesListItem';
import selectExpenses from '../selectors/expenses';

export const ExpensesList = props => (
  <div className="content-container">
    <div className="list-header">
      <div className="visible-mobile">Expenses</div>
      <div className="visible-desktop">Expense</div>
      <div className="visible-desktop">Amount</div>
    </div>
    <div className="list-body">
      {props.expenses.length === 0 ? (
        <div className="list-item list-item__message">
          <span>No expenses</span>
        </div>
      ) : (
        props.expenses.map(expense => <ExpensesListItem key={expense.id} {...expense} />)
      )}
    </div>
  </div>
);

const ConnectedExpensesList = connect(state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
})(ExpensesList);

export default ConnectedExpensesList;
