import mongoose from "mongoose";
import { USER_MODEL_NAME } from "./User";

const bookSchema = new mongoose.Schema({
  title: { type: String, required: [true, "A book must have a title"] },

  author: { type: String, required: [true, "A book must have a author"] },

  ISBN: { type: String, unique: true },

  coverImage: { type: String, default: "" },

  issuedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: USER_MODEL_NAME,
    default: null,
  },

  bookCode: {
    type: String,
    unique: true,
    required: [true, "A book must have a unique code"],
  },
});

export const BOOK_MODEL_NAME = "Book";

const Book = mongoose.model(BOOK_MODEL_NAME, bookSchema);

module.exports = { Book };
