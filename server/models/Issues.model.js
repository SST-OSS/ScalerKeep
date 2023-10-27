import { Schema, model } from "mongoose";
import { USER_MODEL_NAME } from "./Users.model.js";

const IssuesSchema = new Schema({
  book_id: { type: String, required: true },
  user_id: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: USER_MODEL_NAME,
  },
  deadline: { required: true, type: Date },
  returned: { required: true, type: Boolean },
});

export const ISSUES_MODEL_NAME = "Model";

const IssuesModel = model(ISSUES_MODEL_NAME, IssuesSchema);

export default IssuesModel;
