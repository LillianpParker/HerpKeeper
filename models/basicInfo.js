const mongoose = require('mongoose');

const Orders = ["Anura (Frogs and Toads)", "Caudata (Salamanders)", "Gymnophiona (Caecilians)", "Crocodylia (Crocodilians)", "Rhynchocephalia (Tuataras)", "Squamata (Lizards and Snakes)", "Testudines (Turtles)"]

const Sex = ["Male", "Female", "Unknown"]

const basicInfoSchema = new mongoose.Schema({
    order: { type: String, values: Orders, required: true},
    img:  { type: String, required: true },
    name:  { type: String, required: true },
    species:  { type: String, required: true },
    sex: {type: String, values: Sex, required: true},
    color:  { type: String, required: true },
    proven: {type: Boolean, required: true}
});

const BasicInfo = mongoose.model('BasicInfo', basicInfoSchema);

const Information = { 
    Orders: Orders, 
    Sex: Sex,
    BasicInfoModel: BasicInfo
} 

module.exports = Information;