import { Link as RouterLink } from "react-router-dom";
import { Box, Link as MuiLink, Typography, useTheme } from "@mui/material";

interface ILinkProps {
  link: string;
  text?: string;
  color?: "primary" | "secondary";
}

const Link = ({ link, text, color = "primary" }: ILinkProps) => {
  const theme = useTheme();
  return (
    <Box>
      <MuiLink component={RouterLink} to={`/${link}`}>
        <Typography
          variant="body1"
          sx={{
            ...(color === "primary" && {
              color: theme.palette.primary.light,
            }),

            ...(color === "secondary" && {
              color: theme.palette.secondary.main,
            }),
          }}
        >
          {text ?? link}
        </Typography>
      </MuiLink>
    </Box>
  );
};

export default Link;
