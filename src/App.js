import React, { useState } from 'react';
import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from './components/Banner';
import satData from './components/satData';

function App() {
  const [sat, setSat] = useState(satData);

  // Create the displaySats variable to hold unique orbitType values
  const displaySats = [...new Set(satData.map((data) => data.orbitType))];

  // Create the filterByType arrow function
  const filterByType = (currentType) => {
    const newSatDisplay = satData.filter((satellite) => satellite.orbitType === currentType);
    setSat(newSatDisplay);
  }

  return (
    <div>
      <Banner />
      <Buttons displaySats={displaySats} filterByType={filterByType} setSat={setSat} />
      <Table sat={sat} />
    </div>
  );
}

export default App;
