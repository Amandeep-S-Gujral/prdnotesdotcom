import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Share from '../general/Share'
import Meta from '../general/Meta'
import CommentBox from '../comment/CommentBox'

import renderArticle from "../../modifiers/renderArticle";
import {Content} from "../../dispatcher/content"

import "../../css/articlePage.css";

// import getContent from '../../dispatcher'

let ArticlePage = () => {

  let { cid } = useParams();
  let [data, setData] = useState() //article body is stored

  //create instance of Content class to GET the data
  const content = new Content('GET', 'articles', cid)

  //content dispatcher is called to update the state data
  useEffect(() => {
    content.getContentBdy(setData)
  }, [cid])

  return (
    <div className='display'>
     
      {/*show loading if data is undefined */}
      {!data && <p>Loading...</p>}

      {/*render meta tags for the page*/}
      {data && <Meta obj={data[data.length - 1]} />}

      {/* article */}
      <div className="article">{data && renderArticle(data)}</div>

      {/*render share bar for the page */}
      {data && <div className='share'>
        <h2>Share</h2>
        <Share url={data[data.length - 1].url} />
      </div>}

      {/*render comment box for the page */}
      {data && <CommentBox cid={cid} />}

    </div>
  );
};

export default ArticlePage;
