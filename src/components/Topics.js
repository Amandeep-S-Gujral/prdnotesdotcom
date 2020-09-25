import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import topicObj from "../topicList";
import Page from "./Page";
import render from "../controller/render";
import "../css/topics.css";

let Topics = () => {
  let { path, url } = useRouteMatch();

  //handleClick
  let handleClick = () => {
    let ele = document.getElementById('topicList');
    if (ele.style.display !== "block") {
      ele.style.display = "block";
    } else {
      ele.style.display = "none"
    }
  };

  //conditional selection of list topic object on the base of route path
  let topicList = topicObj[path.slice(1)];
  let article = require(`../articles/${topicList[0].file}.json`)
  
  //render first article
  let asset = render(article);

  return (
    <>
      {/*button to show topic list in mobile view */}
      <div id="showTopic">
        <button onClick={handleClick}>Topics</button>
      </div>

      {/*display element for article and topic list */}
      <div id="display">
        <div id="topicList">
          <ul>
            {/* rendering of topicList */}
            {/* to add new topic, mention it in topicList.js file */}
            {topicList.map((obj) => (
              <li key={obj.file}>
                <a className="link" href={`${url}/${obj.file}`}>
                  {obj.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <Switch>
          <Route exact path={url}>
            <div className="article">{asset}</div>
          </Route>

          {/* defining route for topics */}
          {topicList.map((obj) => (
            <Route key={obj.file} path={`${path}/:file`}>
              <Page />
            </Route>
          ))}
        </Switch>
      </div>
    </>
  );
};

export default Topics;
