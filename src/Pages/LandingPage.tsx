import React from 'react';
import MainNavBar from '../components/NavBar';
import TabPanel from '../components/Tabs';
import Footer from '../components/Footer';

function Landing() {
  return (
    <div className='App'>
      <MainNavBar />
      <TabPanel />
      <Footer />
    </div>
  );
}

export default Landing;
