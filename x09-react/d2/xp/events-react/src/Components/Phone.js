
import React, { useState } from 'react';

function Phone() {
  const [phoneDetails, setPhoneDetails] = useState({
    brand: "Samsung",
    model: "Galaxy S20",
    color: "black",
    year: 2020,
  });

  const changeColor = () => {
    setPhoneDetails((prevDetails) => ({
      ...prevDetails,
      color: "blue",
    }));
  };

  return (
    <div>
      <h2>Phone Details:</h2>
      <p>Brand: {phoneDetails.brand}</p>
      <p>Model: {phoneDetails.model}</p>
      <p>Color: {phoneDetails.color}</p>
      <p>Year: {phoneDetails.year}</p>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default Phone;
