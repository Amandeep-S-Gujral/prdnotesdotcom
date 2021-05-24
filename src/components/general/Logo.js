import React from "react";

let Logo = () => {
  return (
    <div style ={{background: "#FEFB7A", marginLeft: "10px", padding: "5px"}}>
    <div
      id="logo"
      style={{ backgroundColor: "white", width: "140px"}}
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
    </div>
  );
};

export default Logo;
