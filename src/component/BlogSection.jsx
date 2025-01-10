import { Box, Divider, Typography, } from '@mui/material'
import React from 'react'
import Grid from '@mui/material/Grid2';

const BlogSection = () => {
  return (
    <>
      <Box height={60} />
      <Grid container spacing={2}>
        <Grid size={{md:8, xs:12}} sx={{
          display: "flex"
        }}>
          <Grid size={{md:6, xs:12}}>
            <Box component="img"
              src='./street.jpg'
              sx={{
                height: "300px",
                width: "100%",
                maxWidth: "400px",
                borderRadius: "20px"
              }}

            />

          </Grid>
          <Grid size={{md:6, xs:12}} sx={{
            p: 2
          }}>
            <Typography component="span" sx={{
              display: "inline-block",
              background: "#e8e8e8",
              p: 1,
              borderRadius: "20px"
            }}>
              Desgin
            </Typography>
            <Typography variant='h5' sx={{
              fontWeight: "600",
              my: 2
            }}>
              UI vs. UX: What’s the difference?
            </Typography>
            <Typography sx={{
              fontSize: "1rem",
              my: 2
            }}>
              Completely formulate integrated methods Globally maintain multifunctional...

            </Typography>
            <Divider />
            <Box component="div" sx={{
              display: "flex",
              justifyContent: "space-between",
              my: 3
            }}>
              <Box component="div" sx={{
                display: "flex",
                gap: 3
              }}>
                <Box component="img"
                  src='./icon.png'
                />
                <Box>
                  <Typography>Mad Sparrow</Typography>
                  <Typography>August 9, 2022 </Typography>
                </Box>

              </Box>
              <Box>
                Read More
              </Box>

            </Box>

          </Grid>


        </Grid>
        <Grid size={{md:4, xs:12}}>
        <Typography variant='h5' sx={{my:2}}>Recent Post</Typography>
          <Box component="div" sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}>
            

            <Box component="img"
              src='./street.jpg'
              sx={{
                height: "100px",
                width: "100%",
                maxWidth: "100px",
                borderRadius: "20px"
              }}

            />
            <Box component="div" sx={{
              pl:3
            }}>
              <Typography variant='h6'>
                UI vs. UX: What’s the difference?</Typography>
              <Typography>
                August 9 , 2022
              </Typography>
            </Box>
          </Box>

        </Grid>

      </Grid>
    </>

  )
}

export default BlogSection