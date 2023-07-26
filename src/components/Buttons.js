// components/Buttons.js

import React from 'react';
import satData from './satData'; // Adjust the path based on your project structure
import './styling.css'; // Import the styling for the Buttons component

function Buttons({ displaySats, filterByType, setSat }) {
  return (
    <div>
      {/* First button */}
      {displaySats.map((sat, id) => {
        return (
          <button onClick={() => filterByType(sat)} key={id}>
            {sat} Orbit
          </button>
        );
      })}

      {/* Second button */}
      <button onClick={() => setSat(satData)}>All Satellites</button>
    </div>
  );
}

export default Buttons;
