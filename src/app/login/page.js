"use client";
import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Grid2,
  useTheme,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function Login() {
  const customTheme = useTheme();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      window.location.href = "/dashboard";
    } else {
      alert("Please fill out all fields");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid2
        container
        style={{
          height: "100vh",
          width: "100vw",
          overflow: "hidden",
        }}
      >
        {/* Image Section */}
        <Grid2 item xs={12} md={6}>
          <Box
            component="img"
            src="/cover.png"
            sx={{ height: "100%", width: "100%", objectFit: "cover" }}
          />
        </Grid2>

        {/* Form Section */}
        <Grid2
          item
          xs={12}
          md={6}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
            style={{ width: "100%", maxWidth: "400px" }}
          >
            {/* Logo */}
            <Box
              component="div"
              sx={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}
            >
              <Box
                component="img"
                src="/logo.png"
                width="92px"
                height="42px"
              />
            </Box>

            {/* Email Field */}
            <TextField
              label="Email"
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
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* Password Field */}
            <TextField
              label="Password"
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
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: "1rem" }}
            >
              Sign In
            </Button>

            {/* Sign Up Link */}
            <Typography variant="body2" style={{ marginTop: "1rem", textAlign: "center" }}>
              Don't have an account? <a href="#">Sign Up</a>
            </Typography>
          </Box>
        </Grid2>
      </Grid2>
    </ThemeProvider>
  );
}
