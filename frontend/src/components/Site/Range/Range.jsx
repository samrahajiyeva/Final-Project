import React, { useState } from 'react';
import './Range.scss';
import { Slider } from 'antd';




const App = () => {
  const [range, setRange] = useState([5000,8000]);
  
  const handleRange = (value) => {
    setRange(value)
  };
  return (
    <>

      <Slider
        range
        min={0}
        max={10000}
        step={10}
        value={range}
        onChange={handleRange}
      />
        <span>${range[0]} - ${range[1]}</span>
              <button>Filter</button>
    </>
  );
};

export default App;
