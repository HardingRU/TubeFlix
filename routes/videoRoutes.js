const express = require('express');
const videoController = require('../controllers/videoController');

const videoRoutes = express.Router();

videoRoutes.get('/home', videoController.getHome);
videoRoutes.get('/44', videoController.get44)
videoRoutes.get('/20', videoController.get20)
videoRoutes.get('/17', videoController.get17)
videoRoutes.get('/10', videoController.get10)
videoRoutes.get('/23', videoController.get23)
videoRoutes.get('/25', videoController.get25)

module.exports = videoRoutes;
