import { Link as RouterLink } from "react-router-dom";
import { Box, Link as MuiLink, Typography, useTheme } from "@mui/material";
import { Variant } from "@mui/material/styles/createTypography";

interface ILinkProps {
  link: string;
  text?: string;
  color?: "primary" | "secondary";
  variant?: Variant;
}

const Link = ({
  link,
  text,
  color = "primary",
  variant = "body1",
}: ILinkProps) => {
  const theme = useTheme();
  return (
    <Box>
      <MuiLink component={RouterLink} to={`/${link}`}>
        <Typography
          variant={variant}
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
