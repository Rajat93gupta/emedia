"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/component/Header/Header";
import { usePathname } from "next/navigation";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";

import { theme } from "@/theme/theme";
import Sidebar from "@/component/Siderbar";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  // Hide Sidebar and Header on "/" (home) and Sidebar only on "/dashboard"
  const hideSidebar = pathname.startsWith("/dashboard") || pathname.startsWith("/blog/");
  const hideHeaderAndSidebar = pathname === "/";

  const handleMenuToggle = () => {
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box sx={{ display: "flex" }}>
            {!hideHeaderAndSidebar && <Header />}
            {!hideHeaderAndSidebar && !hideSidebar && (
              <Sidebar
                handleDrawerClose={handleDrawerClose}
                open={open}
                setOpen={setOpen}
                handleMenuToggle={handleMenuToggle}
              />
            )}
            <Box
              sx={{
                flexGrow: 1,
                bgcolor: "white",
                display: "flex",
                flexDirection: "column",
                maxHeight:"100%",
                height:"100%"
              }}
            >
              {children}
            </Box>
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
