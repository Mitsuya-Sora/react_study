import React from "react";

const ColorfullMessage = (props) => {
  const { color, message } = props;
  const textStyle = {
    color
  };
  return <p style={textStyle}>{message}</p>;
};

export default ColorfullMessage;
