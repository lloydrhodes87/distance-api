const apiCall = require('../models/apiCall');

const getData = (req, res, next) => {
  const { origins, destinations, mode = 'driving' } = req.query;
  apiCall(origins, destinations, mode)
    .then(({ data }) => {
      res.send(data);
    })
    .catch(err => {
      next(err);
    });
};

module.exports = { getData };
