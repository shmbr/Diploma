import { Button, Drawer } from "@mui/material";
// import { DUMMY_LINKS } from "../stories/pages/Playground.stories";
import Header from "../components/navigation/Header";
import { useState } from "react";

const Playground = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  return (
    <div>
      {/* <Header links={DUMMY_LINKS} /> */}

      <Drawer open={open} onClose={toggleDrawer(false)}>
        2123 2123 2123
      </Drawer>
      <Button onClick={toggleDrawer(true)}>Open drawer</Button>
    </div>
  );
};

export default Playground;
