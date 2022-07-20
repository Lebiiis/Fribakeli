import React from "react";
import Marker from "@react-google-maps/api";

function MenuItem(props) {
  
  function panTo() {
    Maps.centerMyLocation(props.data[1], props.data[2])
  }

  return (
    <button className="menuItem">{props.data[0]}</button>
  );
}

export default MenuItem;