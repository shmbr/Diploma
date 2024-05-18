import { Box, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import Link from "../components/navigation/Link";
import { HOME_ROUTE } from "../routes";

const MainLayout = () => {
  const theme = useTheme();
  return (
    <>
      <Box sx={{ background: theme.palette.primary.main, p: 2 }}>
        <Link link={HOME_ROUTE} text="To home" />
      </Box>

      <Box margin={2}>
        <Outlet />
      </Box>
    </>
  );
};

export default MainLayout;
