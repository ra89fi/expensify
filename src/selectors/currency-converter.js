import database from '../firebase/firebase';

let data;

const fetchData = () => {
  fetch(
    'http://www.apilayer.net/api/live?access_key=' + process.env.CURRENCYLAYER_API_KEY + '&format=1'
  )
    .then(p => p.json())
    .then(d => {
      data = d;
      database
        .ref('currency')
        .set(d)
        .catch(err => {});
    })
    .catch(err => console.log(err.message));
};

database
  .ref('currency')
  .once('value')
  .then(snapshot => {
    data = snapshot.val();
    if (!data) {
      console.log('no currency data');
      fetchData();
      return;
    }

    const now = Date.now();
    if (now - data.timestamp * 1000 > 60 * 60 * 1000) {
      console.log('old currency data');
      fetchData();
    }
  })
  .catch(err => console.log(err.message));

export default (amount, fc, tc) => {
  if (!data) {
    return (amount / 100) * data.quotes[key2] * 100;
  }
  if (fc == tc) return amount;
  const key1 = 'USD' + fc;
  const key2 = 'USD' + tc;
  if (fc == 'USD') return (amount / 100) * data.quotes[key2] * 100;
  return (amount / 100) * (data.quotes[key2] / data.quotes[key1]) * 100;
};
