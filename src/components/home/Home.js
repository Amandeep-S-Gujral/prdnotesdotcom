import React from "react"
import HomeMeta from './HomeMeta'
import Header from "../header/Header"
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import Footer from '../footer/Footer'

import "../../css/home.css";

let Welcome = () => {
  return (
    <div id="home">
      <HomeMeta />
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Footer />
    </div>
  );
};

export default Welcome;
