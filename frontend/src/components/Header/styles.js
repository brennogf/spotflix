import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 68px;
  z-index: 100;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding-left: 5%;
  padding-right: 5%;
  background: var(--otherBlack);

  @media (max-width: 800px) {
    height: 40px;
  }
`;

export const Logo = styled.div`
  img {
    max-width: 130px;
  }

  @media (max-width: 800px) {
    img {
      max-width: 80px;
    }
  }
`;

export const MenuPrincipal = styled.div`
  ul {
    position: relative;
    list-style: none;
    color: var(--white);
    font-size: 14px;

    li {
      display: inline;
      padding: 15px;
      cursor: pointer;
      transition: opacity 0.3s;
    }

    li:hover,
    li:focus {
      opacity: 0.7;
    }

    li a {
      text-decoration: none;
    }

    @media (max-width: 800px) {
      li {
        display: none;
      }
    }
  }
`;

export const MenuPerfil = styled.div`
  position: relative;
  margin-left: auto;
  
  .profile-container {
    display: flex;
    align-items: center;
    gap: 15px;
    position: relative;
  }

  .profile-image {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    cursor: pointer;
    border: 2px solid transparent;
    transition: all 0.3s ease;
    object-fit: cover;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    
    &:hover {
      border-color: var(--primary);
      transform: scale(1.1);
      box-shadow: 0 8px 25px rgba(229, 9, 20, 0.4);
    }
  }

  .dropdown {
    position: absolute;
    top: 100%;
    right: 0;
    margin-top: 15px;
    transform-origin: top right;
    background: linear-gradient(145deg, rgba(0, 0, 0, 0.95), rgba(17, 17, 17, 0.95));
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 20px 0;
    min-width: 220px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px) scale(0.95);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1000;
    
    &::before {
      content: '';
      position: absolute;
      top: -8px;
      right: 20px;
      width: 16px;
      height: 16px;
      background: linear-gradient(145deg, rgba(0, 0, 0, 0.95), rgba(17, 17, 17, 0.95));
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-bottom: none;
      border-right: none;
      transform: rotate(45deg);
    }
    
    &.active {
      opacity: 1;
      visibility: visible;
      transform: translateY(0) scale(1);
    }
  }

  .dropdown-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 20px;
    color: var(--white);
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    transition: all 0.3s ease;
    border-left: 3px solid transparent;
    position: relative;
    overflow: hidden;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
      transition: left 0.5s;
    }
    
    &:hover {
      background: rgba(255, 255, 255, 0.1);
      border-left-color: var(--primary);
      color: var(--primary);
      transform: translateX(8px);
      
      &::before {
        left: 100%;
      }
    }
    
    &:first-child {
      border-top-left-radius: 16px;
      border-top-right-radius: 16px;
    }
    
    &:last-child {
      border-bottom-left-radius: 16px;
      border-bottom-right-radius: 16px;
    }
    
    .icon {
      font-size: 18px;
      width: 20px;
      text-align: center;
    }
  }

  .dropdown-divider {
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    margin: 8px 0;
  }

  .dropdown-header {
    padding: 8px 20px 12px;
    color: #b3b3b3;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    margin-bottom: 8px;
  }

  @media (max-width: 800px) {
    .profile-image {
      width: 35px;
      height: 35px;
    }
    
    .dropdown {
      min-width: 200px;
      right: 0;
      transform-origin: top right;
    }
  }
`;
