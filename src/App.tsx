import React, { useCallback, useEffect } from 'react';
import './main.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './Pages/LandingPage';
import ArticlePage from './Pages/ArticlePage';
import HeadArticle from './Pages/HeadArticlePage';
import Error from './Pages/Error404';
import axios from 'axios';

function App() {
  const [status, setStatus] = React.useState(true);
  const [articles, setArticles] = React.useState([]);
  const [categories, setCategories] = React.useState<any[]>([]);
  const [headArticle, setHeadArticle] = React.useState<any[]>([]);

  //Axios .catch, both the res and err objects are the same as with the async/await syntax.

  const getArticles = useCallback((controller: any) => {
    axios
      .get('http://localhost:8000/articles', { signal: controller.signal })
      .then((response) => {
        setArticles(response.data);
      })
      .catch((err) => {
        if (err.code == 'ERR_CANCELED') console.log(err);
        else {
          console.log(err);
          setStatus(false);
        }
      });
  }, []);

  const getCategories = useCallback((controller: any) => {
    axios
      .get('http://localhost:8000/categories', { signal: controller.signal })
      .then((response) => setCategories(response.data))
      .catch((err) => {
        if (err.code == 'ERR_CANCELED') console.log(err);
        else {
          console.log(err);
          setStatus(false);
        }
      });
  }, []);

  const getHeadArticle = useCallback((controller: any) => {
    axios
      .get('http://localhost:8000/head-article', { signal: controller.signal })
      .then((response) => setHeadArticle(response.data))
      .catch((err) => {
        if (err.code == 'ERR_CANCELED') console.log(err);
        else {
          console.log(err);
          setStatus(false);
        }
      });
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    getArticles(controller);
    return () => {
      controller.abort();
    };
  }, [getArticles]);

  useEffect(() => {
    const controller = new AbortController();

    getCategories(controller);
    return () => {
      controller.abort();
    };
  }, [getCategories]);

  useEffect(() => {
    const controller = new AbortController();
    getHeadArticle(controller);
    return () => {
      controller.abort();
    };
  }, [getHeadArticle]);

  if (!status) {
    return <Error />;
  } else {
    return (
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Landing articles={articles} categories={categories} />} />
            <Route path='/article/:id' element={<ArticlePage article={articles} />} />
            <Route
              path='/article/head-article'
              element={<HeadArticle headArticle={headArticle} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
