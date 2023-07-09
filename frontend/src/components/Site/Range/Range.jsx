import React, { useState } from 'react';
import './Range.scss';
import { Slider } from 'antd';

const Range = ({ handleFilter }) => {
  const [range, setRange] = useState([0, 10000]);

  const handleRange = (value) => {
    setRange(value);
    handleFilter(value); // Call the handleFilter function from the parent component
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
    </>
  );
};

export default Range;
