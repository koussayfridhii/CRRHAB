import React from "react";
import "./VideoPlayer.scss";
import { Player } from "video-react";
const VideoPlayer = () => {
  return (
    <iframe
      width={280}
      height={180}
      src="https://www.youtube.com/embed/EP330iQIez0"
      title="FruitFlyNet-ii: Assessment of peach orchards in khlidia, Tunisia"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen=""
    />
  );
};

export default VideoPlayer;
