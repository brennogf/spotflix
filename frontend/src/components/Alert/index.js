import React, { useState } from "react";

import { AlertContainer } from "./styles";

export default function Alert({ children, type }) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AlertContainer type={type}>
      <div className="alert">
        <span
          className="closebtn"
          onClick={() => setIsVisible(false)}
        >
          &times;
        </span>
        {children}
      </div>
    </AlertContainer>
  );
}
