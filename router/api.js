const router = require('express').Router();
const { getData } = require('../controllers/getData');

router.use('/destination', getData);

module.exports = router;

// https://maps.googleapis.com/maps/api/distancematrix/json?origins=Manchester,UK&destinations=London,UK&key=AIzaSyD4reoMLRkzR9Htv4PmIuzAV99pP-P2Lqs
