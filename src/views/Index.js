import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import Header from "components/Fribakeli/Header";
import BodyElem from "components/Fribakeli/Body";
import MenuWrapper from "components/Fribakeli/MenuWrapper";
import Menu from "components/Fribakeli/Menu"
import MenuItem from "components/Fribakeli/MenuItem";
import CourseWrapper from "components/Fribakeli/CourseWrapper";
import {locations} from "assets/course-data/locations";
import Maps from "components/Maps.js";
import Marker from "@react-google-maps/api";
import MarkerOverlay from "components/Fribakeli/MarkerOverlay.js";
//import MapContainer from "components/Fribakeli/Maps.js";


function Index() {
  // Add course amount in here
  const courseArray = [];
  const overlayArray = [];
  const markerArray = [];

  for (let i = 0; i <= locations.length - 820; i++) {
    var courseClone = React.cloneElement(
      <MenuItem />,
      { data: locations[i] }
    )
    courseArray.push(courseClone);

    var overlayClone = React.cloneElement(
      <MarkerOverlay />,
      { data: locations[i] }
    )
    overlayArray.push(overlayClone);

    //var markerClone = React.cloneElement( 
    //  <Marker onClick={
    //    console.log(window.getComputedStyle(ReactDOM.findDOMNode(overlayClone)).getPropertyValue("display"))
    //  }/>
    //)
    //markerArray.push(markerClone);
  };

  var mapsClone = React.cloneElement(
    <Maps />,
    { courses: overlayArray,
      markers: markerArray }
  );

  return (
    // Karttaelementti kytketään BodyElem classiin;
    // se tulee taustakuvan tilalle
    <BodyElem>
      <Header />
      <MenuWrapper>
        <Menu />
        <CourseWrapper>
          {courseArray}
        </CourseWrapper>
      </MenuWrapper>
      {mapsClone}
    </BodyElem>
  );
}

export default Index;