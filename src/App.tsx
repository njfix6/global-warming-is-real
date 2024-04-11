import React from "react";
import { toPng } from "retina-dom-to-image";
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
import { Download } from "react-feather";
import styled from "styled-components";

const theme = createTheme({
  typography: {
    fontFamily: ["NicoMoji"].join(","),
  },
  palette: {
    primary: {
      light: "#ffffff",
      main: "#ffffff",
      dark: "#002884",
    },
  },
});

const PushRightDiv = styled.div`
  flex-grow: 1;
`;

const PushRight = () => {
  return <PushRightDiv />;
};

function App() {
  const [backgroundColor, setBackgroundColor] = React.useState("#535353");
  const ref = React.useRef(null);

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
            <div ref={ref}>
              <GraphContainer
                fontColor={fontColor}
                backgroundColor={backgroundColor}
                lineColor={lineColor}
              />
            </div>

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
              <PushRight />
              <Button
                style={{ border: "4px solid" }}
                variant="outlined"
                onClick={async () => {
                  const dataurl = await toPng(ref.current);
                  const link = document.createElement("a");

                  link.download = "export.png";
                  link.href = dataurl;
                  document.body.appendChild(link);
                  link.click();
                  link.remove();
                }}
              >
                <Box style={{ marginRight: 8 }}>Download</Box>
                <Download />
              </Button>
            </Stack>
          </Stack>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
