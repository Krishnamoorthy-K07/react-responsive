const express = require('express')
const router = express.Router();
const Book = require("../model/Book")
const controller = require('../controllers/book-controller')

router.get("/books",controller.getAllBooks)
router.post("/addbook",controller.addBook)
router.get("/book/:id",controller.getBookbyId)
router.delete("/deletebook/:id",controller.deleteBook)
router.put("/updatebook/:id",controller.updateBook)


module.exports = router;