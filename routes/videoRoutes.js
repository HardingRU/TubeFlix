const express = require('express');
const videoController = require('../controllers/videoController');

const videoRoutes = express.Router();

videoRoutes.get('/home', videoController.getHome);

module.exports = videoRoutes;
