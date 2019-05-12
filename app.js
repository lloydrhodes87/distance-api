const express = require('express');
const app = express();
require('dotenv').config();

const router = require('./router/api');

app.use('/api', router);

//error handler
app.use((err, req, res, next) => {
  res.send({ error: err });
});

app.listen(process.env.port || 9090, () => {
  console.log('app listening');
});
