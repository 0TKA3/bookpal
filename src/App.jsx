import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './assets/components/Search';
import Content from './assets/components/Content';
import Book from './assets/pages/Book';
import './assets/style.scss';

function App() {
  return (
      <div className="container">
          <Search />
        <Routes>
          <Route path='/bookpal' element={<Content />}/>
          <Route path="/bookpal/book/:id" element={<Book />} />
        </Routes>
      </div>
  );
}

export default App;
