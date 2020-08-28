const express = require('express')
const router = express.Router();
const moviesController = require('../controllers/moviesController')




router.get('/', moviesController.all);
router.get('/detail/:id', moviesController.detail);
router.post('/create', moviesController.create);

module.exports = router;