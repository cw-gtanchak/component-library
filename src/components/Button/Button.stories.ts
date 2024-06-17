import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Primary",
  },
};

export const PrimarySmall: Story = {
  args: {
    children: "Primary",
    size: "small",
  },
};

export const PrimaryLarge: Story = {
  args: {
    children: "Primary",
    size: "large",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary",
  },
};

export const Link: Story = {
  args: {
    children: "Link",
    variant: "link",
  },
};
