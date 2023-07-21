const mongoose = require("mongoose");
const validator = require("validator");


const studentschema = new mongoose.Schema({

    Fullname:{

        type: String,
        require: true 

      },
    email:{
        type:String,
        require:true,
        unique:[true,"email id alredy use"],
        velidate(velue){
            if(!validator.isEmail(velue)){
                    throw new Error("email id wrong");
            }
        }
    },
    phoneNumber:{
        type:Number,
        require: true,
        unique:[true,"Mobail number alredy use"],
        velidate(velue){
            if(velue<10 || velue > 10){
                    throw new Error("invelid number");
            }
        }
    },
    Address:{
        type:String,
        
    },
});

const Student= new mongoose.model("Student",studentschema);

module.exports =Student;