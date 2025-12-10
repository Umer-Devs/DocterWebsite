import mongoose from "mongoose";
import { BookData } from "../models/Book.js";

// bookDataSave controller 

const bookDataSave = async (req,res)=>{
    try {
        const bookData = req.body;
        const newBook = new BookData(bookData);
        await newBook.save();
        console.log("Connected DB:", mongoose.connection.db.databaseName);
        console.log("Book added successfully",newBook);

        res.status(201).json({ message: "Book added successfully", book: newBook });
    } catch (error) {
        console.error("Error saving book:", error);
        res.status(500).json({ message: "Failed to save book" });
    }
}

const getBookData = async (req,res)=>{
    try {
        const bookData = await BookData.find();
        res.status(200).json(bookData);
    } catch (error) {
        console.error("Error fetching books:", error);
        res.status(500).json({ message: "Failed to fetch books" });
    }
}

const home =(req,res)=>{
    res.send("hello backend project is running")
}


export {bookDataSave , home , getBookData }