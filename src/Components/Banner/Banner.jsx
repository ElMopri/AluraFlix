import React, { useState } from "react";
import {
  BannerBackground,
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImg,
  BannerTitle,
} from "./Banner.styled";



const Banner = ({ video }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false); // Estado para controlar si se muestra el video

  const handleOpenVideo = () => {
    setIsVideoOpen(true); // Cambia el estado a "true" para abrir el video
  };

  const handleCloseVideo = () => {
    setIsVideoOpen(false); // Cambia el estado a "false" para cerrar el video
  };

  return (
    <BannerContainer>
      
      <BannerBackground
        src={"https://media.licdn.com/dms/image/v2/C4D22AQHZDA6mRcAcmw/feedshare-shrink_800/feedshare-shrink_800/0/1669559000113?e=2147483647&v=beta&t=X8HNlpRCxaC5QegSJJ4V9nvI0D2PD2hza7uk8DzPSm8"}
        alt={video.title}
        onClick={handleOpenVideo}
        style={{ cursor: "pointer",}} 
      />

      <BannerContent>
        <div>
          <BannerTitle category={video.category}>
            {video.category}
          </BannerTitle>
          <BannerDescription>{video.description}</BannerDescription>
        </div>
        <BannerImg
          src={video.photo}
          alt={video.title}
          onClick={handleOpenVideo} 
          style={{ cursor: "pointer" }}
        />
      </BannerContent>

      {isVideoOpen && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 999,
            width: "80%",
            height: "80%",
            backgroundColor: "black",
          }}
        >
          <iframe
            width="100%"
            height="100%"
            src={video.link}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
  
          <div
            onClick={handleCloseVideo}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              cursor: "pointer",
              fontSize: "30px",
              color: "white",
            }}
          >
            ✖
          </div>
        </div>
      )}
    </BannerContainer>
  );
};

export default Banner;
