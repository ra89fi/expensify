import React from 'react';
import { shallow } from 'enzyme';
import { Create } from '../../components/Create';
import expenses from '../fixtures/expenses';

let onSubmit, history, wrapper;

beforeEach(() => {
  onSubmit = jest.fn();
  history = {
    push: jest.fn()
  };
  wrapper = shallow(<Create onSubmit={onSubmit} history={history} />);
});

test('should render Create correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(onSubmit).toHaveBeenLastCalledWith(expenses[0]);
});
