import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  book_id: { type: mongoose.Schema.Types.ObjectId , required:true },
  title: { required: true, type: String },
  added_on: { required: true, type: Date },
});

export const USER_MODEL_NAME = "Books";

const UserModel = model(USER_MODEL_NAME, UserSchema);

export default UserModel;
