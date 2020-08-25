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
    markings: {type: String, required: true},
    proven: {type: Boolean, required: true},
    origin: {type: String, required: true}
});
const BasicInfo = mongoose.model('BasicInfo', basicInfoSchema);

const vetInfoSchema = new mongoose.Schema ({
    animalId: {type: mongoose.Schema.Types.ObjectId, required: true},
    recentVisit: {type: String, required: false},
    bloodworkPerformed: {type: Boolean, required: false},
    bloodworkShowed: {type: String, required: false},
    illness: {type: String, required: false},
    dateDiagnosed: {type: String, required: false},
    perscription: {type: String, required: false},  
    illnessStatus: {type: Boolean, required: false},
});
const vetInfo = mongoose.model('VetInfo', vetInfoSchema)

const feedingSchema = new mongoose.Schema({
    animalId: {type: mongoose.Schema.Types.ObjectId, required: true},
    feedingDate: {type: String, required: false},
    feedingItem: {type: String, required: false},
    feedingAmount: {type: String}
})

const feedingInfo = mongoose.model('FeedingInfo', feedingSchema)

const Information = { 
    Orders: Orders, 
    Sex: Sex,
    BasicInfoModel: BasicInfo,
    VetInfoModel: vetInfo,
    FeedingInfoModel: feedingInfo
} 

module.exports = Information;