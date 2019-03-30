import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

export class Create extends React.Component {
  onSubmit = expense => {
    this.props.onSubmit(expense);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <p>Add Expense</p>
        <ExpenseForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: expense => dispatch(startAddExpense(expense))
});

export default connect(
  undefined,
  mapDispatchToProps
)(Create);
