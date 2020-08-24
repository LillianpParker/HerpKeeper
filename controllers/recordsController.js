const express = require('express');
const app = express();
const StarterInfo = require('../models/basicInfo.js');
const Records = StarterInfo.BasicInfoModel

//Routes Begin
//Index
app.get('/herp-keeper', (req, res) => {
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

//New 
app.get('/new', (req, res)=>{
    res.render('User/New', {
        order: StarterInfo.Orders
    });
});

// Delete
app.delete('/herp-keeper/:id', (req, res) => {
    Records.findByIdAndRemove(req.params.id, (err, StarterInfo) => {
        res.redirect('/');
    });
});

// Update/Put
app.put('/herp-keeper/:id', (req, res) => {
    Records.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedModel) => {
        res.redirect('/');
    });
});

// Create
app.post('/herp-keeper', (req, res) => {
    req.body.proven = req.body.proven === 'on'
    Records.create(req.body, (error, createdRecord) => {
        console.log(error)
        res.redirect('/');
    });
});

// Edit 
app.get('/herp-keeper/:id/edit', (req, res) => {
    Records.findById(req.params.id, (err, foundStarterInfo) => {
        res.render('User/Edit', {
            StarterInfo: foundStarterInfo
        })
    });
});

// Show
app.get('/herp-keeper/:id', (req, res) => {
    Records.findById(req.params.id, (error, foundStarterInfo) => {
        res.render('User/Show', {
            StarterInfo: foundStarterInfo
        });
    });
});

module.exports = app;