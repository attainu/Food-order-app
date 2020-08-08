import React from "react";

const CategoriePage = ({ name }) => {
  console.log(name)
  return (
    <div className="flip-card">
      <div className="flip-card-front">
        <h1>{name}</h1>
      </div>
    </div>
  );
};

export default CategoriePage;
