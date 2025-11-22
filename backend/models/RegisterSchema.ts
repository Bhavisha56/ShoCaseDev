import mongoose, { Schema } from "mongoose";

const Registerschema=new Schema({
    username:{
        type:String,
        required:true,
        minlength:3
    },
     email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please enter a valid email",
      ],
    },
    password: { 
        type: String,
        required: true,
        minlength: 6,
    },
    role:{
        type:String,
        required:true,  
        enum:["student","professional","Hobbyist"]
    },
    gender:{
        type:String,
        required:true,
        enum:["male","female"],
    }
}, { timestamps: true });

const RegisterModel = mongoose.model("Register", Registerschema);
export default RegisterModel;