import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#3a4f41",
      light: "#8cba80",
    },
    secondary: {
      main: "#f95738",
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: ({ theme }) => ({
          textDecorationColor: theme.palette.primary.light,
          color: theme.palette.secondary.main,
        }),
      },
    },
  },
});
