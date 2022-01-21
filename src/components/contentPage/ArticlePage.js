import React from "react";

const ArticlePage = ({ container, data }) => {
  console.log(data.body)
  return (
    <div className='articlePage'>
      {container.htmlReactParser(container.render().body(data.body))}
    </div>
  );
};

export default ArticlePage;
