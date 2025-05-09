const express = require('express');
const router = express.Router();
const { listActivities } = require('../Controllers/activityController');

router.get('/', listActivities);

module.exports = router;