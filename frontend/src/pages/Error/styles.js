import styled from "styled-components";

export const ErrorContainer = styled.div``;

// Header
export const HeaderError = styled.header`
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

// Logo da Netflix
HeaderError.Logo = styled.div`
  img {
    max-width: 92.5px;
  }

  @media (max-width: 800px) {
    img {
      max-width: 50px;
    }
  }
`;

export const ErrorContent = styled.div`
  margin-left: 5%;
  margin-top: 40%;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: var(--white);

  @media (max-width: 800px) {
    margin-left: -10%;
    margin-top: 140%;
  }
`;

ErrorContent.Title = styled.h1`
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.57);

  @media (max-width: 800px) {
    margin-left: 15%;
  }
`;

ErrorContent.Description = styled.h2`
  margin-top: -3%;
  width: 80%;
  text-align: center;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.57);

  @media (max-width: 800px) {
    width: 100%;
  }
`;

ErrorContent.Button = styled.button`
  margin-bottom: -10%;
  position: relative;
  cursor: pointer;
  background-color: var(--white);
  border: 0;
  border-radius: 5px;
  font-weight: bold;
  font-size: 18px;
  width: 260px;
  height: 45px;

  @media (max-width: 800px) {
  }

  &:hover {
    opacity: 0.7;
    transition: opacity 0.1s;
  }
`;
