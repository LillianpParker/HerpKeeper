const express = require('express');
const app = express();
const StarterInfo = require('../models/basicInfo.js');
const Records = StarterInfo.BasicInfoModel

//Routes Begin
//Index
app.get('/', (req, res) => {
    Records.find({}, (error, allStarterInfo) => {
    console.log(error)
        res.render('User/Index', {
            StarterInfo: allStarterInfo
        })
    });
})

//New 
app.get('/new', (req, res)=>{
    res.render('User/New', {
        order: StarterInfo.Orders
    });
});

// Delete
app.delete('/:id', (req, res) => {
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
        res.render('User/Show', {
            StarterInfo: foundStarterInfo
        });
    });
});

module.exports = app;