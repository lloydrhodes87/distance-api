const apiCall = require('../models/apiCall');

const getData = (req, res, next) => {
  const { origin, destination, mode } = req.query;
  apiCall(origin, destination, mode)
    .then(({ data }) => {
      res.send(data);
    })
    .catch(err => {
      next(err);
    });
};

module.exports = { getData };
