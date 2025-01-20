import React from "react";
import { useVideoContext } from "../../Contexts/VideoContext";
import Card from "../Card/Card";
import { CategoryTitle, VideoList } from "./CategoryVideos.styled";

const CategoryVideos = () => {
  const { videoCategory } = useVideoContext();
  const categoryColors = {
    "FRONT END": "#33c1ff",
    "BACK END": "#75ff33",
    "INNOVACIÓN Y GESTIÓN": "#ff5733",
  };

  return (
    <div>
      {Object.keys(videoCategory).map((category) => (
        <div key={category}>
          <CategoryTitle style={{
      backgroundColor: ` ${categoryColors[category] || "#ccc"}`,
    }}>{category}</CategoryTitle>
          <VideoList>
            {videoCategory[category].map((video) => (
              <Card key={video.id} video={video} />
            ))}
          </VideoList>
        </div>
      ))}
    </div>
  );
};

export default CategoryVideos;
