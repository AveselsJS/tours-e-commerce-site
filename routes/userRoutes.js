const express = require('express');
const {
  signup,
  login,
  resetPassword,
  forgotPassword,
  protect,
  updatePassword,
  restrictTo,
  logout,
} = require('../controllers/authController');
const {
  getAllUsers,
  updateMe,
  deleteMe,
  deleteUser,
  updateUser,
  getMe,
  getUser,
} = require('../controllers/userController');
const userRoute = express.Router();

userRoute.post('/signup', signup);
userRoute.post('/login', login);
userRoute.get('/logout', logout);
userRoute.post('/forgotPassword', forgotPassword);
userRoute.patch('/resetPassword/:token', resetPassword);

userRoute.use(protect);
userRoute.patch('/updateMe', updateMe);
userRoute.patch('/:id', updateUser);
userRoute.delete('/:id', deleteUser);
userRoute.get('/me', getMe, getUser);

userRoute.delete('/deleteMe', deleteMe);

userRoute.patch('/updateMyPassword', updatePassword);

userRoute.use(restrictTo('admin'));
userRoute.get('/', getAllUsers);

module.exports = userRoute;
