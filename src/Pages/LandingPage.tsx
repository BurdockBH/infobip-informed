import React from 'react';
import MainNavBar from '../components/NavBar';
import Footer from '../components/Footer';
import BasicTabs from '../components/Tabs';

function Landing({ categories, articles, headArticle }: any) {
  return (
    <div className='App'>
      <MainNavBar />
      <BasicTabs categories={categories} articles={articles} headArticle={headArticle} />
      <Footer />
    </div>
  );
}

export default Landing;
