import React, { useEffect } from "react";
import ReactGa from "react-ga";

import NavBar from "./components/general/NavBar";
import './css/App.css'

const App = () => {
  useEffect(() => {
    ReactGa.initialize("UA-152716121-2");

    //report page view to google analytics
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <div id='app'>
      <div id='navDiv'>
        <NavBar />
      </div>
    </div>
  );
};

export default App;
