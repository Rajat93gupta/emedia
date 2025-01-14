"use client";
import { Box, Container, Divider, Typography } from "@mui/material";
import React from "react";
import { RecentPost } from "@/utils/RecentPost";
import { useParams } from "next/navigation";
import RecentBlogs from "@/component/Blog/RecentBlogs";
import ThumbUpAltSharpIcon from '@mui/icons-material/ThumbUpAltSharp';
import MessageSharpIcon from '@mui/icons-material/MessageSharp';
import TurnedInSharpIcon from '@mui/icons-material/TurnedInSharp';
import IosShareSharpIcon from '@mui/icons-material/IosShareSharp';
import MoreHorizSharpIcon from '@mui/icons-material/MoreHorizSharp';
const SingleBlog = () => {
  const id = useParams();
  const singleId = id.singleBlog;
  console.log(singleId);

  const filterData = RecentPost.filter((post) => {
    console.log(post.id, singleId);
    return Number(post.id) === Number(singleId);
  });

  console.log(filterData);

  return (
    <>
      <Box height={60} />
      <Container sx={{ mt: 2 }}>
        {filterData.map((item) => {
          return (
            <Box key={item.id}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <Box
                  component="img"
                  src={item.image}
                  sx={{
                    maxWidth: "100%",
                    width: "100%",
                    objectFit: "cover",
                    height: "400px",
                    borderRadius: "30px",
                  }}
                />
              </Box>
              <Box sx={{ px: { md: "10rem" }, mt: 3 }}>
                {/* <Typography
                  component="span"
                  sx={{
                    display: "inline-block",
                    background: "#e8e8e8",
                    p: 1,
                    borderRadius: "20px",
                  }}
                >
                  Design
                </Typography> */}
                <Typography
                  sx={{ fontWeight: 600 }}
                  variant="h4"
                  component="h1"
                >
                  Creating an Awesome WordPress Theme
                </Typography>
                
                <Typography component="span">
                  {item.author} || {item.time}
                </Typography>
                <Box sx={{my:1}}>
                  <Divider/>
                  {/* <Typography variant="body1" component="p" sx={{ my: 1 }}>
                  Welcome to WordPress. This is your first
                </Typography> */}
                <Box component="div" sx={{display:"flex",my:2, justifyContent:"space-between"}}>
                  <Box component="div" sx={{
                    display:"flex",
                    gap:"40px"
                  }}>
                    <Box component="span" sx={{display:"flex", cursor:"pointer"}}> <ThumbUpAltSharpIcon/>  <span style={{paddingLeft:"10px"}}>1.7K</span></Box>
                    <Box component="span" sx={{display:"flex", cursor:"pointer"}}> <MessageSharpIcon/> <span style={{paddingLeft:"10px"}}>10</span></Box>
                   

                  </Box>
                  <Box component="div" sx={{
                    display:"flex",
                    gap:"20px"
                  }}>
                  <Box component="span" sx={{display:"flex", cursor:"pointer"}}> <TurnedInSharpIcon/></Box>
                    <Box component="span" sx={{display:"flex", cursor:"pointer"}}> <IosShareSharpIcon/></Box>
                    <Box component="span" sx={{display:"flex", cursor:"pointer"}}> <MoreHorizSharpIcon/></Box>
                  </Box>

                </Box>
                  <Divider/>
                </Box>
               
                <Typography
                  variant="h4"
                  component="h4"
                  sx={{ fontWeight: 500 }}
                >
                  Efficiently strategize just in time process
                </Typography>
                <Typography component="p" variant="body1" sx={{ mt: 2 }}>
                  Globally maintain multifunctional products before ubiquitous
                  applications. Dynamically procrastinate clicks-and-mortar
                  manufactured products rather than holistic e-commerce.
                  Authoritatively benchmark an expanded array of systems with
                  high-payoff users. Proactively target dynamic opportunities
                  and strategic expertise. Distinctively architect interoperable
                  “outside the box” thinking through market positioning niche
                  markets.
                </Typography>
                <Typography component="p" variant="body1" sx={{ mt: 2 }}>
                  Enthusiastically coordinate one-to-one meta-services whereas
                  accurate ideas. Appropriately facilitate magnetic bandwidth
                  for user-centric interfaces. Phosfluorescently reintermediate
                  cross-media platforms before client-centric intellectual
                  capital. Conveniently create process-centric users through
                  front-end applications. Seamlessly reintermediate accurate
                  opportunities with 2.0 vortals.
                </Typography>
              </Box>
            </Box>
          );
        })}

      </Container>
      <RecentBlogs />

    </>
  );
};

export default SingleBlog;
