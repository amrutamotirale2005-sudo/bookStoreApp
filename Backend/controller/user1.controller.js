import User from "../model/user1.model.js";
import bcryptjs from "bcryptjs";

export const signup =async (req,res)=> { 
  try{
    const {fullname,email,password} = req.body;
    const user=await User.findOne({email});
    if(user){
      return res.status(400).json({message:"User already exists"});
    }
    const hashedPassword=await bcryptjs.hash(password,10);
    const createdUser=new User({
      fullname:fullname,
      email:email,
      password:hashedPassword,
    });
    await createdUser.save();
    res.status(201).json({message:"User created successfully",user:{
      _id:createdUser._id,
      fullname:createdUser.fullname,
      email:createdUser.email,
    }});
  } catch(error){
    if(error.response){
      console.log("Error:", error.message);
      res.status(500).json({ message: "Internal server error" });
  }
}
};
export const login = async (req,res)=> {
  try{
    const {email,password}=req.body;
    const user=await User.findOne({email});
    const isMatch = await bcryptjs.compare(password, user.password);
    if(!user || !isMatch){
      return res.status(400).json({message:"Invalid email or password"});
    }
    else {
      res.status(200).json({
        message:"Login successful",
        user:{
          _id:user._id,
          fullname:user.fullname,
          email:user.email,
        },
      }) 
    }
  }  
      catch(error){
        console.log("Login Error:", error.message);
        res.status(500).json({ message: "Internal server error" });
      }
    }
  


/*import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";*/

/* ================= SIGNUP ================= */
/*export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    // ✅ Validate input
    if (!fullname || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // ✅ Check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // ✅ Hash password
    const hashedPassword = await bcryptjs.hash(password, 10);

    // ✅ Create user
    const createdUser = new User({
      fullname,
      email,
      password: hashedPassword,
    });

    await createdUser.save();

    res.status(201).json({
      message: "User created successfully",
    });
  } catch (error) {
    console.error("Signup Error:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};*?

/* ================= LOGIN ================= */
/*export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // ✅ Validate input
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    // ✅ Check user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // ✅ Compare password
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // ✅ Success
    res.status(200).json({
      message: "Login successful",
      user: {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Login Error:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};*/