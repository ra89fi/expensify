import React from 'react';
import { shallow } from 'enzyme';
import { Edit } from '../../components/Edit';
import expenses from '../fixtures/expenses';

let history, wrapper, onSubmit, onBtnClick;

beforeEach(() => {
  history = {
    push: jest.fn()
  };
  onSubmit = jest.fn();
  onBtnClick = jest.fn();
  wrapper = shallow(
    <Edit expense={expenses[0]} onSubmit={onSubmit} onBtnClick={onBtnClick} history={history} />
  );
});

test('should render Edit correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle edit expense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(onSubmit).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
});

test('should handle remove expense', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(onBtnClick).toHaveBeenLastCalledWith({ id: expenses[0].id });
});
