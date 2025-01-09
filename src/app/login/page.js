"use client"
import React from 'react';


import {
  Box,
  TextField,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid2 from '@mui/material/Grid2';

const theme = createTheme();


export default function Login() {
  const customTheme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Grid2
        container
        style={{
          height: '100vh',
          width: '100vw',
        }}
      >
        <Grid2
          size={{xs:12,md:6}}
          sx={{height:"100vh"}}
        >
            <Box 
            component="img"
            src='/cover.png'
            sx={{height:"100%",width:"100%"}}
            />
        </Grid2>
        <Grid2
          size={ {xs:12 ,md:6}}
        
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            component="form"
            noValidate
            autoComplete="off"
            style={{ width: '100%', maxWidth: '400px' }}
          >
            <Box component="div"
            sx={{display:"flex",alignItems:'center',gap:"10px",marginBottom:"20px"}}
            >
            <Box
            component="img"
            src="/logo.png"
            width="92px"
            height="42px"
            />
            </Box>
           

            <TextField
              label="email"
              variant="outlined"
              fullWidth
              margin="normal"
              InputProps={{
                sx: {
                  '&::placeholder': {
                    color: 'transparent', 
                  },
                },
              }}
              InputLabelProps={{
                shrink: true, 
              }}
            />
            <TextField
              label="password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              InputProps={{
                sx: {
                  '&::placeholder': {
                    color: 'transparent', 
                  },
                },
              }}
              InputLabelProps={{
                shrink: true, 
              }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: '1rem' }}
            >
              Sign In
            </Button>

            <Typography
              variant="body2"
              style={{ marginTop: '1rem', textAlign: 'center' }}
            >
              Don't have an account? <a href="#">Sign Up</a>
            </Typography>
          </Box>
        </Grid2>
      </Grid2>
    </ThemeProvider>
  );
}
