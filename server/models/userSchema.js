import mongoose from "mongoose";

// Define the User Schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  enquiryPlaced: {
    type: Number
  },
  isAuthorized: {
    type: Boolean,
    default: false
  }
});

const UserSchema = mongoose.model('User Schema', userSchema);

export default UserSchema;
