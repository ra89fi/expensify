import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { addExpense, startAddExpense, removeExpense, editExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);
let originalTimeout;

beforeEach(function() {
  originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
});

afterEach(function() {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
});

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('should setup edit expense action object', () => {
  const action = editExpense('123abc', { note: 'new note' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      note: 'new note'
    }
  });
});

test('should setup add expense action object with given values', () => {
  const action = addExpense(expenses[0]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[0]
  });
});

test('should add expense to database and store', done => {
  const store = createMockStore({});
  const expenseData = {
    description: 'Rent',
    amount: 3000,
    notes: 'Too much!',
    createdAt: 100000
  };
  store
    .dispatch(startAddExpense(expenseData))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseData
        }
      });
      return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
});

test('should add expense with default values to database and store', done => {
  const store = createMockStore({});
  const expenseData = {
    description: '',
    amount: 0,
    notes: '',
    createdAt: expect.any(Number)
  };
  store
    .dispatch(startAddExpense())
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseData
        }
      });
      return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
});
