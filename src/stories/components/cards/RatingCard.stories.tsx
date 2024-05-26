import type { Meta, StoryObj } from "@storybook/react";
import RatingCard from "../../../components/cards/RatingCard";

const meta = {
  title: "Cards/RatingCard",
  component: RatingCard,
  tags: ["autodocs"],
} satisfies Meta<typeof RatingCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Card1: Story = {
  args: {
    // name: "Акція",
    // date: "2024-06-05",
    // description: `
    //   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus, quam eget convallis sollicitudin, est nulla consequat tortor, at consequat nisl eros ac arcu. Sed suscipit nulla et efficitur facilisis. Etiam a nunc pharetra, commodo metus vel, porttitor massa. Integer a felis nibh. Vestibulum suscipit sollicitudin purus at faucibus.
    // `,
    // location: "Львів, АТБ",
    // img: img,
  },
};
