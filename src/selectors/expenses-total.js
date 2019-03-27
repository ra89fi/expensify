export default expenses => {
  return expenses.reduce((acc, el) => acc + el.amount, 0);
};
