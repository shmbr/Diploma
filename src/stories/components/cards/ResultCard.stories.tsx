import type { Meta, StoryObj } from "@storybook/react";
import ResultCard from "../../../components/cards/ResultCard";
import { SeverityValues } from "../../../consts/common";

const meta = {
  title: "Cards/ResultCard",
  component: ResultCard,
  tags: ["autodocs"],
} satisfies Meta<typeof ResultCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Card1: Story = {
  args: {
    resultValue: "89%",
    description: "Круто, молодець!",
    severity: SeverityValues.SUCCESS,
  },
};
export const Card2: Story = {
  args: {
    resultValue: "59%",
    description: "Хороший результат!",
    severity: SeverityValues.WARNING,
  },
};
export const Card3: Story = {
  args: {
    resultValue: "49%",
    description: "Не ідеально, але може бути",
    severity: SeverityValues.INFO,
  },
};
export const Card4: Story = {
  args: {
    resultValue: "19%",
    description: "Наступного разу буде краще",
    severity: SeverityValues.ERROR,
  },
};
