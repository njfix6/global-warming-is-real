import { HexColorPicker } from "react-colorful";
import React from "react";

const YourComponent = () => {
  const [color, setColor] = React.useState("#aabbcc");
  return <HexColorPicker color={color} onChange={setColor} />;
};

export default YourComponent;
