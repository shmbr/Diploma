import { Meta } from "@storybook/react";
import Header from "../../components/navigation/Header";
import Drawer from "@mui/material/Drawer";
import { useState } from "react";
import { SITEMAP } from "../../routes";
import Link from "../../components/navigation/Link";
import { Box } from "@mui/material";
import Footer from "../../components/navigation/Footer";
import { Piano } from "@mui/icons-material";

const meta: Meta = {
  title: "Pages/Playground",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
};

const DUMMY_LINKS = [
  {
    href: "",
    text: "Головна",
  },
  {
    href: "",
    text: "Про нас",
  },
  {
    href: "",
    text: "Події",
  },
  {
    href: "",
    text: "Проекти",
  },
];

export const Playground = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <Box display={"flex"} flexDirection={"column"} height={"100vh"}>
        <Header links={DUMMY_LINKS} onMenuClick={toggleDrawer(true)} />

        <Drawer open={open} onClose={toggleDrawer(false)} sx={{ width: 400 }}>
          <Box sx={{ p: 3 }} display={"flex"} flexDirection={"column"} gap={1}>
            <Piano color="secondary" />
            {SITEMAP.map((link) => (
              <Link link={link.link} text={link.text} />
            ))}
          </Box>
        </Drawer>

        <Box
          sx={{ overflowY: "auto" }}
          display={"grid"}
          gridTemplateRows={"auto 1fr auto"}
          height={"100%"}
        >
          <Box />
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default meta;
