const User = require("../models/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//  Register function to register user
const register = async (req, res) => {
    const { full_name, email, password, role ,sem , branch } = req.body;
    // Validate user input
    if (!(email && password && full_name)) {
      return res.status(400).send("All input is required");
    }
    // find old user exit or not if not exit then create new user
    const oldUser = await User.findOne({ email: email });
    if (oldUser) {
      res.status(400).json({
        success: false,
        message: "User Allready Exist",
      });
    }
  
    try {
      // bcrypt the password and creating user
      const salt = await bcrypt.genSalt(10);
      encryptedPassword = await bcrypt.hash(password, salt);
      const user = await User.create({
        full_name: full_name,
        role: role,
        email: email.toLowerCase(), // sanitize: convert email to lowercase
        password: encryptedPassword,
        sem,
        branch
      });
      return res
        .status(201)
        .json({ user: user, message: "you are register successfull" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Registration failed" });
    }
  };
  //login functonality to login user
  const login = async (req, res) => {
    // take a value from user end
    const { email, password } = req.body;
  
    // Validate user input
    if (!(email && password)) {
      res.status(400).send("All input is required");
      return;
    }
  
    const userExist = await User.findOne({ email: email });
  
    if (userExist && (await bcrypt.compare(password, userExist.password))) {
      // generate jwt token
      const token = jwt.sign(
        {
          user_id: userExist._id,
          email,
          role:userExist.role
        },
        process.env.TOKEN_KEY
      );
  
      // save user token
      userExist.token = token;
  
      // save user token in data base but there is no need to save it
      await userExist.save();
  
      return res.status(200).json({
        user: userExist,
        success: true,
        message: "login Successfull",
      });
    }
     else {
      return res.status(400).json({
        success: false,
        message: "login failed",
      });
    }
  
  };

module.exports = {register,login}