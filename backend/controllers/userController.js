import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";

//@desc  Auth user & get token
//@route  POST /api/users/login
const authUser = asyncHandler(async (req, res) => {
  // const users = await User.find({});

  // res.json(users);
  res.send("auth user");
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
  res.send("get users");
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
