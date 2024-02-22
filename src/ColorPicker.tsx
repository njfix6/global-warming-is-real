import { HexColorPicker } from "react-colorful";
import React from "react";
import {
  Container,
  Typography,
  Popover,
  Grid,
  Stack,
  Box,
  Card,
} from "@mui/material";

type ColorPickerProps = {
  color: string;
  handleSetColor: (color: string) => void;
  title: string;
};

const ColorPicker = (props: ColorPickerProps) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Stack display={"flex"} direction="row" spacing={2}>
      <button
        style={{
          width: 48,
          height: 48,
          minWidth: 48,
          border: "4px solid white",
          borderRadius: 8,
          margin: 0,
          padding: 0,
          background: props.color,
          cursor: "pointer",
        }}
        aria-describedby={id}
        onClick={handleClick}
      ></button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <HexColorPicker color={props.color} onChange={props.handleSetColor} />
      </Popover>

      <Typography lineHeight={"48px"} color={"white"}>
        {props.title}
      </Typography>
    </Stack>
  );
};

export default ColorPicker;
