import React from "react";
import PropTypes from "prop-types";
import "./button.css";

// Button Component
export const Button = ({
  primary,
  backgroundColor,
  size,
  label,
  fontSize,
  fontColor,
  disabled,
  icon,
  padding,
  margin,
  ...props
}) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  const sizeClass = `storybook-button--${size || "medium"}`;
  return (
    <button
      type="button"
      className={["storybook-button", sizeClass, mode].join(" ")}
      style={{
        bg: backgroundColor,
        fontSize: fontSize,
        color: fontColor,
        padding,
        margin,
        ...(disabled && { opacity: 0.5, cursor: "not-allowed" }),
      }}
      disabled={disabled}
      {...props}
    >
      {icon && <span className="button-icon">{icon}</span>}
      {label}
    </button>
  );
};

// Prop Types
Button.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  fontSize: PropTypes.string,
  fontColor: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.node,
  padding: PropTypes.string,
  margin: PropTypes.string,
};

// Default Props
Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
  fontSize: "14px",
  fontColor: "#333",
  disabled: false,
  icon: null,
  padding: null,
  margin: null,
};
