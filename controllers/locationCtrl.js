let Location = require('../models/location')

const locationAdd = (req, res) => {
    let phoneNumber = req.body.phoneNumber
    if(Location.findOne({phoneNumber: phoneNumber}) !== 'null')
    {
        return res.json('exist')
    } else {
    let location = new Location(req.body)
    location.save()
        .then((location) => {
            return res.status(200).json(location)
        })
        .catch(() => {
            return res.status(400).send('unable to save to database');
        });
    }
}

const getLocation = (req, res) => {
    let phoneNumber = req.params.phoneNumber
    Location.findOne({phoneNumber: phoneNumber}, function(err, location) {
        if(err) {
            return res.json(err)
        } 
        return res.json(location)
    })
}

const locationUpdate = (req, res) => {
    let phoneNumber = req.body.phoneNumber
    Location.findOne({phoneNumber: phoneNumber}, function(err, location) {
        if(!location) {
            return res.status(400).send('faild')
        } else {
            location.latitude = req.body.latitude
            location.longitude = req.body.longitude
            location.save().then((location) => {
                return res.json(location)
            })
            .catch(error => {
                return res.status(400).send(error)
            }) 
        }
    })
}

module.exports = {
    locationAdd,
    getLocation,
    locationUpdate
}