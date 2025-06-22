// import userModel from "../models/userModel.js";
// import validator from 'validator'
// import bcrypt from 'bcrypt'
// import jwt from 'jsonwebtoken'
// const createToken=(id)=>{
//    return jwt.sign({id},process.env.JWT_SECRET)
// }
// const loginUser=async(req,res)=>{
//     try{
//        const {email,password}=req.body;
//        const user=await userModel.findOne({email});
//        if(!user){
//         return res.json({ success: false, message: "User Doesn't registered" });
//        }
//        const isMatch=await bcrypt.compare(password,user.password);
//        if(isMatch){
//         const token=createToken(user._id);
//         res.json({success:true,token:token})
//        }
//        else{
//         return res.json({ success: false, message: "Enter a correct password" });
//        }
//     }catch(err){
//         res.json({success:false,message:err.message})
//     }
    

// }


// const registerUser = async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

    
//     const userExists = await userModel.findOne({ email });
//     if (userExists) {
//       return res.json({ success: false, message: "User already registered" });
//     }

  
//     if (!validator.isEmail(email)) {
//       return res.json({ success: false, message: "Enter a valid email" });
//     }

    
//     if (password.length < 5) {
//       return res.json({ success: false, message: "Password must be at least 8 characters" });
//     }

//     // ✅ Hash password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

    
//     const newUser = new userModel({
//       name,
//       email,
//       password: hashedPassword
//     });
//     const user = await newUser.save();

//     // ✅ Generate JWT token
//     const token = createToken(user._id);

//     res.json({ success: true, token });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ success: false, message: err.message });
//   }
// };


// //ADMIN LOGIN

// const adminLogin= async (req,res)=>{
//     try{
//       const {email,password}=req.body
//       if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
//         const token = jwt.sign(email+password,process.env.JWT_SECRET)
//         res.json({success:true,token:token})
        
//       }else{
//         res.json({success:true,message:"INVALID CREDENTIALS"})
//       }
//     }catch(err){
//         res.json({success:true,message:err.message})
//     }
    
    

// }

// export {loginUser,registerUser,adminLogin}



import userModel from "../models/userModel.js";
import validator from 'validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const createToken=(id)=>{
   return jwt.sign({id},process.env.JWT_SECRET)
}

const loginUser=async(req,res)=>{
    try{
       const {email,password}=req.body;
       const user=await userModel.findOne({email});
       if(!user){
        return res.json({ success: false, message: "User Doesn't registered" });
       }
       const isMatch=await bcrypt.compare(password,user.password);
       if(isMatch){
        const token=createToken(user._id);
        // ✅ Include user data in response
        res.json({
          success:true,
          token:token,
          user: {
            id: user._id,
            name: user.name,
            email: user.email
          }
        })
       }
       else{
        return res.json({ success: false, message: "Enter a correct password" });
       }
    }catch(err){
        res.json({success:false,message:err.message})
    }
}

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
        
    const userExists = await userModel.findOne({ email });
    if (userExists) {
      return res.json({ success: false, message: "User already registered" });
    }
        
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Enter a valid email" });
    }
        
    if (password.length < 5) {
      return res.json({ success: false, message: "Password must be at least 8 characters" });
    }

    // ✅ Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
        
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword
    });
    const user = await newUser.save();

    // ✅ Generate JWT token
    const token = createToken(user._id);

    // ✅ Include user data in response
    res.json({ 
      success: true, 
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: err.message });
  }
};

//ADMIN LOGIN 
const adminLogin= async (req,res)=>{
    try{
      const {email,password}=req.body
      if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
        const token = jwt.sign(email+password,process.env.JWT_SECRET)
        res.json({success:true,token:token})
               
       }else{
        res.json({success:true,message:"INVALID CREDENTIALS"})
      }
    }catch(err){
        res.json({success:true,message:err.message})
    }
           
}

export {loginUser,registerUser,adminLogin}