import { Schema, model } from "mongoose";
import { USERS_MODEL_NAME } from "./Users.model.js";
import { BOOKS_MODEL_NAME } from "./Books.model.js";

const IssuesSchema = new Schema({
  book_id: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: BOOKS_MODEL_NAME,
  },
  user_id: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: USERS_MODEL_NAME,
  },
  deadline: { required: true, type: Date },
  returned: { required: true, type: Boolean },
});

export const ISSUES_MODEL_NAME = "Model";

const IssuesModel = model(ISSUES_MODEL_NAME, IssuesSchema);

export default IssuesModel;
