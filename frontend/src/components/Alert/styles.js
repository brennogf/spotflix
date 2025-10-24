import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const AlertContainer = styled.div`
  .alert {
    padding: 16px 20px;
    background: ${({ type }) => {
    switch (type) {
      case "danger":
        return "linear-gradient(135deg, #ff6b6b, #ff5252)";
      case "success":
        return "linear-gradient(135deg, #4ecdc4, #26a69a)";
      default:
        return "linear-gradient(135deg, #74b9ff, #0984e3)";
    }
  }};
    color: white;
    margin-bottom: 20px;
    border-radius: 12px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    animation: ${slideIn} 0.3s ease-out;
    position: relative;
    overflow: hidden;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: rgba(255, 255, 255, 0.3);
    }
  }

  .closebtn {
    margin-left: 15px;
    color: white;
    font-weight: bold;
    float: right;
    font-size: 20px;
    line-height: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
    padding: 4px 8px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    
    &:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: scale(1.1);
    }
  }
`;
