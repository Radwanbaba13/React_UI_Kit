import { Button } from "../Components/Button/Button";

export default {
  title: "UI-Kit/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    primary: { control: "boolean" },
    backgroundColor: { control: "color" },
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
    label: { control: "text" },
    fontSize: { control: "text" },
    fontColor: { control: "color" },
    disabled: { control: "boolean" },
    icon: { control: "text" },
    padding: { control: "text" },
    margin: { control: "text" },
    onClick: { action: "clicked" },
  },
};

export const Primary = () => <Button primary label="Primary Button" />;
export const Secondary = () => <Button label="Secondary Button" />;

export const Small = () => <Button size="small" label="Small Button" />;
export const Medium = () => <Button size="medium" label="Medium Button" />;
export const Large = () => <Button size="large" label="Large Button" />;

export const WithCustomFontSize = () => (
  <Button fontSize="18px" label="Custom Font Size" />
);
export const WithCustomFontColor = () => (
  <Button fontColor="#FF5733" label="Custom Font Color" />
);
export const Disabled = () => <Button disabled label="Disabled Button" />;
export const WithIcon = () => <Button icon="🚀" label="Button with Icon" />;
export const WithPadding = () => (
  <Button padding="15px 30px" label="Custom Padding" />
);
export const WithMargin = () => <Button margin="10px" label="Custom Margin" />;
