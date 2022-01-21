import React from "react";
import { Link } from "react-router-dom";
import { navList } from "../../systemConfig";

import "../../css/navbar.css";

let NavBar = () => {

  const handleChange = () => {
    if (document.getElementById('navList').style.display === "block") {
      document.getElementById('navList').style.display = 'none'
    } else {
      document.getElementById('navList').style.display = 'block'
    }
  }

  return (
    <div id="navbar">
    {/* hamburgur menu button */}
      <button className="hamburger" onClick={handleChange}>
        <div></div>
        <div></div>
        <div></div>
      </button>

      {/* navigation bar urls */}
      <ul id="navList">
        {navList.map((val) => (
          <li key={val}>
            <Link className="link1" to={`/${val}`}>
              {val.charAt(0).toUpperCase() + val.slice(1) + 's'}
            </Link>
          </li>
        ))}

        {/* hardCoded links */}
        <li>
          <a className="link1" href='https://forms.gle/vG3r8vpLoD1qh7PbA' target='_blank' rel="noreferrer">Feedback Form</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
