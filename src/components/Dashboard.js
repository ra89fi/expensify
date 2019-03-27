import React from 'react';
import ExpensesList from './ExpensesList';
import ExpenseListFilters from './ExpensesListFilters';
import ExpensesSummary from './ExpensesSummary';

const Dashboard = () => (
  <div>
    <ExpensesSummary />
    <ExpenseListFilters />
    <ExpensesList />
  </div>
);

export default Dashboard;
