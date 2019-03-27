import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render ExpensesSummary correctly with 0 expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={0} expensesTotal={0} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary correctly with many expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={2} expensesTotal={1241352556} />);
  expect(wrapper).toMatchSnapshot();
});
