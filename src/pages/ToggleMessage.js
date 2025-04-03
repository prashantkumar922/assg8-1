import React, { useState } from "react";
import styles from "../components/styles/ToggleMessage.module.css";

const ToggleMessage = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="container mt-4">
      <button className="btn btn-primary" onClick={() => setVisible(!visible)}>
        Toggle Message
      </button>
      <p className={visible ? styles.visible : styles.hidden}>
        Hello World
      </p>
    </div>
  );
};

export default ToggleMessage;
