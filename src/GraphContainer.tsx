import React from "react";
import Graph from "./Graph";

function GraphContainer() {
  return (
    <div
      style={{
        border: "5px solid white",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        padding: "10px",
        borderRadius: "8px",
        width: "75%",
        height: "70%",
      }}
    >
      <div
        style={{
          paddingTop: "30px",
          fontFamily: "NicoMoji",
          color: "white",
          fontSize: "3.2vw",
          margin: "auto",
          width: "100%",
          textAlign: "center",
        }}
      >
        Global Warming Is Real
        <div
          style={{
            paddingTop: "30px",
            fontFamily: "NicoMoji",
            color: "white",
            fontSize: "1vw",
            margin: "auto",
          }}
        >
          Average Global Surface Tempurature Per Year
        </div>
      </div>
      <div
        style={{
          paddingTop: "30px",
          fontFamily: "NicoMoji",
          color: "white",
          fontSize: "1vw",
          margin: "auto",
          width: "100%",
          textAlign: "center",
        }}
      ></div>

      <Graph />
    </div>
  );
}

export default GraphContainer;
