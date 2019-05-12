const express = require('express');
const app = express();
require('dotenv').config();

const router = require('./router/api');

app.use('/api', router);

app.listen(process.env.port || 9090, () => {
  console.log('app listening');
});
