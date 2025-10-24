import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: var(--otherBlack);
  color: var(--white);
  font-size: 13px;

  @media (max-width: 1000px) {
    display: block;
    margin: 0 auto;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 12rem;

  a {
    padding-right: 1rem;
  }

  @media (max-width: 1000px) {
    margin-left: 0rem;
  }
`;

export const Copyright = styled.p`
  color: var(--gray);
  font-size: 11px;
  text-align: center;

  @media (max-width: 1000px) {
    margin-left: 0rem;
  }
`;
