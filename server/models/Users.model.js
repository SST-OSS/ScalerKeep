import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  email: { required: true, type: String, unique: true },
  name: { required: true, type: String },
});

export const USERS_MODEL_NAME = "Users";

const UserModel = model(USERS_MODEL_NAME, UserSchema);

export default UserModel;
