import styled from "styled-components";
import { IoMdPlay } from "react-icons/io";
import { AiOutlineAudioMuted } from "react-icons/ai";

export const BannerMainContainer = styled.section`
  height: 80vh;
  position: relative;
  color: #fff;
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-size: cover;
  background-position: center;

  @media (max-width: 800px) {
    height: auto;
    min-height: 50vh;
  }

  &:after,
  &:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    height: 20%;
  }

  &:before {
    top: 0;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }

  &:after {
    bottom: 0;
    background: linear-gradient(0deg, #141414 0%, transparent 100%);
  }
`;

export const ContentAreaContainer = styled.section`
  margin-left: 5%;
  margin-right: 5%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10;

  @media (max-width: 800px) {
    padding-top: 100px;
    flex-direction: column;
  }
`;

ContentAreaContainer.Item = styled.div`
  width: 50%;
  display: inline-block;
  margin-bottom: -20%;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

ContentAreaContainer.Title = styled.h2`
  font-style: normal;
  font-weight: 300;
  font-size: 40px;
  line-height: 1;
  margin-top: 0;
  margin-bottom: 32px;

  @media (max-width: 800px) {
    font-size: 32px;
    text-align: center;
  }
`;

ContentAreaContainer.Button = styled.button`
  position: relative;
  cursor: pointer;
  background-color: var(--white);
  border: 0;
  border-radius: 5px;
  font-weight: bold;
  font-size: 20px;
  width: 151px;
  height: 46px;
  display: inline-block;
  margin: 0 auto;

  @media (max-width: 800px) {
    display: block;
  }

  &:hover {
    filter: brightness(70%);
    opacity: 0.9;
    transition: all 0.1s;
  }

  span {
    position: absolute;
    margin-left: 5px;
    margin-top: 2px;
  }
`;

ContentAreaContainer.Button.Arrow = styled(IoMdPlay)`
  position: relative;
  margin-left: -80px;
`;

export const Muted = styled(AiOutlineAudioMuted)`
  position: relative;
  margin-left: 15px;
  cursor: pointer;
  color: var(--white);

  @media (max-width: 800px) {
    display: flex;
    margin: 0 auto;
    margin-top: 15px;
  }
`;
