import React from "react";
import { FaSearch } from "react-icons/fa";
import TextField from "../Components/Text Fields/TextFields";

export default {
  title: "UI-Kit/TextFields",
  component: TextField,

  tags: ["autodocs"],

  argTypes: {
    type: {
      control: { type: "select", options: ["text", "password", "search"] },
    },
    placeholder: { control: "text" },
    fontSize: { control: "text" },
    fontColor: { control: "color" },
    padding: { control: "text" },
    margin: { control: "text" },
    disabled: { control: "boolean" },
    readOnly: { control: "boolean" },
  },
};

export const TextBox = () => <TextField placeholder="Text Box" />;
export const PasswordField = () => (
  <TextField type="password" placeholder="Password Field" />
);
export const SearchBar = () => (
  <TextField type="search" placeholder="Search Bar" icon={<FaSearch />} />
);
