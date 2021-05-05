import React from "react";

let render = (array) => {
  let compArr = []; //react dom array which will be retuned as output of the function

  array.forEach((obj) => {
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
        <p key={obj.id} className="txt">
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
          {arr.forEach((ele, index) => (
            <li key = {index}>{ele}</li>
          ))}
        </ol>
      );
    } 
    //render un-ordered list in ul tag
    else if (obj.id.includes("u")) {
      let arr = obj.cnt.split("\n");
      compArr.push(
        <ul key={obj.id} className="uli">
          {arr.map((ele, index) => (
            <li key = {index}>{ele}</li>
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
          src={obj.cnt}
        ></iframe>
      );
    }
     //render links
     else if(obj.id.includes('l')) {
      let arr = obj.cnt.split("\n")
      compArr.push(
        <ul key={obj.id} className="lnk">
        {arr.map((ele) => (
          <li><a href={ele}>{ele}</a></li>
        ))}
      </ul>
      )
    }
  });
  return compArr;
};

export default render;
