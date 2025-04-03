import React, { useState } from "react";

const PasswordToggle = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="container mt-4">
      <input type={visible ? "text" : "password"} className="form-control" placeholder="Enter password" />
      <button className="btn btn-secondary mt-2" onClick={() => setVisible(!visible)}>
        {visible ? "Hide" : "Show"} Password
      </button>
    </div>
  );
};

export default PasswordToggle;
