import React, { useState } from "react";
import { Pie, PieChart, Sector, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "প্রাক-প্রাথমিক শিক্ষা কেন্দ্র", value: 40 },
  { name: "সহজ কোরআন শিক্ষা কেন্দ্র", value: 30 },
  { name: "সহজ কোরআন শিক্ষা কেন্দ্র (অ্যাডাল্ট)", value: 30 },
];

const COLORS = ["#1CA1AA", "#D44242", "#FF7723"];
const RADIAN = Math.PI / 180;

// Internal helper for rendering the actual SVG text element
const renderText = (x: number, y: number, name: string) => (
  <text
    x={x}
    y={y}
    fill="white"
    textAnchor="middle"
    dominantBaseline="central"
    style={{
      fontSize: "10px",
      fontWeight: "bold",
      pointerEvents: "none",
    }}
  >
    {name}
  </text>
);

const renderActiveShape = (props: any) => {
  const { cx, cy, midAngle, index, innerRadius, outerRadius, name } = props;

  const offset = 12;
  const dx = offset * Math.cos(-midAngle * RADIAN);
  const dy = offset * Math.sin(-midAngle * RADIAN);

  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + dx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + dy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <g>
      <Sector
        {...props}
        cx={cx + dx}
        cy={cy + dy}
        fill={COLORS[index % COLORS.length]}
      />
      {renderText(x, y, name)}
    </g>
  );
};

export default function FinalPieChart() {
  const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined);

  // This function prevents the "double text"
  const renderLabel = (props: any) => {
    // If this slice is the active one, return null (the activeShape handles it)
    if (props.index === activeIndex) {
      return null;
    }

    const { cx, cy, midAngle, innerRadius, outerRadius, name } = props;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return renderText(x, y, name);
  };

  return (
    <div style={{ width: "100%", maxWidth: "500px", height: "400px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            isAnimationActive={false}
            activeShape={renderActiveShape}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={0}
            outerRadius={120}
            dataKey="value"
            // style={{ fontSize: "7px" }}
             fontSize={1} 
            onMouseEnter={(_, index) => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(undefined)}
            labelLine={false}
            label={renderLabel} // Use the fixed label function here
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
