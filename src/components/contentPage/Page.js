import React from "react";

let ArticlePage = ({container, data}) => {

  return (
      <div className="page">
          {console.log(data)}

      {container.render(data)}
      </div>
  );
};

export default ArticlePage;
