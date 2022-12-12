import React, { useEffect } from 'react';
import './main.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './Pages/LandingPage';
import ArticlePage from './Pages/ArticlePage';
import HeadArticle from './Pages/HeadArticlePage';
import axios from 'axios';

function App() {
  const [articles, setArticles] = React.useState([]);
  const [categories, setCategories] = React.useState<any[]>([]);
  const [headArticle, setHeadArticle] = React.useState<any[]>([]);

  //Axios .catch, both the res and err objects are the same as with the async/await syntax.

  useEffect(() => {
    axios
      .get('http://localhost:8000/articles')
      .then((response) => {
        setArticles(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    axios
      .get('http://localhost:8000/categories')
      .then((response) => setCategories(response.data))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    axios
      .get('http://localhost:8000/head-article')
      .then((response) => setHeadArticle(response.data))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing articles={articles} categories={categories} />} />
          <Route path='/article/:id' element={<ArticlePage article={articles} />} />
          <Route path='/article/head-article' element={<HeadArticle headArticle={headArticle} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
