import styled from "styled-components";

export const VideoCardGroupContainer = styled.section`
  color: white;
  min-height: 300px;
  margin-left: 5%;
  margin-bottom: 50px;
  overflow: visible;
`;

export const CategoryLink = styled.a`
  position: relative;
  font-weight: bold;
  text-decoration: none;
  font-size: 20px;

  a {
    text-decoration: none;

    &:hover {
      opacity: 0.8;
      transition: opacity 0.3s;
    }
  }

  @media (max-width: 800px) {
    display: block;
    margin-bottom: 16px;
  }
`;
