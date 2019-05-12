const apiCall = require('../models/apiCall');

const getData = (req, res, next) => {
  const { origin } = req.query;
  const { destination } = req.query;
  console.log('before');
  apiCall(origin, destination)
    .then(({ data }) => {
      res.send(data);
    })
    .catch(err => {
      next(err);
    });
};

module.exports = { getData };
