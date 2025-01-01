import React from 'react';
import { ResponsivePie } from '@nivo/pie'
import Box from '@mui/material/Box';
import { useContext , createContext } from 'react';
import { DarkModeContext } from "../src/App";

const data  = [  {
    "id": "css",
    "label": "css",
    "value": 398,
    "color": "hsl(281, 70%, 50%)"
  },
  {
    "id": "stylus",
    "label": "stylus",
    "value": 572,
    "color": "hsl(242, 70%, 50%)"
  },
  {
    "id": "c",
    "label": "c",
    "value": 328,
    "color": "hsl(148, 70%, 50%)"
  },
  {
    "id": "hack",
    "label": "hack",
    "value": 232,
    "color": "hsl(129, 70%, 50%)"
  },
  {
    "id": "python",
    "label": "python",
    "value": 96,
    "color": "hsl(207, 70%, 50%)"
  }
]
function Pie({isDashboard = false}) {
    const { DarkMode } = useContext(DarkModeContext);
  return (
    <Box sx={{ height: isDashboard ? "288px" : "75vh"}}>
    <ResponsivePie
    data={data}
    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
    innerRadius={0.5}
    padAngle={0.7}
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
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextColor= {DarkMode ? "#fff" : "#333"}
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: 'color' }}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor={{
        from: 'color',
        modifiers: [
            [
                'darker',
                2
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
    legends={[
        {
            anchor: 'bottom',
            direction: 'row',
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: '#999',
            itemDirection: 'left-to-right',
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: 'circle',
            effects: [
                {
                    on: 'hover',
                    style: {
                        itemTextColor: '#000'
                    }
                }
            ]
        }
    ]}
/>
</Box>
  );
}

export default Pie;