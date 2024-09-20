import React from "react";
import { Meta, StoryFn } from "@storybook/react/*";
import { Card, CardProps } from "./Card";

export default {
  title: "components/Card",
  component: Card,
  args: {
    title: "Title",
    extra: "<a>asd</a>",
  },
  tags: ["autodocs"],
}  as Meta<CardStoryProps>;

type CardStoryProps = Pick<CardProps, "title" | "extra">;

export const CardStoryTemplate: StoryFn<CardStoryProps> = ({ ...args }) => <Card title="title" {...args} />;

CardStoryTemplate.storyName = "Card";
