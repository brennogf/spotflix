import styled from "styled-components";

export const VideoCardContainer = styled.div`
  cursor: pointer;
  color: white;
  width: 230px;
  height: 130px;
  overflow: visible;
  flex: 0 0 298px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: flex-end;
  transition: transform 0.3s ease;
  border-radius: 4px;
  z-index: ${({ isHovered }) => (isHovered ? '10' : '1')};
  transform: scale(1);
  
  &:hover {
    transform: scale(1.8);
    z-index: 10;
  }

  &:not(:hover) {
    transform: scale(1);
    z-index: 1;
  }

  &:not(:first-child) {
    margin-left: 20px;
  }
`;

export const VideoPreview = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  border-radius: 4px;
  overflow: hidden;
  z-index: 2;
  pointer-events: none;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
    pointer-events: none;
  }
`;

export const VideoOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.9));
  padding: 10px;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 3;
  pointer-events: none;

  ${VideoCardContainer}:hover & {
    opacity: 1;
    pointer-events: auto;
  }

  .overlay-link {
    text-decoration: none;
    color: white;
  }

  .video-info {
    h3 {
      margin: 0 0 8px 0;
      font-size: 14px;
      font-weight: 600;
      color: white;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .actions {
      display: flex;
      gap: 8px;

      .play-button {
        background: white;
        border: none;
        color: black;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.2s ease;

        &:hover {
          background: rgba(255, 255, 255, 0.9);
          transform: scale(1.1);
        }
      }
    }
  }
`;
