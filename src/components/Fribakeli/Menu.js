/*eslint-disable*/
import React from "react";
import { isPropertySignature } from "typescript";


function IndexHeader() {

  return (
      <div className="menu">
        <input type="text" placeholder="Hae frisbeegolfrataa" id="filter"></input>
        <div>
          <label for="priority" id="priorityText">Prioriteetti</label>
          <button id="priority">Sää</button>
        </div>
        <div>
          <label for="date" id="date">Päivämäärä</label>
          <button >1.1.2021</button>
        </div>
      </div>
  );
}

export default IndexHeader;