import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Button,
  Container,
  Typography,
  Popover,
  Grid,
  Stack,
  Box,
} from "@mui/material";
import GraphContainer from "./GraphContainer";
import ColorPicker from "./ColorPicker";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["NicoMoji"].join(","),
  },
});

function App() {
  const [backgroundColor, setBackgroundColor] = React.useState("#535353");

  const handleSetBackgroundColor = (color: string) => {
    setBackgroundColor(color);
  };

  const [fontColor, setFontColor] = React.useState("#FFFFFF");

  const handleSetFontColor = (color: string) => {
    setFontColor(color);
  };

  const [lineColor, setLineColor] = React.useState("#8884d8");

  const handleSetLineColor = (color: string) => {
    setLineColor(color);
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
          <Stack style={{ marginTop: 100, margin: 100 }}>
            <GraphContainer
              fontColor={fontColor}
              backgroundColor={backgroundColor}
              lineColor={lineColor}
            />

            <Stack marginTop={2} direction={"row"} spacing={6}>
              <ColorPicker
                handleSetColor={handleSetBackgroundColor}
                color={backgroundColor}
                title={"Background"}
              />
              <ColorPicker
                handleSetColor={handleSetFontColor}
                color={fontColor}
                title={"Front"}
              />
              <ColorPicker
                handleSetColor={handleSetLineColor}
                color={lineColor}
                title={"Line"}
              />
            </Stack>
          </Stack>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
