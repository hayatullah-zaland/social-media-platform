import User from "../model/userModel.js"

export const getUser=(req,res)=>{
  res.json("Hello")
}

export const postUser=async (req,res)=>{
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

