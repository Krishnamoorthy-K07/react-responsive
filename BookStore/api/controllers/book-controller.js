const Book = require('../model/Book')

const getAllBooks = async (req,res,next) => {
    let books;
    try {
        books = await Book.find();
        
    } catch(err){
        console.log(err)
    }
    if(!books){
        return res.status(404).json({message:"NO Item Found"})
    }


    return res.status(200).json({books})
}

const getBookbyId = async (req,res,next) => {
    let book;
    let id = req.params.id;
    try {
        book = await Book.findById(id)
    } catch (err) {
        console.log(err)
    }
    if(!book){
        return res.status(404).json({message:"Not Found..!!"})
    } 
    return res.status(200).json({book})
}

const addBook = async (req,res,next) => {
    let book;
    console.log(req.body)
    try {
        
        const {name,author,description,price,available,image} = req.body
        book = new Book({
        name,
        author,
        description,
        price,
        available,
        image
    });

    await book.save();
    } catch (error) {
        console.log(error);
    }

    if(!book){
        return res.status(404).json({message: "Unable to Add.!!"})
    }
    return res.status(200).json({book})

    
}


const deleteBook = async (req,res,next) => {
    let book;
    let id = req.params.id
    try {
        book = await Book.findByIdAndDelete(id)
        
    } catch (error) {
        console.log(error)
    }

    if(!book){
        return res.status(404).json({message : "Not Found !"})
    }

    return res.status(200).json({book})
    
}

const updateBook = async (req,res,next) => {
    let book;
    const {name,author,description,price,available,image} = req.body
    let id = req.params.id
    
    try {
        book = await Book.findByIdAndUpdate(id, {
            name,
            author,
            description,
            price,
            available,
            image
        })
       book = await book.save()
        
    } catch (error) {
        console.log(error)
    }

    if(!book){
        return res.status(404).json({message : "Not Found !"})
    }

    return res.status(200).json({book})

}



exports.getAllBooks = getAllBooks;
exports.addBook = addBook;
exports.getBookbyId = getBookbyId;
exports.deleteBook = deleteBook;
exports.updateBook = updateBook;