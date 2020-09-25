import React from "react";
import { useParams } from "react-router-dom";
import render from "../controller/render";
import "../css/page.css";

let Page = () => {
  //reading file name from params and importing file for use
  let { file } = useParams();

  let article = require(`../articles/${file}.json`)
  let meta = article.pop()
  console.log(meta.tle)
  console.log(article)
  //rendering article from the file
  let asset = render(article)
  // let mdObj  = article.default[0];

  return (
    <>
      <div className="article">{asset}</div>
    </>
  );
};

export default Page;
