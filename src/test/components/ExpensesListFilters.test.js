import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { ExpenseListFilters } from '../../components/ExpensesListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, setSortBy, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  setSortBy = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      setSortBy={setSortBy}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

test('should render ExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt filters correctly', () => {
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
  wrapper.find('input').simulate('change', {
    target: {
      value: 'rent'
    }
  });
  expect(setTextFilter).toHaveBeenLastCalledWith('rent');
});

test('should handle sort by date', () => {
  wrapper.setProps({
    filters: altFilters
  });
  wrapper.find('select').simulate('change', {
    target: {
      value: 'date'
    }
  });
  expect(setSortBy).toHaveBeenLastCalledWith('date');
});

test('should handle sort by amount', () => {
  wrapper.find('select').simulate('change', {
    target: {
      value: 'amount'
    }
  });
  expect(setSortBy).toHaveBeenLastCalledWith('amount');
});

test('should handle date changes', () => {
  const startDate = moment(0).add(4, 'years');
  const endDate = moment(0).add(8, 'years');
  wrapper.find('DateRangePicker').prop('onDatesChange')({
    startDate,
    endDate
  });
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle date focus change', () => {
  const focused = 'endDate';
  wrapper.find('DateRangePicker').prop('onFocusChange')(focused);
  expect(wrapper.state('focused')).toBe(focused);
});
