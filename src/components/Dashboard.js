import React from 'react';
import ExpensesList from './ExpensesList';
import ExpenseListFilters from './ExpensesListFilters';

const Dashboard = () => (
  <div>
    <ExpenseListFilters />
    <ExpensesList />
  </div>
);

export default Dashboard;
