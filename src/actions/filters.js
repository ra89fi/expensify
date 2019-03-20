// SET_FILTER_TEXT
export const setTextFilter = (text = '') => ({
  type: 'SET_FILTER_TEXT',
  text
});

// SET_SORT_BY
export const setSortBy = (option = 'date') => ({
  type: 'SET_SORT_BY',
  option
});

// SET_START_DATE
export const setStartDate = date => ({
  type: 'SET_START_DATE',
  date
});

// SET_END_DATE
export const setEndDate = date => ({
  type: 'SET_END_DATE',
  date
});
