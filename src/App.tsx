import React, { useCallback, useEffect } from 'react';
import './main.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './Pages/LandingPage';
import ArticlePage from './Pages/ArticlePage';
import HeadArticle from './Pages/HeadArticlePage';
import Error from './Pages/Error404';
import { getArticlesData, getHeadArticleData, getCategoriesData } from './Services/Services';
import LoadingSpinner from './components/LoadingSpinner';

function App() {
  const [status, setStatus] = React.useState({ status: true, code: '' });
  const [isLoading, setIsLoading] = React.useState(false);
  const [articles, setArticles] = React.useState([]);
  const [categories, setCategories] = React.useState<any[]>([]);
  const [headArticle, setHeadArticle] = React.useState<any>('');

  //Axios .catch, both the res and err objects are the same as with the async/await syntax.

  const getArticles = useCallback((controller: any) => {
    setIsLoading(true);
    getArticlesData(controller)
      .then((response) => {
        setArticles(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err.code == 'ERR_CANCELED') console.log(err);
        else {
          console.log(err);
          setStatus({ status: false, code: err.code });
        }
      });
  }, []);

  const getCategories = useCallback((controller: any) => {
    getCategoriesData(controller)
      .then((response) => setCategories(response.data))
      .catch((err) => {
        if (err.code == 'ERR_CANCELED') console.log(err);
        else {
          console.log(err);
          setStatus({ status: false, code: err.code });
        }
      });
  }, []);

  const getHeadArticle = useCallback((controller: any) => {
    getHeadArticleData(controller)
      .then((response) => setHeadArticle(response.data))
      .catch((err) => {
        if (err.code == 'ERR_CANCELED') console.log(err);
        else {
          console.log(err);
          setStatus({ status: false, code: err.code });
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

  console.log(articles);

  if (!status.status) {
    return <Error code={status.code} />;
  } else {
    return (
      <div className='App'>
        {!isLoading && (
          <BrowserRouter>
            <Routes>
              <Route
                path='/'
                element={
                  <Landing articles={articles} categories={categories} headArticle={headArticle} />
                }
              />
              <Route
                path='/article/:id'
                element={<ArticlePage article={articles} headArticle={headArticle} />}
              />
              <Route
                path='/article/head-article'
                element={<HeadArticle headArticle={headArticle} />}
              />
            </Routes>
          </BrowserRouter>
        )}
        {isLoading && <LoadingSpinner />}
      </div>
    );
  }
}

export default App;
