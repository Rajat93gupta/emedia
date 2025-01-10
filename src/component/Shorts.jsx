import React from 'react';
import { Box, AppBar, Toolbar, Typography, IconButton, Grid2, Card, CardMedia, CardContent } from '@mui/material';



const videoData = [
  {
    title: 'Sample Video 1',
    thumbnail: '/vedio1.png',
    description: 'This is a sample video description.',
    sponsered:" sponsered by:",

  },
  {
    title: 'Sample Video 2',
    thumbnail: '/vedio2.png',
    description: 'Another sample video description.',
    sponsered:" sponsered by:",

  },
  {
    title: 'Sample Video 2',
    thumbnail: '/vedio3.png',
    description: 'Another sample video description.',
    sponsered:" sponsered by:",

  },
];

const Shorts = () => {
  return (
    <>
      <Box display="flex" sx={{marginTop:"60px"}}>
        <Box flexGrow={1} p={2}>
          <Grid2 container spacing={3}>
            {videoData.map((video, index) => (
              <Grid2 item xs={12} sm={6} md={4} key={index} sx={{width:"400px"}}>
                <Card>
                  <CardMedia
                    component="img"
                    alt={video.title}
                    height="240"
                    image={video.thumbnail}
                  />
                  <CardContent>
                    <Typography variant="h6">{video.title}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {video.description}
                    </Typography>
                    <Typography variant="p" color="textSecondary" sx={{fontWeight:"600"}}>
                      {video.sponsered}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid2>
            ))}
          </Grid2>
        </Box>
      </Box>
    </>
  );
};

export default Shorts;
