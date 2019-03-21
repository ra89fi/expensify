import React from 'react';
import { shallow } from 'enzyme';
import ExpensesListItem from '../../components/ExpensesListItem';
import expenses from '../fixtures/expenses';

test('should render ExpensesListItem with expense', () => {
  const wrapper = shallow(<ExpensesListItem {...expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});
