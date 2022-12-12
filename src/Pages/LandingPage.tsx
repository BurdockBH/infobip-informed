import React from 'react';
import MainNavBar from '../components/NavBar';
import Footer from '../components/Footer';
import BasicTabs from '../components/Tabs';

function Landing({ categories, articles }: any) {
  return (
    <div className='App'>
      <MainNavBar />
      <BasicTabs categories={categories} articles={articles} />
      <Footer />
    </div>
  );
}

export default Landing;
