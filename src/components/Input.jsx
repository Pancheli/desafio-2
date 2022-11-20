import React from "react";

const Input = ({ name, password }) => {
  return (
    <>
      <div className="input-text">
        <input
          type="text"
          className="form-control"
          onChange={(e) => name[1](e.target.value)}
          placeholder="Ingrese el nombre"
        />
      </div>
      <div className="input-text">
        <input
          type="password"
          className="form-control"
          onChange={(e) => password[1](e.target.value)}
          placeholder="Ingrese password"
        />
      </div>
    </>
  );
};

export default Input;
