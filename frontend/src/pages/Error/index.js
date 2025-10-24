import React from "react";

import { ErrorContainer, HeaderError, ErrorContent } from "./styles";
import GlobalStyle from "../../styles";

import ImageError from "../../assets/img/image_error.png";
import LogoSpotflix from "../../assets/img/logo.png";

export default function Error() {
  return (
    <>
      <GlobalStyle errorPage={ImageError} />
      <ErrorContainer>
        <HeaderError>
          <HeaderError.Logo>
            <a href="/">
              <img src={LogoSpotflix} alt="Netflix" />
            </a>
          </HeaderError.Logo>
          <ErrorContent>
            <ErrorContent.Title>
              <h1>Você se perdeu?</h1>
            </ErrorContent.Title>
            <ErrorContent.Description>
              Infelizmente, não localizamos essa página. Você encontra muitos
              outros títulos na página inicial.
            </ErrorContent.Description>
            <a href="/">
              <ErrorContent.Button>
                Página inicial da Spotflix
              </ErrorContent.Button>
            </a>
          </ErrorContent>
        </HeaderError>
      </ErrorContainer>
    </>
  );
}
