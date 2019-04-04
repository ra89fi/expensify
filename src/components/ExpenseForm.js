import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import CurrencyDropdown from './CurrencyDropdown';

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : '',
      notes: props.expense ? props.expense.notes : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      currency: props.expense ? props.expense.currency : 'USD',
      focused: null,
      error: ''
    };
  }
  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({
      description
    }));
  };
  onNotesChange = e => {
    const notes = e.target.value;
    this.setState(() => ({
      notes
    }));
  };
  onCurrencyChange = e => {
    const currency = e.target.value;
    this.setState(() => ({
      currency
    }));
  };
  onAmountChange = e => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({
        amount
      }));
    }
  };
  onDateChange = createdAt => {
    if (!createdAt) return;
    this.setState(() => ({
      createdAt
    }));
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({
      focused
    }));
  };
  onSubmit = e => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({
        error: '* Please provide description and amount !'
      }));
    } else {
      this.setState(() => ({
        error: ''
      }));
      this.props.onSubmit({
        description: this.state.description,
        notes: this.state.notes,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        currency: this.state.currency
      });
    }
  };
  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input
          type="text"
          placeholder="Description"
          className="text-input"
          autoFocus
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />
        <div className="form__money">
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.focused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <input
            type="text"
            className="text-input"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <CurrencyDropdown
            cName="select-input"
            currency={this.state.currency}
            onCurrencyChange={this.onCurrencyChange}
          />
        </div>
        <textarea
          className="textarea-input"
          cols="20"
          rows="5"
          placeholder="Add a note for your expense (optional)"
          value={this.state.notes}
          onChange={this.onNotesChange}
        />
        <div>
          <button className="button">Save Expense</button>
        </div>
      </form>
    );
  }
}
