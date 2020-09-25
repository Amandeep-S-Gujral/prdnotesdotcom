import React from "react";

let render = (array) => {
  let compArr = [];

  array.map((obj) => {
    //rendering headings in h1 tag
    if (obj.id.includes("h")) {
      compArr.push(
        <h1 key={obj.id} className="hed">
          {obj.cnt}
        </h1>
      );
    } 
    //render text in p tag
    else if (obj.id.includes("t")) {
      compArr.push(
        <p key={obj.key} className="txt">
          {obj.cnt}
        </p>
      );
    } 
    //render image in img tag
    else if (obj.id.includes("i")) {
      compArr.push(
        <img
          key={obj.id}
          className="img"
          src={obj.lnk}
          alt={obj.alt}
        />
      );
    } 
    //render ordered list in ol tag
    else if (obj.id.includes("o")) {
      let arr = obj.cnt.split("\n");
      compArr.push(
        <ol key={obj.id} className="oli">
          {arr.map((ele) => (
            <li>{ele}</li>
          ))}
        </ol>
      );
    } 
    //render un-ordered list in ul tag
    else if (obj.id.includes("u")) {
      let arr = obj.cnt.split("\n");
      compArr.push(
        <ul key={obj.id} className="uli">
          {arr.map((ele) => (
            <li>{ele}</li>
          ))}
        </ul>
      );
    } 
    //render video in iframe tag - works only for youtube videos
    else if (obj.id.includes("v")) {
      compArr.push(
        <iframe
          key={obj.id}
          title ={obj.id}
          className="vid"
          width="420"
          height="315"
          src={obj.cnt}
        ></iframe>
      );
    }
  });
  return compArr;
};

export default render;
