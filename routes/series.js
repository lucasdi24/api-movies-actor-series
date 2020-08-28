const express = require('express')
const router = express.Router();
const seriesController = require('../controllers/seriesController')




router.get('/', seriesController.all);
router.get('/detail/:id', seriesController.detail);
router.post('/create', seriesController.create);

module.exports = router;