import mongoose from "mongoose";

import { Schema, model } from "mongoose";
import { USER_MODEL_NAME } from "./User";
import { BOOK_MODEL_NAME } from "./Book";

const IssueSchema = new Schema({
  book_id: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: BOOK_MODEL_NAME,
  },

  user_id: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: USER_MODEL_NAME,
  },

  issuedOn: { required: true, type: Date, default: Date.now() },

  deadline: { required: true, type: Date },

  returned: { required: true, type: Boolean, default: false },
});

export const ISSUES_MODEL_NAME = "Issue";

const IssueModel = model(ISSUES_MODEL_NAME, IssueSchema);

export default IssueModel;
