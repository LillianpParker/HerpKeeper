require('dotenv').config()
//Starting Express:
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const mongoURI = process.env.MONGO_URI;
const Record = require('./models/basicInfo.js');
const methodOverride = require('method-override')
const PORT = process.env.PORT || 3000;

//Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(methodOverride('_method'));

//Mongoose Connect
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

//Controllers
const recordsController = require('./controllers/recordsController.js');
app.use('/', recordsController);

//Listener
app.listen(PORT, ()=>{
    console.log('listening');
});