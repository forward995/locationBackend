let HoleNumber = require('../models/holeNumber')

const holeNumberAdd = (req, res) => {
    let holeNumber = new HoleNumber(req.body)
    holeNumber.save()
        .then((holeNumber) => {
            return res.status(200).json(holeNumber)
        })
        .catch(() => {
            return res.status(400).send('unable to save to database');
        });
}

const getholeNumber = (req, res) => {
    let phoneNumber = req.params.phoneNumber
    HoleNumber.findOne({phoneNumber: phoneNumber}, function(err, holeNumber) {
        if(err) {
            return res.json(err)
        } 
        return res.json(holeNumber)
    })
}

module.exports = {
    holeNumberAdd,
    getholeNumber
}