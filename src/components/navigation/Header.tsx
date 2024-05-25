import { Menu } from "@mui/icons-material";
import { Box, useTheme } from "@mui/material";
import Link from "./Link";
import PianoIcon from "@mui/icons-material/Piano";
export interface ILinkProps {
  href: string;
  text: string;
}

export interface IHeaderProps {
  links?: ILinkProps[];

  onMenuClick?: () => void;
  onLogoClick?: () => void;
}

const Header = ({ links, onMenuClick, onLogoClick }: IHeaderProps) => {
  const theme = useTheme();
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      sx={{
        background: theme.palette.primary.main,
        p: 2,
        top: 0,
        position: "sticky",
      }}
      gap={2}
    >
      <Menu color="secondary" onClick={onMenuClick} />

      <Box display={"flex"} gap={1}>
        {links?.map((link) => (
          <Link color="secondary" link={link.href} text={link.text} />
        ))}
      </Box>

      <Box marginLeft={"auto"} display={"flex"} alignItems={"center"}>
        <PianoIcon color="secondary" onClick={onLogoClick} />
      </Box>
    </Box>
  );
};

export default Header;
