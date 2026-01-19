import User from "../models/user.model.js";
import bcrypt from "bcryptjs"
import genToken from "../utils/token.js";
import { use } from "react";

// SignUp
export const signUp = async (req, res) => {
  try {
    const { fullName, email, password, mobile, role } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User all ready exist." })
    }
    if (password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 character." })
    }
    if (mobile.length < 10) {
      return res.status(400).json({ message: "Mobile number at least 10 digits." })
    }

    const hashpassword = await bcrypt.hash(password, 10)
    user = await User.create({
      fullName, email, role, mobile, password: hashpassword
    })
    // Token import
    const token = await genToken(user._id);
    // cookie
    res.cookie("token", token, {
      secure: false,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true
    })
    return res.status(201).json(user)
  }
  catch (error) {
    return res.status(500).json(`sign up error ${error}`)
  }
}


// Signin
export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User doesn't exist." })
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      return res.status(400).json({ message: "Passwod is wrong." })
    }

    // Token import
    const token = await genToken(user._id);
    // cookie
    res.cookie("token", token, {
      secure: false,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true
    })
    return res.status(200).json(user)
  }
  catch (error) {
    return res.status(500).json(`sign in error ${error}`)
  }
}

