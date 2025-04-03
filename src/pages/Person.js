import React from "react";

const Person = ({ name, age }) => {
  const style = {
    color: "blue",
    border: "1px solid black",
    padding: "10px",
    borderRadius: "5px",
    marginTop: "20px",
  };

  return (
    <div className="container" style={style}>
      <h2>{name} is {age} years old.</h2>
    </div>
  );
};

export default Person;
