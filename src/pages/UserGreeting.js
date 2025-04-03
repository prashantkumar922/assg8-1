import React, { useState } from "react";

const UserGreeting = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="container mt-4">
      <h2>{loggedIn ? "Welcome back!" : "Please log in"}</h2>
      <button className="btn btn-success" onClick={() => setLoggedIn(!loggedIn)}>
        {loggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default UserGreeting;
