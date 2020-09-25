import React, { useEffect } from "react";
import ReactGa from "react-ga";
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";

const App = () => {
  useEffect(() => {
    ReactGa.initialize("UA-152716121-2");

    //report page view to google analytics
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <>
      <div>
        <NavBar />

        {/* conditionally rendering welcome component on the basis of pathname */}
        {window.location.pathname === "/" ? <Welcome /> : <></>}
      </div>
    </>
  );
};

export default App;
