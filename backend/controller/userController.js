import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";

//login

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      res.json({ success: false, message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      res.json({ success: false, message: "invalid credentials" });
    }

    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

//create token

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

//register user

export const registerUser = async (req, res) => {
  const { name, password, email } = req.body;
  try {
    const userExists = await userModel.findOne({ email });
    if (userExists) {
      return res.json({ success: false, message: "User already exists" });
    }

    //validating email and password

    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid image",
      });
    }

    if (password.length < 8) {
      return res.json({
        success: true,
        message: "please enter a strong password",
      });
    }

    //hashing password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
    });

    const user = await newUser.save();

    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    res.json({ success: false, message: "Error" });
  }
};
