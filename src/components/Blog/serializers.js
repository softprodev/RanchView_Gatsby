import React from "react";
import getYouTubeId from "get-youtube-id";
import YouTube from "react-youtube";

const serializers = {
  types: {
    youtube: ({ node }) => {
      const { url } = node;
      const id = getYouTubeId(url);
      return <YouTube videoId={id} />;
    },
    iframe: ({ node }) => {
      const { url, height } = node;
      return (
        <iframe title="Irame" src={url} width="100%" height={`${height}px`} />
      );
    },
  },
};

export default serializers;
