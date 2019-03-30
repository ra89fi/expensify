import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export class Edit extends React.Component {
  onSubmit = expense => {
    this.props.onSubmit(this.props.expense.id, expense);
    this.props.history.push('/');
  };
  onBtnClick = () => {
    this.props.onBtnClick({ id: this.props.expense.id });
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
        <button onClick={this.onBtnClick}>Remove</button>
      </div>
    );
  }
}

export default connect(
  (state, props) => {
    return {
      expense: state.expenses.find(expense => expense.id == props.match.params.id)
    };
  },
  (dispatch, props) => {
    return {
      onSubmit: (id, expense) => dispatch(startEditExpense(id, expense)),
      onBtnClick: data => dispatch(startRemoveExpense(data))
    };
  }
)(Edit);
