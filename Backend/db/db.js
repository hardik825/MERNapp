const mongoose = require("mongoose");

// const mongoUrl="mongodb+srv://admin:admin@cluster0.lx1s5.mongodb.net/test";

const mongoUrl = "mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";
const coonectToMongo=()=>{
    mongoose.connect(mongoUrl,()=>{
        console.log("connected to Mongo Successfully...")
    })
}

module.exports=coonectToMongo;