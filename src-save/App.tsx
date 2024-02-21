import React from "react";
import GraphContainer from "./GraphContainer";
import ColorPicker from "../src/ColorPicker";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function App() {
  const [anchorEl, setAnchorEl] =
    (React.useState < HTMLButtonElement) | (null > null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className="App">
      <header className="Global Warming Is Real">
        <GraphContainer />

        <Button aria-describedby={id} variant="contained" onClick={handleClick}>
          Open Popover
        </Button>
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
          <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
        </Popover>

        <ColorPicker />
      </header>
    </div>
  );
}

export default App;
