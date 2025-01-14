
import BlogSection from "@/component/Blog/BlogSection";
import Siderbar from "@/component/Siderbar";
import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";

const page = () => {
  return (
   
      <Box component="div">
        <Grid container spacing={2}>
          <Grid size={12}>
            {/* <Siderbar /> */}
            <BlogSection/>
          </Grid>
         
        </Grid>
        
      </Box>
  );
};

export default page;
