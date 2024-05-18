import { Link as RouterLink } from "react-router-dom";
import { Box, Link as MuiLink, Typography } from "@mui/material";

interface ILinkProps {
  link: string;
  text?: string;
}

const Link = ({ link, text }: ILinkProps) => {
  return (
    <Box>
      <MuiLink component={RouterLink} to={`/${link}`}>
        <Typography variant="body1" sx={{ color: "#8cba80" }}>
          {text ?? link}
        </Typography>
      </MuiLink>
    </Box>
  );
};

export default Link;
