import React from "react";
import styled, { css } from "styled-components";

import Header from "../Header";
import Footer from "../Footer";

const Main = styled.main`
  background-color: var(--otherBlack);
  color: var(--white);
  flex: 1;
  padding-top: 5%;
  padding-left: 5%;
  padding-right: 5%;
  ${({ paddingAll }) => css`
    padding: ${paddingAll};
  `}
`;

export default function PageDefault({ children, paddingAll }) {
  return (
    <>
      <Header />
      <Main paddingAll={paddingAll}>{children}</Main>
      <Footer />
    </>
  );
}
