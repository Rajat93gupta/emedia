'use client'
import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import { RecentPost } from "@/utils/RecentPost";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { tags } from "@/utils/RecentPost";
const BlogSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentPosts = RecentPost?.slice(indexOfFirstPost, indexOfLastPost);
  return (
    <>
      <Box height={60} />
      <Grid container spacing={2}>
        <Grid
          size={{ md: 8, xs: 12 }}
          sx={{
            display: "flex",
            flexDirection: "column"
          }}
        >
          {currentPosts?.slice(0, 4)?.map((item) => (
            <Box key={item.id} sx={{ mb: 4, display: "flex" }}>
              <Grid size={{ md: 6, xs: 12 }}>
                <Box
                  component="img"
                  src={item.image} 
                  sx={{
                    height: "300px",
                    width: "100%",
                    maxWidth: "400px",
                    borderRadius: "20px",
                  }}
                />
              </Grid>
              <Grid
                size={{ md: 6, xs: 12 }}
                sx={{
                  p: 2,

                }}
              >
                <Typography
                  component="span"
                  sx={{
                    display: "inline-block",
                    background: "#e8e8e8",
                    p: 1,
                    borderRadius: "20px",
                  }}
                >
                  Design
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "600",
                    my: 2,
                  }}
                >
                  {item.description} {/* Dynamic description */}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "1rem",
                    my: 2,
                  }}
                >
                  {item.descritpion} {/* Dynamic content */}
                </Typography>
                <Divider />
                <Box
                  component="div"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    my: 3,
                  }}
                >
                  <Box
                    component="div"
                    sx={{
                      display: "flex",
                      gap: 3,
                    }}
                  >
                    <Box component="img" src={item.userimage} sx={{ width: 40, height: 40, borderRadius: "50%" }} />
                    <Box>
                      <Typography>{item.author}</Typography>
                      <Typography>{item.time}</Typography>
                    </Box>
                  </Box>
                  <Typography component="a" href="#" sx={{ cursor: "pointer" }}>
                    Read More
                  </Typography>
                </Box>
              </Grid>
            </Box>
          ))}
        </Grid>

        <Grid size={{ md: 4, xs: 12 }}>
          {/*   Recent Post */}
          <Typography variant="h5" sx={{ my: 2 }}>
            Recent Post
          </Typography>
          {RecentPost.slice(0, 5).map((post) => (
            <Box
              key={post.id}
              component="div"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 3,
              }}
            >
              <Box
                component="img"
                src={post.image}
                sx={{
                  height: "100px",
                  width: "100%",
                  maxWidth: "100px",
                  borderRadius: "20px",
                }}
              />
              <Box
                component="div"
                sx={{
                  pl: 3,
                }}
              >
                <Typography variant="h6">{post.description}</Typography>
                <Typography>{post.time}</Typography>
              </Box>
            </Box>
          ))}
          {/*  Categories */}
          <Typography variant="h5" sx={{ my: 2 }}>Categories</Typography>
          {
            RecentPost.map((post) => (
              post.Category?.map((item, index) => (
                <ul style={{ padding: "0 22px" }} key={index}>
                  <li>{item}</li>
                </ul>
              ))
            ))
          }
          {/*  Tags */}
          <Typography variant="h5" sx={{ my: 3 }}>Tags</Typography>
          {
            tags.map((item, index) => (
              <Typography key={index} sx={{ m: 1, display: "inline-block", background: "#e8e8e8", p: 1, borderRadius: "20px", marginRight: "8px" }}>
                {item}
              </Typography>
            ))
          }

          {/*  News letter */}
          <Typography variant="h5" sx={{ my: 3, px:1 }}>News Letter</Typography>
          <Box sx={{
            display:"flex",
            flexDirection:'column',
            p:2,
            bgcolor:"#fff",
            borderRadius:"20px"
          }}>
            <Typography variant="h4" sx={{my:1}}>Join our Newsletter</Typography>
            <Typography sx={{my:3}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit ipsum quo nihil ipsam sapiente. Suscipit, rerum!</Typography>
            <TextField placeholder="Your Email Adddress"/>
            <Button variant="contained" sx={{my:2}}>Click Here</Button>
          </Box>

        </Grid>

        {/* Pagination */}
        <Grid size={{ md: 8, xs: 12 }}
          sx={{
            display: 'flex',
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Stack spacing={2}>
            <Pagination
              count={Math.ceil(RecentPost.length / postsPerPage)}
              size="large"
              page={currentPage}
              onChange={handlePageChange}
            />
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default BlogSection;
