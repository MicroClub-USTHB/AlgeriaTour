import User from "../models/user.js";
import { compare } from "bcrypt";
import jwt from "jsonwebtoken";
import { hash } from "bcrypt";
export async function register(req, res) {
  try {
    const { lastName, firstName, email ,password} = req.body;

    if (!lastName || !firstName|| !email || !password) {
      return res.status(400).json({
        message: "data missing",
      });
    }
    const user = await User.findOne({email:email})
    if(user) return res.status(400).json({message:"there is already a user with that email"})
    const hashedPassword = await hash(password, 10);
   const createdUser= await User.create({
        lastName:lastName,
        firstName: firstName,
      email: email,
      password: hashedPassword 
    });
    createdUser.password = undefined;
    return res.status(201).json({message: "user created" ,data:createdUser});
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: "Error creating user" });
  }
}

export async function login(req, res) {
    try {
      const { email ,password} = req.body;
  
      if (!email || !password) {
        return res.status(400).json({
          message: "missing data",
        });
      }
      const user = await User.findOne({email:email})
      if(!user) return res.status(404).json({message:"no user found"})
      const isMatched = await compare(password, user.password);
      if (!isMatched) return res.status(400).json({ status: 400, message: "wrong password" });
      const accessToken = jwt.sign(
        {
          id: user._id,
          email: user.email,
          role: user.role,
        },
        process.env.JWT_SECRET,
        { expiresIn: "10d" }
      );
      user.password = undefined;
      return res.status(200).json({
        user:user,
        token:accessToken
      });
    } catch (error) {
      console.error(error)
      return res.status(500).json({ error: "Error loging the user" });
    }
  }

