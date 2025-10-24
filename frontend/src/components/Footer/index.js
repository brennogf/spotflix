import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import {
  TiSocialInstagram,
  TiSocialTwitter,
  TiSocialYoutube,
} from "react-icons/ti";

import { FooterContainer, Copyright, SocialIcons } from "./styles";

export default function Footer() {
  return (
    <FooterContainer>
      <SocialIcons>
        <a href="https://www.facebook.com/">
          <AiFillFacebook color="gray" size="35" />
        </a>
        <a href="https://instagram.com/">
          <TiSocialInstagram color="gray" size="35" />
        </a>
        <a href="https://twitter.com/">
          <TiSocialTwitter color="gray" size="35" />
        </a>
        <a href="https://www.youtube.com/">
          <TiSocialYoutube color="gray" size="35" />
        </a>
      </SocialIcons>
      <Copyright>&#169; 2020-2021 Spotflix</Copyright>
    </FooterContainer>
  );
}
