import { Schema, model } from "mongoose";
import USER_MODEL_NAME from "./Users.model.js";

const UserSchema = new Schema({
  book_id: { type: String, required: true },
  user_id: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: USER_MODEL_NAME,
  },
  deadline: { required: true, type: Date },
  returned: { required: true, type: Boolean },
});

export const USER_MODEL_NAME = "Model";

const UserModel = model(USER_MODEL_NAME, UserSchema);

export default UserModel;
