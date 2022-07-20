/*eslint-disable*/
import React from "react";

//Maps
import Maps from "components/Maps";

// core components


function IndexHeader(props) {
  return (
    <div className="mapStyle">
      {props.children}
    </div>
  );
}

export default IndexHeader;