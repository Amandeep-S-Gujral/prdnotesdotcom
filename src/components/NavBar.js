import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Logo from "./Logo";
import navList from "../navList";
import Topics from "./Topics";
import "../css/navbar.css";

let NavBar = () => {
  return (
    <>
      <Router>
        <div id="navbar">
        <a id="home" href="/">
        <Logo />
        </a>

          {/* rendering navbar as per values in navList */}
          {/* to add any new link to navbar, mention it in navList.js file */}
          <ul>
            {navList.map((val) => (
              <li key={val}>
                <a className="link" href={`/${val}`}>
                  {val.charAt(0).toUpperCase() + val.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* defining route handler for navbar val */}
        <Switch>
          {navList.map((val) => (
            <Route key={val} path={`/${val}`}>
              <Topics id="article" />
            </Route>
          ))}
        </Switch>
      </Router>
    </>
  );
};

export default NavBar;
