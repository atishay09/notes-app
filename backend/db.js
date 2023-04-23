const mongoose = require('mongoose')
const mongoURI = "mongodb+srv://amitpayasi65:amitpayasi65@cluster0.lpcmffg.mongodb.net/?retryWrites=true&w=majority"

// ?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false

const connectToMongo = () =>{
    mongoose.connect(mongoURI,()=>{
        console.log("connected to mongo")
    })
}

module.exports = connectToMongo