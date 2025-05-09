const express = require('express');
const router = express.Router();
const { bookActivity, getMyBookings } = require('../Controllers/bookingController');
const verifyToken = require('../middleware/auth');

router.post('/', verifyToken, bookActivity);
router.get('/', verifyToken, getMyBookings);

module.exports = router;