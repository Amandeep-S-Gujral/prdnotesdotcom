import React from "react"
import HomeMeta from './HomeMeta'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import "../../css/home.css";

let Welcome = () => {
  return (
    <div id="home">
      {/*meta tags for home page */}
      <HomeMeta />

      {/*subscribe now section of the home page*/}
      <SectionOne />

      {/*what is product management section of home page */}
      <SectionTwo />

      {/*contact us section of home page */}
      <SectionThree />

    </div>
  );
};

export default Welcome;
