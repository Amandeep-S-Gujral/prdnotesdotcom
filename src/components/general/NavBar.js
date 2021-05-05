import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Logo from "./Logo";
import Home from "../homeComponents/Home"
import { navList } from "../../systemConfig";
import ContentList from "../contentList/ContentList";
import UserDetails from "./UserDetails"
import SignInPopUp from "./SignInPopUp";
import NoMatch from './NoMatch'
import PrivacyPolicy from './PrivacyPolicy'

import "../../css/navbar.css";

let NavBar = () => {

  let [signInPopUpState, setSignInPopUpState] = useState(null)

  return (
    <>
      <Router forceRefresh={true}>
        <div id="navbar">
          <div id="navLnk">
            <a id="home" href="/">
              <Logo />
            </a>

            {/* rendering navbar as per values in navList */}
            {/* to add any new link to navbar, mention it in navList.js file */}
            <ul>
              {navList.map((val) => (
                <li key={val}>
                  <Link className="link" to={`/${val}`}>
                    {val.charAt(0).toUpperCase() + val.slice(1) + 's'}
                  </Link>
                </li>
              ))}
              <li>
                <Link className='link'>Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <UserDetails setState={setSignInPopUpState} />
        </div>

        {/*render signIn popUp */}
        {signInPopUpState && <SignInPopUp setState={setSignInPopUpState} />}

        {/* defining route handler for navbar val */}
        <Switch>

          {/* home page route */}
          <Route exact path="/" component={Home} />

          {/* navigation bar route */}
          <Route path={`/:typ`} component={ContentList} />

          <Route path="/policy" component={PrivacyPolicy} />

          {/* 404 page route */}
          <Route path="/*" component={NoMatch} />
        </Switch>

      </Router>
    </>
  );
};

export default NavBar;