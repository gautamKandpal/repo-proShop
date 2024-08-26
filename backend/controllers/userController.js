import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";

//@desc  Auth user & get token
//@route  POST /api/users/login
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });

  //comparing the password with the store bcrypt password in user Model
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401).json({ message: "Invalid Email or Password!" });
    // throw new Error("Invalid email or password");
  }
  // console.log(req.body);
});

//@desc  Register user
//@route  POST /api/users
const registerUser = asyncHandler(async (req, res) => {
  res.send("register user");
});

//@desc  Logout user / clear cookie
//@route  POST /api/users/logout
const logoutUser = asyncHandler(async (req, res) => {
  res.send("logout user");
});

//@desc  Get user profile
//@route  GET /api/users/profile
const getUserProfile = asyncHandler(async (req, res) => {
  res.send("get user profile");
});

//@desc  Update user profile
//@route  PUT /api/users/profile
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send("update user profile");
});

//@desc  Get users -->Admin
//@route  GET /api/users
const getUsers = asyncHandler(async (req, res) => {
  res.send("get cc");
});

//@desc  Get user by ID --> Admin
//@route  GET /api/users/:id
const getUserById = asyncHandler(async (req, res) => {
  res.send("get user by id");
});

//@desc  Delete user -->Admin
//@route  DELETE /api/users/:id
const deleteUser = asyncHandler(async (req, res) => {
  res.send("delete user");
});

//@desc  Update user -->Admin
//@route  PUT /api/users/:id
const updateUser = asyncHandler(async (req, res) => {
  res.send("update user by id");
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserById,
  deleteUser,
  updateUser,
};
