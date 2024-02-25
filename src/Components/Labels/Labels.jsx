import React from "react";
import PropTypes from "prop-types";
import "./labels.css";

const Label = ({
  type = "default",
  children,
  fontSize,
  fontWeight,
  fontColor,
  textDecoration,
  ...props
}) => {
  const labelStyle = {
    fontSize,
    fontWeight,
    color: fontColor,
    textDecoration,
  };

  return (
    <label className={`label ${type}`} style={labelStyle} {...props}>
      {children}
    </label>
  );
};

Label.propTypes = {
  type: PropTypes.oneOf(["default", "heading", "description"]),
  children: PropTypes.node.isRequired,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fontColor: PropTypes.string,
  textDecoration: PropTypes.string,
};

export default Label;
