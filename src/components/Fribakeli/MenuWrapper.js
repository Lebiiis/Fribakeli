/*eslint-disable*/
import React from "react";
import { isPropertySignature } from "typescript";


function IndexHeader(props) {

  return (
    <div className="menuFrib">
      {props.children}
    </div>
  );
}

export default IndexHeader;