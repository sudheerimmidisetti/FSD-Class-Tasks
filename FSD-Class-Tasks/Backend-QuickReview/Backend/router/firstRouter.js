const express = require('express');
const testingController = require('../controllers/fristController.js');
const router = express.Router();

router.get('/get-data', testingController.TestingAPI);
router.post('/post-data', testingController.CheckingAPI);

module.exports = router