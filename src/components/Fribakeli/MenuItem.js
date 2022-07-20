import React from "react";
import Maps from "components/Maps.js";

function MenuItem(props) {
  
  function panTo() {
    Maps.centerMyLocation(props.data[1], props.data[2])
  }

  return (
    <button className="menuItem">{props.data[0]}</button>
  );
}

export default MenuItem;