import React from "react";
//import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <img
      src="https://i.postimg.cc/WzP0q49y/logo.png" 
      alt="Logo" 
      {...props} 
    />
  );
};

export default Icon;
