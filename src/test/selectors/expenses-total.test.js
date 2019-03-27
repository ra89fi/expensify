import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expense', () => {
  const result = selectExpensesTotal([]);
  expect(result).toBe(0);
});

test('should correctly add up single expense', () => {
  const result = selectExpensesTotal([expenses[0]]);
  expect(result).toBe(expenses[0].amount);
});

test('should correctly add up all expenses', () => {
  const result = selectExpensesTotal(expenses);
  const exp = expenses.reduce((acc, el) => acc + el.amount, 0);
  expect(result).toBe(exp);
});
