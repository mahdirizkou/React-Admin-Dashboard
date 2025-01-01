import React from "react";
import { ResponsiveLine } from "@nivo/line";
import Box from "@mui/material/Box";
import { useContext, createContext } from "react";
import { DarkModeContext } from "../src/App";

const data = [
  {
    id: "japan",
    color: "hsl(323, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 127,
      },
      {
        x: "helicopter",
        y: 124,
      },
      {
        x: "boat",
        y: 188,
      },
      {
        x: "train",
        y: 177,
      },
      {
        x: "subway",
        y: 143,
      },
      {
        x: "bus",
        y: 176,
      },
      {
        x: "car",
        y: 107,
      },
      {
        x: "moto",
        y: 257,
      },
      {
        x: "bicycle",
        y: 225,
      },
      {
        x: "horse",
        y: 163,
      },
      {
        x: "skateboard",
        y: 281,
      },
      {
        x: "others",
        y: 144,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(187, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 289,
      },
      {
        x: "helicopter",
        y: 12,
      },
      {
        x: "boat",
        y: 97,
      },
      {
        x: "train",
        y: 70,
      },
      {
        x: "subway",
        y: 224,
      },
      {
        x: "bus",
        y: 81,
      },
      {
        x: "car",
        y: 286,
      },
      {
        x: "moto",
        y: 11,
      },
      {
        x: "bicycle",
        y: 34,
      },
      {
        x: "horse",
        y: 94,
      },
      {
        x: "skateboard",
        y: 3,
      },
      {
        x: "others",
        y: 182,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(213, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 206,
      },
      {
        x: "helicopter",
        y: 7,
      },
      {
        x: "boat",
        y: 71,
      },
      {
        x: "train",
        y: 158,
      },
      {
        x: "subway",
        y: 123,
      },
      {
        x: "bus",
        y: 275,
      },
      {
        x: "car",
        y: 199,
      },
      {
        x: "moto",
        y: 260,
      },
      {
        x: "bicycle",
        y: 288,
      },
      {
        x: "horse",
        y: 284,
      },
      {
        x: "skateboard",
        y: 185,
      },
      {
        x: "others",
        y: 210,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(264, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 101,
      },
      {
        x: "helicopter",
        y: 205,
      },
      {
        x: "boat",
        y: 87,
      },
      {
        x: "train",
        y: 44,
      },
      {
        x: "subway",
        y: 118,
      },
      {
        x: "bus",
        y: 275,
      },
      {
        x: "car",
        y: 87,
      },
      {
        x: "moto",
        y: 211,
      },
      {
        x: "bicycle",
        y: 111,
      },
      {
        x: "horse",
        y: 55,
      },
      {
        x: "skateboard",
        y: 78,
      },
      {
        x: "others",
        y: 25,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(9, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 31,
      },
      {
        x: "helicopter",
        y: 190,
      },
      {
        x: "boat",
        y: 293,
      },
      {
        x: "train",
        y: 66,
      },
      {
        x: "subway",
        y: 240,
      },
      {
        x: "bus",
        y: 33,
      },
      {
        x: "car",
        y: 252,
      },
      {
        x: "moto",
        y: 237,
      },
      {
        x: "bicycle",
        y: 247,
      },
      {
        x: "horse",
        y: 153,
      },
      {
        x: "skateboard",
        y: 292,
      },
      {
        x: "others",
        y: 65,
      },
    ],
  },
];
function Line({ isDashboard = false }) {
  const { DarkMode } = useContext(DarkModeContext);

  return (
    <Box sx={{ height: isDashboard ? "288px" : "75vh" }}>
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashboard ? null : "transportation",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashboard ? null : "count",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: DarkMode ? "#fff" : "#333",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: DarkMode ? "#fff" : "#333",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        theme={{
          axis: {
              ticks: {
                  text: {
                      fill: DarkMode ? "#fff" : "#333", 
                  }
              },
              legend: {
                  text: {
                      fill: DarkMode ? "#fff" : "#333", 
                  }
              }
          },
          legends: {
              text: {
                  fill: DarkMode ? "#fff" : "#333"  
              }
          },
          tooltip: {
            container: {
              background: DarkMode ? "#333" : "#fff", 
              color: DarkMode ? "#fff" : "#333",      
              fontSize: "14px",
              borderRadius: "5px",
              boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)"
            }
          }
          
      }}
      />
    </Box>
  );
}

export default Line;
