import { Meta } from "@storybook/react";
import Header from "../../components/navigation/Header";
import { Button, Collapse } from "@mui/material";
import Drawer from '@mui/material/Drawer'
import { useState } from "react";
import React from "react";


const meta: Meta = {
  title: "Pages/Playground",
  component:Header,
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

export const  Playground = ()=>  {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <Header links={DUMMY_LINKS} />
      {/* <Collapse in={open}>
      123
      </Collapse> */}

      {123 && open}

      <Drawer open={open} onClose={toggleDrawer(false)}>
        2123 2123 2123
      </Drawer>
      <Button onClick={toggleDrawer(true)}>Open drawer</Button>
    </>
  );
}

export default meta;
