import React, { useState } from "react";
import { Link } from "react-router-dom";
import { VideoCardContainer, VideoOverlay, VideoPreview } from "./styles";

function getYouTubeId(youtubeURL) {
  return youtubeURL.replace(
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
    "$7"
  );
}

function VideoCard({ videoURL, videoTitle }) {
  const [isHovered, setIsHovered] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const timerRef = React.useRef(null);
  const image = `https://img.youtube.com/vi/${getYouTubeId(
    videoURL
  )}/hqdefault.jpg`;
  const link = `../player/${getYouTubeId(videoURL)}`;
  const youtubeId = getYouTubeId(videoURL);
  const embedUrl = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=0&volume=5&controls=0&showinfo=0&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1&loop=1&playlist=${youtubeId}`;

  const handleMouseEnter = () => {
    setIsHovered(true);
    timerRef.current = setTimeout(() => {
      setShowPreview(true);
    }, 600);
  };

  const handleMouseLeave = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setIsHovered(false);
    setShowPreview(false);
  };

  return (
    <VideoCardContainer
      url={image}
      title={videoTitle}
      isHovered={isHovered}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showPreview && (
        <VideoPreview>
          <iframe
            src={embedUrl}
            title={videoTitle}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoPreview>
      )}

      <VideoOverlay>
        <Link to={link} className="overlay-link">
          <div className="video-info">
            <h3>{videoTitle}</h3>
            <div className="actions">
              <button className="play-button">▶</button>
            </div>
          </div>
        </Link>
      </VideoOverlay>
    </VideoCardContainer>
  );
}

export default VideoCard;
