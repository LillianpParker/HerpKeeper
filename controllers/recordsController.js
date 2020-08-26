const express = require('express');
const app = express();
const StarterInfo = require('../models/basicInfo.js');
const Records = StarterInfo.BasicInfoModel
const drInfo = require('../models/basicInfo.js');
const VetInfo = drInfo.VetInfoModel
const snackInfo = require('../models/basicInfo.js')
const FeedingInfo = snackInfo.FeedingInfoModel

//Routes Begin
//Index
app.get('/', (req, res) => {
    Records.find({}, (error, allStarterInfo) => {
        res.render('User/Index', {
            StarterInfo: allStarterInfo
        })
    });
})

//Developer Window
app.get('/Site', (req, res) => {
    res.render('User/Site');
});

//Site Window
app.get('/Developer', (req, res) => {
    res.render('User/Developer');
});

//Resources
app.get('/Resources', (req, res) => {
    res.render('User/Resources');
});

//New 
app.get('/new', (req, res) => {
    res.render('User/New', {
        order: StarterInfo.Orders,
        sex: StarterInfo.Sex,
    });
});

// Delete
app.post('/:id/delete', (req, res) => {
    Records.findByIdAndRemove(req.params.id, (err, StarterInfo) => {
        res.redirect('/');
    });
});

// Update/Put
app.put('/:id', (req, res) => {
    Records.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedModel) => {
        res.redirect('/');
    });
});

//Vet Info Route
app.post('/:id/vetInfo', (req, res) => {
    req.body.healthy = req.body.healthy === 'on'
    req.body.bloodworkPerformed = req.body.bloodworkPerformed === 'on'
    req.body.animalId = req.params.id
    VetInfo.create(req.body, (error, createdVetInfo) => {
        console.log(error)
        res.redirect(`/${req.body.animalId}`);
    });
})

//Feeding Info Route
app.post('/:id/feedInfo', (req, res) => {
    req.body.animalId = req.params.id
    FeedingInfo.create(req.body, (error, createdFeedingInfo) => {
        console.log(error)
        res.redirect(`/${req.body.animalId}`);
    });
})

// Create
app.post('/', (req, res) => {
    req.body.proven = req.body.proven === 'on'
    Records.create(req.body, (error, createdRecord) => {
        console.log(error)
        res.redirect('/');
    });
});

// Edit 
app.get('/:id/edit', (req, res) => {
    Records.findById(req.params.id, (err, foundStarterInfo) => {
        res.render('User/Edit', {
            StarterInfo: foundStarterInfo
        })
    });
});

// Show
app.get('/:id', (req, res) => {
    Records.findById(req.params.id, (error, foundStarterInfo) => {
        VetInfo.find({ animalId: req.params.id }, (error, foundVetInfo) => {
            console.log(foundVetInfo)
            FeedingInfo.find({ animalId: req.params.id }, (error, foundFeedingInfo) => {
                console.log(foundFeedingInfo)
                res.render('User/Show', {
                    StarterInfo: foundStarterInfo,
                    VetInfo: foundVetInfo,
                    FeedingInfo: foundFeedingInfo
                });
            });
        });
    });
});

module.exports = app;