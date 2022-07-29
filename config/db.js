const config = require("config");
const db = config.get("mongoURI");
const mongoose = require("mongoose");
const mod =  require("module");

const connectDB = async () =>{
    try{
    await mongoose.connect(db);
    console.log("Mongo db connected");
    }
    catch(err){
        console.error(err.message);
        process.exit(1);
    }
};
module.exports  = connectDB; 