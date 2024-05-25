import { createTheme } from "@mui/material";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/material-icons";

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
    MuiDrawer: {
      styleOverrides: {
        paper: ({ theme }) => ({
          background: theme.palette.primary.main,
        }),
      },
    },
  },
});
