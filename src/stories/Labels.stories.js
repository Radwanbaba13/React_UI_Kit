import React from "react";
import Label from "../Components/Labels/Labels";

export default {
  title: "UI-Kit/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    type: {
      control: "select",
      options: ["default", "heading", "description"],
    },
    children: {
      control: "text",
    },
    fontSize: {
      control: "text",
    },
    fontWeight: {
      control: "text",
    },
    fontColor: {
      control: "color",
    },
    textDecoration: {
      control: "text",
    },
  },
};

const Template = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Default Label",
};

export const Heading = Template.bind({});
Heading.args = {
  type: "heading",
  children: "Heading Label",
};

export const Description = Template.bind({});
Description.args = {
  type: "description",
  children: "Description Label",
};
