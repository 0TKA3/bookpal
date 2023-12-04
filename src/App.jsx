import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './assets/components/Search';
import Content from './assets/components/Content';
import Book from './assets/pages/Book';
import './assets/style.scss';
import Main from './assets/pages/Main';

function App() {
  return (
      <div className="container">
        <Routes>
          <Route path='/bookpal' element={<Main />}/>
          <Route path="/bookpal/book/:id" element={<Book />} />
        </Routes>
      </div>
  );
}

export default App;
