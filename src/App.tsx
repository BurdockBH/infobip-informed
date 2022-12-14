import React, { useCallback, useEffect } from 'react';
import './main.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './Pages/LandingPage';
import ArticlePage from './Pages/ArticlePage';
import HeadArticle from './Pages/HeadArticlePage';
import Error from './Pages/Error404';
import { getArticlesData } from './Services/Services';
import LoadingSpinner from './components/LoadingSpinner';
import { categories } from './const/const';

function App() {
  const [status, setStatus] = React.useState({ status: true, code: '' });
  const [isLoading, setIsLoading] = React.useState(false);
  const [articles, setArticles] = React.useState([]);
  const [headArticle, setHeadArticle] = React.useState<any>('');

  const getArticles = useCallback((controller: any) => {
    setIsLoading(true);
    getArticlesData(controller)
      .then((response) => {
        const rest = response.data.filter((e: any) => e.id != 0);
        setArticles(rest);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err.code == 'ERR_CANCELED') console.log(err);
        else {
          console.log(err);
          setStatus({ status: false, code: err.code });
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const getHeadArticle = useCallback((controller: any) => {
    getArticlesData(controller)
      .then((response) => setHeadArticle(response.data.find((x: any) => x.id == 0)))
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
    getHeadArticle(controller);
    return () => {
      controller.abort();
    };
  }, [getHeadArticle]);

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
