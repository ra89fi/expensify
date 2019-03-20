import moment from 'moment';
import { setStartDate, setEndDate, setSortBy, setTextFilter } from '../../actions/filters';

test('should generate set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    date: moment(0)
  });
});

test('should generate set end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    date: moment(0)
  });
});

test('should generate sort by date action object', () => {
  const action = setSortBy();
  expect(action).toEqual({
    type: 'SET_SORT_BY',
    option: 'date'
  });
});

test('should generate sort by amount action object', () => {
  const action = setSortBy('amount');
  expect(action).toEqual({
    type: 'SET_SORT_BY',
    option: 'amount'
  });
});

test('should generate set text filter action object with given value', () => {
  const action = setTextFilter('abc');
  expect(action).toEqual({
    type: 'SET_FILTER_TEXT',
    text: 'abc'
  });
});

test('should generate set text filter action object with default value', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_FILTER_TEXT',
    text: ''
  });
});
