import USER from "../models/userModel.js";

//sign up

export const signUp = async(req,res)=>{
  const {email,password,firstName,lastName,cPassword}= req.body;
  if(!email || !password || !firstName || !lastName || !cPassword){
    res.status(400).json({success:false,errMsg:"all fields are required for registration"});
    return;
  }
  if(password !== cPassword){
    res.status(400).json({success:false,errMsg:"password do not match"});
    return;
    
  }
  if(password.length < 8){
    res.status(400).json({success:false,errMsg:"min password length must be 8 chrs"});
    return;
    
  }
  
  try {
    const existingEmail = await USER.findOne({email});
    if(existingEmail){
      res.status(400).json({success:false,errMsg:"Email already exists"});
      return;
    }

    const user = await USER.create({...req.body});
    res.status(201).json({success:true,message:"registration successful",user});
      } catch (error) {
    res.status(500).send(error.message)
  }
}