const defaultSettings = {
  currency: 'USD'
};

export default (state = defaultSettings, action) => {
  switch (action.type) {
    case 'SET_CURRENCY':
      return {
        ...state,
        currency: action.currency
      };
    default:
      return state;
  }
};
