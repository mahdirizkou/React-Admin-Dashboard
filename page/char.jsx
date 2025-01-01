import { ResponsiveBar } from '@nivo/bar';
import Box from '@mui/material/Box';
import React, {useContext, createContext } from "react";
import { DarkModeContext } from "../src/App";


const data = [
  {
    "country": "AD",
    "hot dog": 153,
    "hot dogColor": "hsl(156, 70%, 50%)",
    "burger": 27,
    "burgerColor": "hsl(94, 70%, 50%)",
    "sandwich": 65,
    "sandwichColor": "hsl(11, 70%, 50%)",
    "kebab": 107,
    "kebabColor": "hsl(257, 70%, 50%)",
    "fries": 51,
    "friesColor": "hsl(352, 70%, 50%)",
    "donut": 87,
    "donutColor": "hsl(265, 70%, 50%)"
  },
  {
    "country": "AE",
    "hot dog": 58,
    "hot dogColor": "hsl(314, 70%, 50%)",
    "burger": 150,
    "burgerColor": "hsl(8, 70%, 50%)",
    "sandwich": 103,
    "sandwichColor": "hsl(124, 70%, 50%)",
    "kebab": 123,
    "kebabColor": "hsl(335, 70%, 50%)",
    "fries": 1,
    "friesColor": "hsl(42, 70%, 50%)",
    "donut": 200,
    "donutColor": "hsl(353, 70%, 50%)"
  },
  {
    "country": "AF",
    "hot dog": 77,
    "hot dogColor": "hsl(91, 70%, 50%)",
    "burger": 120,
    "burgerColor": "hsl(74, 70%, 50%)",
    "sandwich": 41,
    "sandwichColor": "hsl(308, 70%, 50%)",
    "kebab": 63,
    "kebabColor": "hsl(221, 70%, 50%)",
    "fries": 157,
    "friesColor": "hsl(352, 70%, 50%)",
    "donut": 160,
    "donutColor": "hsl(127, 70%, 50%)"
  },
  {
    "country": "AG",
    "hot dog": 139,
    "hot dogColor": "hsl(128, 70%, 50%)",
    "burger": 48,
    "burgerColor": "hsl(236, 70%, 50%)",
    "sandwich": 150,
    "sandwichColor": "hsl(13, 70%, 50%)",
    "kebab": 181,
    "kebabColor": "hsl(132, 70%, 50%)",
    "fries": 127,
    "friesColor": "hsl(53, 70%, 50%)",
    "donut": 61,
    "donutColor": "hsl(304, 70%, 50%)"
  },
  {
    "country": "AI",
    "hot dog": 148,
    "hot dogColor": "hsl(227, 70%, 50%)",
    "burger": 152,
    "burgerColor": "hsl(151, 70%, 50%)",
    "sandwich": 33,
    "sandwichColor": "hsl(108, 70%, 50%)",
    "kebab": 10,
    "kebabColor": "hsl(306, 70%, 50%)",
    "fries": 140,
    "friesColor": "hsl(274, 70%, 50%)",
    "donut": 132,
    "donutColor": "hsl(146, 70%, 50%)"
  },
  {
    "country": "AL",
    "hot dog": 60,
    "hot dogColor": "hsl(174, 70%, 50%)",
    "burger": 144,
    "burgerColor": "hsl(321, 70%, 50%)",
    "sandwich": 112,
    "sandwichColor": "hsl(220, 70%, 50%)",
    "kebab": 105,
    "kebabColor": "hsl(350, 70%, 50%)",
    "fries": 175,
    "friesColor": "hsl(205, 70%, 50%)",
    "donut": 12,
    "donutColor": "hsl(91, 70%, 50%)"
  },
  {
    "country": "AM",
    "hot dog": 186,
    "hot dogColor": "hsl(84, 70%, 50%)",
    "burger": 198,
    "burgerColor": "hsl(53, 70%, 50%)",
    "sandwich": 161,
    "sandwichColor": "hsl(325, 70%, 50%)",
    "kebab": 15,
    "kebabColor": "hsl(121, 70%, 50%)",
    "fries": 140,
    "friesColor": "hsl(334, 70%, 50%)",
    "donut": 91,
    "donutColor": "hsl(358, 70%, 50%)"
  }
]

function Char({isDashboard = false}) {
  const { DarkMode } = useContext(DarkModeContext);
  return (
     <Box sx={{ height: isDashboard ? "288px" : "75vh"}}>
    <ResponsiveBar
      data={data}
      keys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']}
      indexBy="country"
      theme={{
        "text": {
            "fontSize": 11,
            "fill": DarkMode ? "#fff" : "#333",
            "outlineWidth": 0,
            "outlineColor": "transparent"
        },
        "axis": {
            "domain": {
                "line": {
                    stroke: DarkMode ? "#fff" : "#333",
                    "strokeWidth": 1
                }
            },
            "legend": {
                "text": {
                    "fontSize": 12,
                     fill: DarkMode ? "#fff" : "#333",
                    "outlineWidth": 0,
                    "outlineColor": "transparent"
                }
            },
            "ticks": {
                "line": {
                    "stroke":DarkMode ? "#fff" : "#333", 
                    "strokeWidth": 1
                },
                "text": {
                    "fontSize": 11,
                    "fill": DarkMode ? "#fff" : "#333",
                    "outlineWidth": 0,
                    "outlineColor": "transparent"
                }
            }
        },
        "grid": {
            "line": {
                "stroke": DarkMode ? "#fff" : "#333",
                "strokeWidth": 1
            }
        },
        "legends": {
            "title": {
                "text": {
                    "fontSize": 11,
                    "fill": DarkMode ? "#fff" : "#333",
                    "outlineWidth": 0,
                    "outlineColor": "transparent"
                }
            },
            "text": {
                "fontSize": 11,
                "fill": DarkMode ? "#fff" : "#333",
                "outlineWidth": 0,
                "outlineColor": "transparent"
            },
            "ticks": {
                "line": {},
                "text": {
                    "fontSize": 10,
                    "fill": DarkMode ? "#fff" : "#333",
                    "outlineWidth": 0,
                    "outlineColor": "transparent"
                }
            }
        },
        "annotations": {
            "text": {
                "fontSize": 13,
                "fill": DarkMode ? "#fff" : "#333",
                "outlineWidth": 2,
                "outlineColor": DarkMode ? "#fff" : "#333",
                "outlineOpacity": 1
            },
            "link": {
                "stroke": "#000000",
                "strokeWidth": 1,
                "outlineWidth": 2,
                "outlineColor": DarkMode ? "#fff" : "#333",
                "outlineOpacity": 1
            },
            "outline": {
                "stroke": "#000000",
                "strokeWidth": 2,
                "outlineWidth": 2,
                "outlineColor": DarkMode ? "#fff" : "#333",
                "outlineOpacity": 1
            },
            "symbol": {
                "fill": "#000000",
                "outlineWidth": 2,
                "outlineColor": DarkMode ? "#fff" : "#333",
                "outlineOpacity": 1
            }
        },
        "tooltip": {
            "wrapper": {},
            "container": {
                "background": DarkMode ? "#fff" : "#333",
                "color": DarkMode ? "#fff" : "#333",
                "fontSize": 12
            },
            "basic": {},
            "chip": {},
            "table": {},
            "tableCell": {},
            "tableCellValue": {}
        }
    }}
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      colors={{ scheme: 'nivo' }}
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: '#38bcb2',
          size: 4,
          padding: 1,
          stagger: true
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: '#eed312',
          rotation: -45,
          lineWidth: 6,
          spacing: 10
        }
      ]}
      fill={[
        {
          match: {
            id: 'fries'
          },
          id: 'dots'
        },
        {
          match: {
            id: 'sandwich'
          },
          id: 'lines'
        }
      ]}
      borderColor={{
        from: 'color',
        modifiers: [['darker', 1.6]]
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? null :'country',
        legendPosition: 'middle',
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? null :'food',
        legendPosition: 'middle',
        legendOffset: -40,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: 'color',
        modifiers: [['darker', 1.6]]
      }}
      legends={[
        {
          dataFrom: 'keys',
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: 'left-to-right',
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: 'hover',
              style: {
                itemOpacity: 1
              }
            }
          ]
        }
      ]}
      role="application"
      ariaLabel="Nivo bar chart demo"
      barAriaLabel={(e) => `${e.id}: ${e.formattedValue} in country: ${e.indexValue}`}
    />
    </Box>
  );
}

export default Char;
