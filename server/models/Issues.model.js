import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  book_id: { type: String, required: true },
  user_id: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
  deadline: { required: true, type: Date },
  returned: { required: true, type: Boolean },
});

export const USER_MODEL_NAME = "Books";

const UserModel = model(USER_MODEL_NAME, UserSchema);

export default UserModel;
