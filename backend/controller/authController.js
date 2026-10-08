import bcrypt from "bcrypt"
import User from "../model/userModel"

/*
کله چی یو یوزر اکاونټ جوړوی دهفه برخه
اول د ایمیل چیکینګ ترسره کوو
*/
const signup=async(req,res)=>{

  try {
    const {email , password, username,fullname}=req.body;

    if(!validator.isEmail(email)){
      return res.status(400).json({error:"invalid email"})
    }

/*
که چیری یو یوزر مخکی له مخکی موجود وو او په دی نوم یی اکاونټ جوړ کړی وو نو داسی دی وسی 
*/
    const existingEmail=await User.findOne({email})
    if(existingEmail){
      res.status(400).json({error:"email is already in use"})
    }
    
    /*
دوهم دفاسورډ برخه ترسره کوو او والیډیشن یی ترسره کوو 
    */
    if(!validator.isStrongPassword(password)){
      return res.status(400).json({error:"password is to weak"})
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword=await bcrypt.hash(password,salt)

    const newUser= new User({
      username,
      password,
      fullname,
      password:hashedPassword
      
    })

    if(newUser){
      await newUser.save()
      res.send(201).json({
        id:newUser._id,
        username:newUser.username,
        email:newUser.email,
        follower:newUser.follower,
        follwing:newUser.follwing,
        propileImage:newUser.propileImage,
        coverImage:newUser.coverImage
      })
    }
  } catch (error) {
    res.status(400).json({error:"some error occured "})
  }
}