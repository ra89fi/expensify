import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, setSortBy, setStartDate, setEndDate } from '../actions/filters';

export class ExpenseListFilters extends React.Component {
  state = {
    focused: null
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };
  onFocusChange = focused => {
    this.setState(() => ({
      focused
    }));
  };
  onTextChange = e => {
    this.props.setTextFilter(e.target.value);
  };
  onSelectChange = e => {
    this.props.setSortBy(e.target.value);
  };
  render() {
    return (
      <div>
        <input type="text" value={this.props.filters.text} onChange={this.onTextChange} />
        <select
          name="filters"
          id="filters"
          value={this.props.filters.sortBy}
          onChange={this.onSelectChange}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.focused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
        />
      </div>
    );
  }
}

export default connect(
  state => ({
    filters: state.filters
  }),
  dispatch => ({
    setTextFilter: text => dispatch(setTextFilter(text)),
    setSortBy: option => dispatch(setSortBy(option)),
    setStartDate: date => dispatch(setStartDate(date)),
    setEndDate: date => dispatch(setEndDate(date))
  })
)(ExpenseListFilters);
