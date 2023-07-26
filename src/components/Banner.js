// components/Banner.js

// components/Banner.js

import React from 'react';
import './styling.css'; // Import the styling for the Banner component

function Banner() {
  return (
    <header>
      <h1>Orbit Report</h1>
      <p>
        Welcome to Orbit Report! This application displays information about satellites in orbit.
        Use the buttons to filter and view specific data.
      </p>
      <p>Click on the buttons to see the satellites in that orbit type</p> {/* Fixing missing paragraph tag */}
    </header>
  );
}


export default Banner;
