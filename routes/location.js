const express = require('express')

const locationCtrl = require('../controllers/locationCtrl')

const router = express.Router()

router.route('/api/locationAdd')
    .post(locationCtrl.locationAdd)

router.route('/api/locationUpdate')
    .post(locationCtrl.locationUpdate)

router.route('/api/locations/:phoneNumber')
    .get(locationCtrl.getLocation)

module.exports = router