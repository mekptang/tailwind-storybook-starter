import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";
import StoryLayout from "./StoryLayout";

import { ButtonGroup, ButtonGroupProps } from "../src/ButtonGroup";
import { options1, options2, Figma } from "../src/data";
import { FiGrid, FiList } from "react-icons/fi";

const meta: Meta = {
  title: "ButtonGroup",
  parameters: {
    controls: { expanded: true },
    design: {
      type: "figma",
      url: Figma.ButtonGroup,
    },
  },
};

export default meta;

interface Props extends ButtonGroupProps<string> {
  darkMode: boolean;
}

const StoryColors: Story<Props> = (args) => {
  const [activeItem1, setActiveItem1] = useState<string>(options1[1].value);
  const [activeItem2, setActiveItem2] = useState<string>(options2[1].value);

  type ViewOption = "list" | "grid";
  const [viewOption, setViewOption] = useState<ViewOption>("list");

  //   const handleActiveItem1 = (value: string) => {
  //     setActiveItem1(value);
  //   };

  //   const handleActiveItem2 = (value: string) => {
  //     setActiveItem2(value);
  //   };

  //   const handleViewOption = (value: string) => {
  //     setViewOption(value as ViewOption);
  //   };

  return (
    <StoryLayout {...args} className="space-y-4">
      <div>
        <ButtonGroup
          activeOption={activeItem1}
          setActiveOption={setActiveItem1}
          options={options1}
        />
      </div>
      <div>
        <ButtonGroup
          activeOption={activeItem2}
          setActiveOption={setActiveItem2}
          options={options2}
        />
      </div>
      <div>
        <ButtonGroup
          activeOption={viewOption}
          setActiveOption={setViewOption}
          options={[
            {
              content: <FiList size={20} />,
              value: "list",
            },
            {
              content: <FiGrid size={20} />,
              value: "grid",
            },
          ]}
        />
      </div>
    </StoryLayout>
  );
};

export const Default = StoryColors.bind({});

Default.args = {
  darkMode: false,
};
