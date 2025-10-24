import React, { useEffect, useState } from "react";
import { ToastContainer, ToastMessage } from "./styles";

export default function Toast({ message, type, isVisible, onClose }) {
  const [show, setShow] = useState(isVisible);

  useEffect(() => {
    setShow(isVisible);
    if (isVisible) {
      const timer = setTimeout(() => {
        setShow(false);
        onClose();
      }, 5000); // Auto close after 5 seconds

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!show) return null;

  return (
    <ToastContainer>
      <ToastMessage type={type}>
        <div className="toast-content">
          <span className="toast-icon">
            {type === 'success' ? '✅' : '❌'}
          </span>
          <span className="toast-message">{message}</span>
          <button className="toast-close" onClick={() => { setShow(false); onClose(); }}>
            ×
          </button>
        </div>
      </ToastMessage>
    </ToastContainer>
  );
}
