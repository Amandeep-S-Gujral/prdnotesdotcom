import React from "react";

import "../../css/articlePage.css"
import "../../css/bookPage.css"

let Page = ({container, data, type}) => {

  return (
      <div className={`${type}`}>
      {container.render(data)}
      </div>
  );
};

export default Page;
