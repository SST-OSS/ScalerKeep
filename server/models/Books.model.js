import { Schema, model } from "mongoose";

const BooksSchema = new Schema({
  book_id: { type: String, required: true },
  title: { required: true, type: String },
  added_on: { required: true, type: Date },
});

export const BOOKS_MODEL_NAME = "Books";

const BooksModel = model(BOOKS_MODEL_NAME, BooksSchema);

export default BooksModel;