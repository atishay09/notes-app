const mongoose = require('mongoose')
const mongoURI = "mongodb+srv://amitpayasi:amitpayasi@cluster0.6ghmohh.mongodb.net/test"

// ?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false

const connectToMongo = () =>{
    mongoose.connect(mongoURI,()=>{
        console.log("connected to mongo")
    })
}

module.exports = connectToMongo