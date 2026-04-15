import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Cell 
} from 'recharts';

const StackedBarChart = () => {
  // Data updated to reflect the visual categories
  const data = [
    { name: '২০২১', pv: 70 },
    { name: '২০২২', pv: 80 },
    { name: '২০২১', pv: 88 },
    { name: '২০২২', pv: 100 },
    { name: '২০২১', pv: 45 },
    { name: '২০২২', pv: 50 },
  ];

  // Colors mapping exactly to the 2nd image
  const colors = [
    '#C1C1C1', // 2021 (Grey)
    '#006F40', // 2022 (Dark Green)
    '#C1C1C1', // 2021 (Grey)
    '#96D234', // 2022 (Lime Green)
    '#C1C1C1', // 2021 (Grey)
    '#FEC125'  // 2022 (Yellow)
  ];

  return (
    <div style={{ width: '100%', maxWidth: '700px', height: '400px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
          barGap={0} // Makes paired bars touch
        >
          {/* Horizontal lines only, matching the image style */}
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#EEEEEE" />
          
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#333', fontSize: 14 }}
          />
          
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#333', fontSize: 14 }}
          />
          
          <Tooltip cursor={{ fill: 'transparent' }} />
          
          <Bar dataKey="pv">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      
      {/* Sub-labels for categories can be added here with a simple div flexbox */}
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '-15px', fontSize: '12px', fontWeight: 'bold' }}>
        <span>প্রাক-প্রাথমিক</span>
        <span>সহজ কুরআন শিক্ষা</span>
        <span>সহজ কুরআন শিক্ষা (বয়স্ক)</span>
      </div>
    </div>
  );
};

export default StackedBarChart;