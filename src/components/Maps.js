import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,

} from "@react-google-maps/api";
import mapStyles from "assets/friba_css/mapStyles";
import {locations} from "assets/course-data/locations";
import MarkerOverlay from "components/Fribakeli/MarkerOverlay";

const libraries = ["places"];
const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
};
const center = {
  lat: 60.451813,
  lng: 22.266630,
};
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

const boxOptions = { 
  closeBoxURL: '', 
  enableEventPropagation: true };

export default function App(props) {
  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAP_API_KEY, // piiloon
    libraries,
  });

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const allMarkers = [];
  for (let i = 0; i <= locations.length - 1; i++) {
  
    var markerClone = React.cloneElement(
      <Marker />,
      { lat: locations[i][1],
        lng: locations[i][2] }
    )
    allMarkers.push(markerClone);
  }
  console.log(allMarkers); // Test


  // Ei toiminnassa, mutta tällä saa kartan zoomin haluttuun paikkaan.
  // Tässä: Kun käyttäjä painaa valikosta rataa, kartta siirtyy sen
  // sijaintiin ja zoomaa sisään.
  
  const centerMyLocation = React.useCallback((latitude, longitude) => {
    this.setState({
      center: {
        lat: latitude,
        lng: longitude
      }
    })
  });
  

  if (loadError) return "Error loading Maps";
  if (!isLoaded) return "Loading Maps";

  return <div>
    <GoogleMap mapContainerStyle={mapContainerStyle}
    zoom={10}
    center={center}
    options={options}
    onLoad={onMapLoad}
    //ref={(map) => map && map.panTo({lat: 25.0112183,lng: 121.52067570000001})}
    >
      {props.courses}
      {locations.map(location => (
        <Marker position={{ lat: location[1], lng: location[2] }} key={ location[0]}/> // Add onClick to show weather of marker location
      ))}
    </GoogleMap>
  </div>;
}