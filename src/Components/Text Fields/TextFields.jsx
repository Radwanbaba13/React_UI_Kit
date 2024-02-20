import React from "react";
import PropTypes from "prop-types";
import "./TextField.css";

export const TextField = ({
  type = "text",
  placeholder,
  fontSize,
  fontColor,
  padding,
  margin,
  disabled,
  readOnly,
  ...props
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      style={{
        fontSize,
        color: fontColor,
        padding,
        margin,
        ...(disabled && { opacity: 0.5, cursor: "not-allowed" }),
        ...(readOnly && { backgroundColor: "#f0f0f0" }),
      }}
      disabled={disabled}
      readOnly={readOnly}
      {...props}
    />
  );
};

TextField.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  fontSize: PropTypes.string,
  fontColor: PropTypes.string,
  padding: PropTypes.string,
  margin: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
};

export default TextField;
