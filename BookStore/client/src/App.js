
import React from 'react';
import './App.css';
import Header from './components/Header';
import { Route,  Routes } from 'react-router-dom';
import Home from './components/Home';
import AddBook from './components/AddBook';
import About from './components/About';

import Books from './components/Book/Books';
import BookDetail from './components/Book/BookDetail';

function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/addbook' element={<AddBook/>} />    
          <Route path='/books' element={<Books/>} />  
          <Route path='/about' element={<About/>} />  
          <Route path='/book/:id' element={<BookDetail/>} />  
        </Routes>
      </main>

    </React.Fragment>
  
  );
}

export default App;
