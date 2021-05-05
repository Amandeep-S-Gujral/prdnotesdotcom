import React, { useState, useEffect } from "react";
import { Switch, Route, Link, useRouteMatch, useParams, useLocation } from "react-router-dom";

import { Content } from '../../dispatcher/content'

import switchCard from '../../modifiers/switchCard'

import ArticlePage from '../contentPage/ArticlePage'
import BookPage from '../contentPage/BookPage'

import "../../css/contentList.css";

let ContentList = () => {
  let { typ } = useParams();
  let { url } = useRouteMatch();
  let { pathname } = useLocation()
  let [list, setList] = useState() //list of articles, books, etc is stored
  let [mount, setMount] = useState(true) 

  //create instance of Content class to GET the data
  let content = new Content('GET', typ)

  //content dispatcher is called to update the state 'list'
  useEffect(() => {

    //component willMount className = ${typ}display
    if (pathname.replace(/\//g, "") === typ) {
      setMount(true)
      content.getContentList(setList)
    } else {
      setMount(false)
    }

    //component willUnmount className = display
    return () => setList(null)
  }, [pathname])

  return (
    <>
      {/*show loading if contentList is undefined && mount == true */}
      {!list && mount && <div className='loading'><p>Loading...</p></div>}

      {/*display list of content like articles, books, etc.*/}
      {/*check is contentList != undefined and mount == true */}
      {list && mount && <div className={`${typ}Display`}>
        {
          list.map(obj => <div key={obj.cid}><Link className="listLink"
            to={`${url}/${obj.cid}`}
            key={obj.cid}>
            {switchCard(obj.typ, obj)}
          </Link></div>)
        }
      </div>}

      {/*define route handler for contentList */}
      <Switch>
        <Route path="/article/:cid" component={ArticlePage} />
        <Route path="/book/:cid" component={BookPage} />
      </Switch>
    </>
  );
};

export default ContentList;
