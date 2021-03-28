import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cookies from 'universal-cookie'

import Logo from "./Logo";
import Home from "./homeComponents/Home"
import { navList } from "../systemConfig";
import ContentList from "./contentList/ContentList";
import NoMatch from './NoMatch'

import "../css/navbar.css";
import SignInPopUp from "./SignInPopUp";
import { auth } from "../dispatcher/signInMethods";

let NavBar = () => {

  const cookies = new Cookies()

  let [signInPopUpState, setSignInPopUpState] = useState(null)

  let handleSignIn = () => {
    setSignInPopUpState(!signInPopUpState)
  }

  let handleSignOut = () => {
    auth.signOut()
      .then(() => {
        cookies.remove('prdUser')
        cookies.remove('prdToken')
        return window.location.reload()
      })
      .catch(error => window.alert(error.message))
  }

  return (
    <>
      <Router>
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
                  <Link className="link" to={`/${val}/`}>
                    {val.charAt(0).toUpperCase() + val.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div id='userMaster'>

            {/*render user details on login */}
            {cookies.get('prdUser') && <div id="userDetail">
              <img src={cookies.get('prdUser').photoURL} alt='profilePic' />
              <p>{cookies.get('prdUser').displayName}</p>
            </div>}

            {/*render button to signIn or signOut*/}
            {
              cookies.get('prdUser') === undefined ? <button className="signIn" onClick={handleSignIn}>SignIn/SignUp</button>
                : <button className="signIn" onClick={handleSignOut}>SignOut</button>
            }
          </div>
        </div>

        {/*render signIn popUp */}
        {signInPopUpState && <SignInPopUp setState={setSignInPopUpState} />}

        {/* defining route handler for navbar val */}
        <Switch>

          {/* home page route */}
          <Route exact path="/" component={Home} />

          {/* navigation bar route */}
          <Route path={`/:typ`}>
            <ContentList userToken={cookies.get('prdToken')} />
          </Route>

          {/* 404 page route */}
          <Route path="/*" component={NoMatch} />
        </Switch>

      </Router>
    </>
  );
};

export default NavBar;
