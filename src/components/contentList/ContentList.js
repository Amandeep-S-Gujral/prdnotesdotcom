import React, { useState, useEffect } from "react";
import { Switch, Route, Link, useRouteMatch, useParams, useLocation } from "react-router-dom";

import getList from '../../dispatcher/getList'
import ArticleCard from './ArticleCard'
import ArticlePage from '../contentPage/ArticlePage'

import "../../css/contentList.css";

let ContentList = ({userToken}) => {
  let { typ } = useParams();
  let { url } = useRouteMatch();
  let { pathname } = useLocation()
  let [contentList, setContentList] = useState()
  let [mount, setMount] = useState(true)

  //getList dispatcher is called to update the state 'contentList'
  useEffect(() => {

    //component willMount className = display
    if (pathname.replace(/\//g, "") === typ) {
      setMount(true)
      const fetchData = async () => await getList(typ, setContentList)
      fetchData()
    } else {
      setMount(false)
    }
    //component willUnmount className = display
    return () => console.log('ok')
  }, [pathname, typ])

  return (
    <>
      {/*show loading if contentList is undefined && mount == true */}
      {!contentList && mount && <div className='display'><p>Loading...</p></div>}

      {/*display list of content like articles, books, etc.*/}
      {/*check is contentList != undefined and mount == true */}
      {contentList && mount && <div className="display">
        {
          contentList.map(obj => <div key={obj.cid}><Link className="listLink"
            to={`${url}${obj.cid}`}
            key={obj.cid}><ArticleCard obj={obj} /></Link></div>)
        }
      </div>}

      {/*define route handler for contentList */}
      <Switch>
        <Route path={`${url}/:cid`}>
          <ArticlePage userToken={userToken}/>
        </Route>
      </Switch>
    </>
  );
};

export default ContentList;
