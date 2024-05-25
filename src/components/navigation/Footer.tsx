import { Box, Divider, useTheme } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import XIcon from "@mui/icons-material/X";
import TelegramIcon from "@mui/icons-material/Telegram";
import { SITEMAP } from "../../routes";
import Link from "./Link";

const Footer = () => {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          background: theme.palette.primary.main,
          color: theme.palette.secondary.main,
          marginTop: "auto",
          p: 2,
        }}
      >
        <Box display={"flex"} justifyContent={"center"} gap={4} marginTop={4}>
          <LocalPhoneIcon />
          <InstagramIcon />
          <MailOutlineIcon />
          <XIcon />
          <TelegramIcon />
          <LocationOnIcon />
        </Box>

        <Divider sx={{ marginTop: 6, marginBottom: 0 }} />

        <Box display={"flex"} justifyContent={"center"} gap={2} marginTop={2}>
          {SITEMAP.map((link) => (
            <Link link={link.link} text={link.text} />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Footer;
