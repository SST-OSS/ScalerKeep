import mongoose from "mongoose";
import { BOOK_MODEL_NAME } from "./Book";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "User must have a name"],
  },
  email: {
    type: String,
    required: [true, "User must have a email"],
    unique: true,
    lowercase: true,
    minlength: 8,
  },
});

export const USER_MODEL_NAME = "User";

const User = mongoose.model(USER_MODEL_NAME, userSchema);

export default User;
