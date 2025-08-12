import React, { useEffect } from "react";
import "./Snackbar.css";

type ToastbarProps = {
  open: boolean;
  message: string;
  severity?: "success" | "error" | "warning" | "info"; // Optional with limited values
  onClose: () => void;
};

const Toastbar: React.FC<ToastbarProps> = ({ open, message, severity = "info", onClose }) => {
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        onClose();
      }, 6000); // Auto-close after 6 seconds

      return () => clearTimeout(timer);
    }
  }, [open, onClose]);

  return (
    <div className={`flex items-center justify-between custom-snackbar ${open ? "show" : ""} ${severity}`} role="alert">
      {message}
      <p className="close-btn hover:scale-150" onClick={onClose}>
        &times;
      </p>
    </div>
  );
};

export default Toastbar;
