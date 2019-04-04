import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import convertExpense from '../selectors/currency-converter';

export const ExpensesSummary = ({ filteredExpenses, currency }) => {
  const expenseCount = filteredExpenses.length;
  const expensesTotal = selectExpensesTotal(
    filteredExpenses.map(fe => {
      return Object.assign({}, fe, {
        amount: convertExpense(fe.amount, fe.currency, currency)
      });
    })
  );
  return (
    <div className="page-header">
      <div className="content-container">
        <h2 className="page-header__title">
          Viewing <span>{expenseCount}</span> {expenseCount > 1 ? 'expenses' : 'expense'} totalling{' '}
          <span>{currency + ' ' + numeral(expensesTotal / 100).format('0,0.00')}</span>
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
    filteredExpenses,
    currency: state.settings.currency
  };
})(ExpensesSummary);
