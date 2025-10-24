import styled, { keyframes } from "styled-components";

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideUp = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-100px);
  }
`;

export const ToastContainer = styled.div`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  width: 100%;
  max-width: 500px;
  padding: 0 20px;
`;

export const ToastMessage = styled.div`
  background: ${({ type }) =>
    type === 'success'
      ? 'linear-gradient(135deg, #4ecdc4, #26a69a)'
      : 'linear-gradient(135deg, #ff6b6b, #ff5252)'
  };
  color: white;
  padding: 16px 20px;
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  animation: ${slideDown} 0.3s ease-out;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${({ type }) =>
    type === 'success'
      ? 'linear-gradient(90deg, #4ecdc4, #26a69a)'
      : 'linear-gradient(90deg, #ff6b6b, #ff5252)'
  };
  }

  .toast-content {
    display: flex;
    align-items: center;
    gap: 12px;
    position: relative;
    z-index: 1;
  }

  .toast-icon {
    font-size: 20px;
    flex-shrink: 0;
  }

  .toast-message {
    flex: 1;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.4;
  }

  .toast-close {
    background: none;
    border: none;
    color: white;
    font-size: 20px;
    cursor: pointer;
    padding: 0;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: all 0.3s ease;
    flex-shrink: 0;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: scale(1.1);
    }
  }

  @media (max-width: 768px) {
    margin: 0 10px;
    padding: 14px 16px;
    
    .toast-message {
      font-size: 13px;
    }
  }
`;
