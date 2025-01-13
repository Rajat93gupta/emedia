"use client";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { RecentPost } from "@/utils/RecentPost";
import { useParams } from "next/navigation";
import RecentBlogs from "@/component/Blog/RecentBlogs";

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
                  sx={{ fontWeight: 600 }}
                  variant="h4"
                  component="h1"
                >
                  Creating an Awesome WordPress Theme
                </Typography>
                <Typography component="span">
                  {item.author} || {item.time}
                </Typography>
                <Typography variant="body1" component="p" sx={{ my: 4 }}>
                  Welcome to WordPress. This is your first
                </Typography>
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
