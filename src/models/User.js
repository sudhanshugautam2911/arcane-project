import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Please provide a username"],
  },
  email: {
    type: String,
    required: [true, "Please provide a email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"]
  },
  // gender: {
  //   type: String,
  //   required: [true, "Please provide your gender"]
  // },
  // age: {
  //   type: Number,
  //   required: [true, "Please provide your age"]
  // },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  forgetPasswordToken: String,
  forgetPasswordExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

export default mongoose.models.User || mongoose.model("User", userSchema);