import { Create } from "@mui/icons-material";
import { Button } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";

export type IButtonColors =
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "info"
  | "warning";

export type IButtonVariants = "text" | "outlined" | "contained";

const meta = {
  title: "Input/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Lorem ipsum",
    color: "primary",
    variant: "contained",
    // todo change icon
    endIcon: <Create />,
  },
  argTypes: {
    color: {
      control: "radio",
      options: ["primary", "secondary", "success", "error", "info", "warning"],
    },
    variant: {
      control: "radio",
      options: ["text", "outlined", "contained"],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Outlined: Story = {
  args: {
    variant: "outlined",
  },
};
export const Text: Story = {
  args: {
    variant: "text",
  },
};

export const Contained: Story = {
  args: {
    variant: "contained",
  },
};

export const Secondary: Story = {
  args: {
    color: "secondary",
  },
};

export const Success: Story = {
  args: {
    color: "success",
  },
};

export const Error: Story = {
  args: {
    color: "error",
  },
};

export const Info: Story = {
  args: {
    color: "info",
  },
};

export const Warning: Story = {
  args: {
    color: "warning",
  },
};
