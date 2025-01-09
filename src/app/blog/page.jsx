import SideBar from "@/component/SideBar";
import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";

const page = () => {
  return (
    <Container>
      <Box component="div">
        <Grid container spacing={2}>
          <Grid size={4}>
            <SideBar />
          </Grid>
          <Grid size={8}>
            <Box>edew</Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default page;
