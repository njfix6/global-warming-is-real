import React from "react";
import Graph from "./Graph";

import { Grid, Box, Stack, Typography, Container } from "@mui/material";

type GraphContainer = {
  fontColor: string;
  backgroundColor: string;
  lineColor: string;
};

function GraphContainer(props: GraphContainer) {
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
    <Stack
      style={{
        border: "4px solid white",
        borderRadius: 8,
        background: props.backgroundColor,
      }}
    >
      <Stack style={{ margin: 50, height: "60vh" }}>
        <Typography
          style={{
            fontFamily: "NicoMoji",
            color: props.fontColor,
            fontSize: "4vw",
            margin: "auto",
            width: "100%",
            textAlign: "center",
          }}
        >
          Stupidly Obvious.
        </Typography>
        <Typography
          style={{
            paddingTop: "30px",
            fontFamily: "NicoMoji",
            color: props.fontColor,
            fontSize: "2vw",
            margin: "auto",
          }}
        >
          Our Planet is Heating up.
        </Typography>
        {/* <Container> */}
        <div style={{ width: "100%", height: "100%" }}>
          <Graph axisColor={props.fontColor} lineColor={props.lineColor} />
        </div>
        <Typography
          style={{
            paddingTop: "30px",
            fontFamily: "NicoMoji",
            color: props.fontColor,
            fontSize: "12px",
            margin: "auto",
          }}
        >
          Average Global Surface Temperature Per Year
        </Typography>
        {/* </Container> */}
      </Stack>
    </Stack>
  );
}

export default GraphContainer;
