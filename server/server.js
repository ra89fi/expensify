const path = require('path');
const express = require('express');

const port = process.env.PORT || 5000;
const publicPath = path.join(__dirname, '..', 'public');
const app = express();

app.use(express.static(publicPath));
app.use('*', (req, res) => res.sendFile(path.join(publicPath, 'index.html')));

app.listen(port, () => {
  console.log('server is running at 5000');
});
