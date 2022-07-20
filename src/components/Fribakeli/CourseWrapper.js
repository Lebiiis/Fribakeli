/*eslint-disable*/
import React from "react";
import { isPropertySignature } from "typescript";


function IndexHeader(props) {

  return (
    <div className="courseWrapper">
      <div></div>
      {props.children}
    </div>
  );
}

export default IndexHeader;