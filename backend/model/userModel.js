import express from "express";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  profile:{
    type: String,
  },
  profileCover:{
    type: String,
  },
});

export default mongoose.model("User", userSchema);