import type { Meta, StoryObj } from "@storybook/react";
import EventCard from "../../../components/cards/EventCard";

const meta = {
  title: "Cards/EventCard",
  component: EventCard,
  tags: ["autodocs"],
} satisfies Meta<typeof EventCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Event1: Story = {
  args: {
    name: "Акція",
    date: "2024-06-05",
    description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus, quam eget convallis sollicitudin, est nulla consequat tortor, at consequat nisl eros ac arcu. Sed suscipit nulla et efficitur facilisis. Etiam a nunc pharetra, commodo metus vel, porttitor massa. Integer a felis nibh. Vestibulum suscipit sollicitudin purus at faucibus.
    `,
    location: "Львів, АТБ",
  },
};

export const Event2: Story = {
  args: {
    name: "1234",
    date: "1234",
    description: "1234",
    location: "1234",
  },
};
