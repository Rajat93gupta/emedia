import { createTheme } from "@mui/material/styles";
export const theme = createTheme({
    palette: {
      primary: {
        main: "#1976d2",
      },
      secondary: {
        main: "#dc004e",
      },
      background: {
        default: "#f4f4f4",
      },
    },
    typography: {
      fontFamily: "var(--font-geist-sans), var(--font-geist-mono), Arial, sans-serif",
    },
  });