import React from "react";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <img
      src="https://i.postimg.cc/wT81Mxhj/mindchainsw-ap-256-01.png" // Replace with the path to your PNG file
      alt="Logo" // Provide an appropriate alt text for accessibility
      {...props} // Spread any additional props passed to the component
    />
  );
};

export default Icon;
