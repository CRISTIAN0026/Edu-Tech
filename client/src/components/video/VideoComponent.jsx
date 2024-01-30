import React from 'react';
import YouTube from 'react-youtube';
import { Box } from '@mui/material'

const VideoComponent = () => {
  const videoId = '7iobxzd_2wY';

  const opts = {
    height: '590',
    width: '840',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <Box>
      <YouTube videoId={videoId} opts={opts} />
    </Box>
  );
};

export default VideoComponent;
