import React from "react";
import officeImage from "./images/office.jpg";

function App() {

  const office = {
    name: "DBS",
    rent: 50000,
    address: "Chennai"
  };

  return (
    <div style={{ marginLeft: "130px", marginTop: "40px" }}>

      <h1>Office Space , at Affordable Range</h1>

      <img
        src={officeImage}
        alt="Office"
        width="220"
        height="170"
      />

      <h1>Name: {office.name}</h1>

      <h3
        style={{
          color: office.rent < 60000 ? "red" : "green"
        }}
      >
        Rent: Rs. {office.rent}
      </h3>

      <h3>Address: {office.address}</h3>

    </div>
  );
}

export default App;