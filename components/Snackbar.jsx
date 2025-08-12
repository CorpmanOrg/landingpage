"use client";

import { useEffect } from "react";
import "./Snackbar.css";

const Snackbar = ({ open, message, severity, onClose }) => {
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        onClose();
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [open, onClose]);

  return (
    <div className={`custom-snackbar ${open ? "show" : ""} ${severity}`} role="alert">
      {message}
      <span className="close-btn" onClick={onClose}>
        {" "}
        &times;
      </span>
    </div>
  );
};

export default Snackbar
