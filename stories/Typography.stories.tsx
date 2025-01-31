import React from "react";
import { Meta, Story } from "@storybook/react";
import StoryLayout from "./StoryLayout";

import { Typography, TypographyProps } from "../src/Typography";
import { colors, Figma } from "../src/data";

const meta: Meta = {
  title: "Typography",
  component: Typography,
  parameters: {
    controls: { expanded: true },
    design: {
      type: "figma",
      url: Figma.Typography,
    },
  },
};

export default meta;

interface Props extends TypographyProps {
  darkMode: boolean;
}

const TypographyHeadings: Story<Props> = (args) => {
  return (
    <StoryLayout {...args} className="space-y-2">
      <Typography {...args} variant="h1">
        Display h1
      </Typography>
      <Typography {...args} variant="h2">
        Display h2
      </Typography>
      <Typography {...args} variant="h3">
        Display h3
      </Typography>
      <Typography {...args} variant="h4">
        Display h4
      </Typography>
      <Typography {...args} variant="h5">
        Display h5
      </Typography>
    </StoryLayout>
  );
};

export const Heading = TypographyHeadings.bind({});

Heading.args = {
  customWeight: "regular",
  className: "",
  darkMode: false,
};

Heading.parameters = {
  controls: { exclude: ["variant", "customColor", "className"] },
};

const TypographyText: Story<Props> = (args) => {
  return (
    <StoryLayout {...args} className="space-y-2">
      <Typography {...args} variant="xl">
        Text xl
      </Typography>
      <Typography {...args} variant="lg">
        Text lg
      </Typography>
      <Typography {...args} variant="md">
        Text md
      </Typography>
      <Typography {...args} variant="sm">
        Text sm
      </Typography>
      <Typography {...args} variant="xs">
        Text xs
      </Typography>
    </StoryLayout>
  );
};

export const Text = TypographyText.bind({});

Text.args = {
  customWeight: "regular",
  className: "",
  darkMode: false,
};

Text.parameters = {
  controls: { exclude: ["variant", "customColor", "className"] },
};

const TypographyDynamic: Story<Props> = (args) => {
  const isHeading = args.variant.startsWith("h");
  return (
    <StoryLayout {...args} className="space-y-2">
      <Typography {...args}>
        {isHeading ? "Display" : "Text"} {args.variant} <br />{" "}
        {args.customWeight}
      </Typography>
    </StoryLayout>
  );
};

export const Dynamic = TypographyDynamic.bind({});

Dynamic.args = {
  variant: "h1",
  customColor: "",
  customWeight: "regular",
  className: "",
  darkMode: false,
};
