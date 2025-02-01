import React, { useEffect, useState } from 'react'
import '../Book/Books.css'
import axios from 'axios';
import Book from './Book';
const url = "http://localhost:3001/books"
const getBooks = async () => {
    return await axios.get(url).then((res) => res.data);
    
}
export default function Books() {

const [books,setBooks] = useState([])
  

    useEffect(() => {
      getBooks().then((data) => setBooks(data.books));
    }, [])
    
    console.log(books)
  return (
    <div>
      <ul>
        {books && books.map((book,i) => (
          <div className='book' key={i}>
            <Book book={book}/>
          </div>
        ))}
      </ul>
    </div>
  )
};
