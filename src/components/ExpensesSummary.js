import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  return (
    <div className="page-header">
      <div className="content-container">
        <h2 className="page-header__title">
          Viewing <span>{expenseCount}</span> {expenseCount > 1 ? 'expenses' : 'expense'} totalling{' '}
          <span>{numeral(expensesTotal / 100).format('$0,0.00')}</span>
        </h2>
        <div className="page-header__actions">
          <Link className="button" to="/create">
            Add Expense
          </Link>
        </div>
      </div>
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
