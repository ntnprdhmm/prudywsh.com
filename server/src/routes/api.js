const express = require('express');

const router = express.Router();

const handleHealthCheck = (_, res) => (
  res.send('I\'m alive ! :)')
);
router.get('/health-check', handleHealthCheck);

// default route
router.use('*', (req, res) => res.sendStatus(404));

module.exports = router;
