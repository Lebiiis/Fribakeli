import { InfoBox } from "@react-google-maps/api";
import React from "react";
import Weather from "./WeatherFetch";

//<Weather lat={props.data[1]} lon={props.data[2]}></Weather>
function MarkerOverlay(props) {
    const boxOptions = { 
        closeBoxURL: '', 
        enableEventPropagation: true };
    const overlayStyle = {
        display: "block"
    };

    const days = ["Ma", "Ti", "Ke", "To", "Pe", "La", "Su"];
    const overlay = [];

    for (let i = 0; i <= days.length - 1; i++) {
        overlay.push(
            <button>
                <div style={{flexGrow: 2}}>{days[i]}</div>
                <div style={{flexGrow: 3}}>{}</div>
                <div style={{flexGrow: 1}} key={props.data[0]}>
                <Weather lat={props.data[1]} lon={props.data[2]}></Weather>
                </div>
            </button>
        ); 
    }

    return (
        <InfoBox
        options={boxOptions}
        position={{ lat: props.data[1], lng: props.data[2] }}
        >
            <div className="MarkerOverlay" style={overlayStyle}>
                <div className="markerHeader">
                    Seuraavan viikon sää radalla: <br></br>
                    {props.data[0]}
                </div>
                <div className="markerWD">
                    {overlay}
                </div>
            </div>
        </InfoBox>
      );
}

export default MarkerOverlay;