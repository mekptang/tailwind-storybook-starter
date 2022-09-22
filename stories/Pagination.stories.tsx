import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";
import StoryLayout from "./StoryLayout";

import { Pagination, PaginationProps } from "../src/Pagination";
import { colors, Figma } from "../src/data";

const meta: Meta = {
  title: "Pagination",
  parameters: {
    controls: { expanded: true },
    design: {
      type: "figma",
      url: Figma.Paginate,
    },
  },
};

export default meta;

interface Props extends PaginationProps {
  darkMode: boolean;
}

const StoryColors: Story<Props> = (args) => {
  const [page, setPage] = useState<number>(0);

  return (
    <StoryLayout {...args} className="">
      <Pagination
        page={page}
        setPage={setPage}
        totalPage={10}
        isMobile={args.isMobile}
      />
    </StoryLayout>
  );
};

export const Default = StoryColors.bind({});

Default.args = {
  darkMode: false,
  isMobile: false,
};
