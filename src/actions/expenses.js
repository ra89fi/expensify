import uuid from 'uuid';

// ADD_EXPENSE
export const addExpense = ({
  description = '',
  notes = '',
  amount = 0,
  createdAt = Date.now()
} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid.v1(),
    description,
    notes,
    amount,
    createdAt
  }
});

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
