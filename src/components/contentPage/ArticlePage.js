import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Share from '../Share'
import Meta from '../Meta'
import CommentBox from '../comment/CommentBox'

import render from "../../dispatcher/render";
import getContent from "../../dispatcher/getContent"

import "../../css/articlePage.css";

// import getContent from '../../dispatcher'

let ArticlePage = ({userToken}) => {
  let { cid } = useParams();
  let [data, setData] = useState()

  //get json data to render and save in state named 'data'
  useEffect(() => {
    const fetchData = async () => await getContent(cid, 'articles', setData)
    fetchData()
  }, [cid])

  return (
    <div className='display'>

      {/*show loading if data is undefined */}
      {!data && <p>Loading...</p>}

      {/*render meta tags for the page*/}
      {data && <Meta obj={data[data.length - 1]} />}

      {/* article */}
      <div className="article">{data && render(data)}</div>

      {/*render share bar for the page */}
      {data && <div className='share'>
        <h2>Share</h2>
        <Share url={data[data.length - 1].url} />
      </div>}

      {/*render comment box for the page */}
      {data && <CommentBox cid={cid} userToken={userToken} />}

    </div>
  );
};

export default ArticlePage;
