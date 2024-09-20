import React from "react";
import { Meta, StoryFn } from "@storybook/react/*";
import CyberpunkButton, { CyberpunkButtonProps } from "./CyberpunkButton";

export default {
  title: "components/CyberpunkButton",
  component: CyberpunkButton,
  args: {
    label: "LAbel",
    styleType: "electric",
    size: "medium",
    type: "outlined",
    rounded: false,
    hoverStyle: "none",
  },
  tags: ["autodocs"],
} as Meta<CyberPunkButtonStoryProps>;

type CyberPunkButtonStoryProps = Pick<CyberpunkButtonProps, "label" | "styleType" | "size" | "type" | "rounded" | "hoverStyle">;

export const CyberPunkButtonStoryTemplate: StoryFn<CyberPunkButtonStoryProps> = ({ ...args }) => (
  <CyberpunkButton
    onClick={function (): void {
      throw new Error("Function not implemented.");
    }}
    {...args}
  />
);

CyberPunkButtonStoryTemplate.storyName = "CyberpunkButton";
