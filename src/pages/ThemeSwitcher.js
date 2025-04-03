import React, { useState } from "react";

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "bg-dark text-light" : "bg-light text-dark"} style={{ height: "100vh" }}>
      <div className="container p-4">
        <h2>Theme Switcher</h2>
        <button className="btn btn-warning" onClick={() => setDarkMode(!darkMode)}>
          Toggle {darkMode ? "Light" : "Dark"} Mode
        </button>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
