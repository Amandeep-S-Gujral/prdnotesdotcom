import React from "react";
import "../css/welcome.css";

let Welcome = () => {
  return (
    <div id="landing">
      <div>
        <h1>Compile and share product knowledge</h1>
        <p>
          The notes are prepared by combining text, images, and videos available
          across the internet.
        </p>
        <p>
          All the notes are classified into three different headings
          i.e.business, design, technology.
        </p>
        <p>
          If you have any suggestions, write to us at{" "}
          <strong>learn@prdnotes.com</strong>
        </p>
      </div>
      <img
        src="https://ik.imagekit.io/prdnotes/Landing_page/Welcome_to_prdnotes.com.svg"
        alt="landing page pic by prdnotes.com"
      />
    </div>
  );
};

export default Welcome;
