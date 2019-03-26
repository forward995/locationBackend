const express = require('express')

const holeNumberCtrl = require('../controllers/holeNumberCtrl')

const router = express.Router()

router.route('/api/holeNumberAdd')
    .post(holeNumberCtrl.holeNumberAdd)

router.route('/api/holeNumber/:phoneNumber')
    .get(holeNumberCtrl.getholeNumber)

module.exports = router