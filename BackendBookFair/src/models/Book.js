import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  titleHighlight: {
    type: String,
    trim: true
  },
  author: {
    type: String,
    required: true,
    trim: true
  },
  genre: {
    type: String,
    trim: true
  },
  releaseYear: {
    type: String,  // ya Number bhi rakh sakte ho agar real year chahiye
    trim: true
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0
  },
  image: {
    type: String,
    required: true
  },
  tagline: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  whatThisBookExplores: [{
    type: String,
    trim: true
  }],
  aboutAuthor: {
    title: {
      type: String,
      trim: true
    },
    bio: {
      type: String,
      trim: true
    }
  },
  // Agar future mein similar books add karne ka plan hai to ref use karo
  similarBooks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book'
  }]
}, {
  timestamps: true
});



export const BookData = mongoose.model("BookData", bookSchema);