import React from "react";
import "./VideoPlayer.scss";
import { Player } from "video-react";
const VideoPlayer = ({ source, posterImg }) => {
  return (
    <Player muted={true} autoPlay={false} poster={posterImg} src={source} />
  );
};

export default VideoPlayer;
