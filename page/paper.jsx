import { Box, Paper, Stack, Typography,useTheme } from "@mui/material";
import React from "react";
import { useContext, createContext } from "react";
import { DarkModeContext } from "../src/App";
import { ResponsivePie } from "@nivo/pie";

function Paperr({ icon, test, test2,porcentage ,data,scheme,sx}) {
  const { DarkMode } = useContext(DarkModeContext);
  const theme = useTheme();
  return (
    <Paper
      sx={{
        minWidth: "340px",
        p: 1.5,
        display: "flex",
        justifyContent: "space-between",
        backgroundColor:  DarkMode ? "#333" : "#fff",
        color: DarkMode ? "#fff" : "#333",
      }}
    >
      <Stack gap={1}>
        {icon}
        <Typography variant="body2" sx={{ fontSize: "13px" }}>
          {test}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: "13px" }}>
          {test2}
        </Typography>
      </Stack>

      <Stack alignItems={"center"}>
        <Box height={"100px"} width={"100px"}>
        <ResponsivePie
        data={data}
        margin={{ top:10 , right: 80, bottom: 10, left: 80 }}
        innerRadius={0.7}   //التحكم في قطر الدائرة 
        enableArcLabels={false}
        enableArcLinkLabels={false}
        colors={{ scheme:scheme}}
        padAngle={0.7}
        theme={{
          
          "text": {
              "fontSize": 11,
              "fill": "#333333",
              "outlineWidth": 0,
              "outlineColor": "transparent"
          },
          "axis": {
              "domain": {
                  "line": {
                      "stroke": "#777777",
                      "strokeWidth": 1
                  }
              },
              "legend": {
                  "text": {
                      "fontSize": 12,
                      "fill": "#333333",
                      "outlineWidth": 0,
                      "outlineColor": "transparent"
                  }
              },
              "ticks": {
                  "line": {
                      "stroke": "#777777",
                      "strokeWidth": 1
                  },
                  "text": {
                      "fontSize": 11,
                      "fill": "#333333",
                      "outlineWidth": 0,
                      "outlineColor": "transparent"
                  }
              }
          },
          "grid": {
              "line": {
                  "stroke": "#dddddd",
                  "strokeWidth": 1
              }
          },
          "legends": {
              "title": {
                  "text": {
                      "fontSize": 11,
                      "fill": "#333333",
                      "outlineWidth": 0,
                      "outlineColor": "transparent"
                  }
              },
              "text": {
                  "fontSize": 11,
                  "fill": "#333333",
                  "outlineWidth": 0,
                  "outlineColor": "transparent"
              },
              "ticks": {
                  "line": {},
                  "text": {
                      "fontSize": 10,
                      "fill": "#333333",
                      "outlineWidth": 0,
                      "outlineColor": "transparent"
                  }
              }
          },
          "annotations": {
              "text": {
                  "fontSize": 13,
                  "fill": "#333333",
                  "outlineWidth": 2,
                  "outlineColor": "#ffffff",
                  "outlineOpacity": 1
              },
              "link": {
                  "stroke": "#000000",
                  "strokeWidth": 1,
                  "outlineWidth": 2,
                  "outlineColor": "#ffffff",
                  "outlineOpacity": 1
              },
              "outline": {
                  "stroke": "#000000",
                  "strokeWidth": 2,
                  "outlineWidth": 2,
                  "outlineColor": "#ffffff",
                  "outlineOpacity": 1
              },
              "symbol": {
                  "fill": "#000000",
                  "outlineWidth": 2,
                  "outlineColor": "#ffffff",
                  "outlineOpacity": 1
              }
          },
          "tooltip": {
              "wrapper": {},
              "container": {
                  "background": "#ffffff",
                  "color": "#333333",
                  "fontSize": 12
              },
              "basic": {},
              "chip": {},
              "table": {},
              "tableCell": {},
              "tableCellValue": {}
          }
      }}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}

        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'ruby'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'c'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'go'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'python'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'scala'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'lisp'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'elixir'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'javascript'
                },
                id: 'lines'
            }
        ]}
    />
        </Box>
        <Typography variant="body2">{porcentage}</Typography>
      </Stack>
    </Paper>
  );
}

export default Paperr;
