import React from "react";
import FIN from "assets/img/flags/FI.png";
import ENG from "assets/img/flags/GB.png";
import SWE from "assets/img/flags/SE.png";
import Fribalogo from "assets/img/fribalogo.svg"

// Changing the language to finnish
const changeFin = () => {
  document.getElementById('date').innerHTML = 'Päivämäärä';
  document.getElementById('priorityText').innerHTML = 'Prioriteetti';
  document.getElementById('priority').innerHTML = 'Sää';
  document.getElementById('filter').placeholder = 'Hae frisbeegolfrataa';
};

// Changing the language to english
const changeEng = () => {
    document.getElementById('date').innerHTML = 'Date';
    document.getElementById('priorityText').innerHTML = 'Priority';
    document.getElementById('priority').innerHTML = 'Weather';
    document.getElementById('filter').placeholder = 'Search for a course';
  };

// Changing the language to swedish
const changeSwe = () => {
  document.getElementById('date').innerHTML = 'Datum';
  document.getElementById('priorityText').innerHTML = 'Prioritet';
  document.getElementById('priority').innerHTML = 'Väder';
  document.getElementById('filter').placeholder = 'Sök för ett plan';
};

// The header section
function Header() {

  return (
    <div className="headerFrib">
      <img src={Fribalogo}></img>
      <h1 className="headerText">FRIBAKELI</h1>
      <div className="langDiv">
        <button onClick={changeFin}>
          <img src={FIN}></img>
        </button >
        <button onClick={changeEng}>
          <img src={ENG}></img>
        </button >
        <button onClick={changeSwe}>
          <img src={SWE}></img>
        </button>
      </div>
    </div>
  );
}

export default Header;
