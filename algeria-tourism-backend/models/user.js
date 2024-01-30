/*
  This model is used to store the places.
*/
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    lastName: { type: String, required: [true, "LastName is required"] },
    firstName: { type: String, required: [true, "firstName is required"] },
    email: { type: String, required: [true, "email is required"] ,unique: true},
    picture: {
      type: String,
      default:
        "https://tacm.com/wp-content/uploads/2018/01/no-image-available.jpeg",
    },
    password: { type: String, required: [true, "password is required"] },
    role: { type: String,  default:"User" },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);