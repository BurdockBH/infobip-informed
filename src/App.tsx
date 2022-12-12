import React from 'react';
import './main.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './Pages/LandingPage';
import ArticlePage from './Pages/ArticlePage';
import HeadArticle from './Pages/HeadArticlePage';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/article/:id' element={<ArticlePage />} />
          <Route path='/article/head-article' element={<HeadArticle />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
