import React from "react";

let Logo = () => {
  return (
    <div
      id="logo"
      style={{ backgroundColor: "white", width: "140px", margin: "10px" }}
    >
      <h3
        style={{
          color: "#052775",
          fontFamily: "arial",
          padding: "5px",
          margin: "0px",
        }}
      >
        PrdNotes.com
      </h3>
      <p
        style={{
          color: "#052775",
          fontSize: ".5em",
          fontFamily: "arial",
          padding: "5px",
          margin: "0px",
          textAlign: "right",
        }}
      >
        By A.D. Singh
      </p>
    </div>
  );
};

export default Logo;
