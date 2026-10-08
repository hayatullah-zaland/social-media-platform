import express from "express";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trime:true
  },
  fullname:{
    type:String,
    trime:true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trime:true
  },
  password: {
    type: String,
    trime:true
  },
  follower:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
  }],
  follwing:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
  }],
  profileImage:{
    type: String,
  },
  coverImage:{
    type: String,
  },
  bio:{
    type:String,
    default:""
  }
},{timestamps:true});

export default mongoose.model("User", userSchema);