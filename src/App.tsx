import React from "react";
import "./App.css";
import MainNavBar from "./components/NavBar";
import TabPanel from "./components/Tabs";

function App() {
  return (
    <div className="App">
      <MainNavBar />
      <TabPanel />
    </div>
  );
}

export default App;
