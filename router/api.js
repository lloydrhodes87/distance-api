const router = require('express').Router();
const { getData } = require('../controllers/getData');

router.use('/destination', getData);

module.exports = router;
