import database from '../firebase/firebase';

// ADD_EXPENSE
export const addExpense = expense => ({
  type: 'ADD_EXPENSE',
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return dispatch => {
    const { description = '', notes = '', amount = 0, createdAt = Date.now() } = expenseData;
    const expense = { description, notes, amount, createdAt };
    return database
      .ref('expenses')
      .push(expense)
      .then(ref => {
        dispatch(
          addExpense({
            id: ref.key,
            ...expense
          })
        );
      })
      .catch(err => console.log(err.message));
  };
};

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});
