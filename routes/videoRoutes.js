const express = require('express');
const videoController = require('../controllers/videoController');

const videoRoutes = express.Router();

videoRoutes.get('/home', videoController.getHome);
videoRoutes.get('/44', videoController.get44)
module.exports = videoRoutes;
