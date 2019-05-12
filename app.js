const express = require('express');
const app = express();
require('dotenv').config();

app.listen(process.env.port || 9090, () => {
  console.log('app listening');
});
