const mongo = require("mongoose");
const UserSchema = new mongo.Schema({

    name:{
        type:String,
        required:true
    },
    email:
    {
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    avatar:{
        type:String
    },
    date:{
        type:Date,
        dafault:Date.now
    }
})

module.exports = User = mongo.model("user",UserSchema);