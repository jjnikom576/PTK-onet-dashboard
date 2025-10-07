import React from 'react';

const GaugeChart = ({ value, max, title, color }) => {
  const percentage = (value / max) * 100;
  const rotation = (percentage / 100) * 180 - 90;
  
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-base font-bold mb-3 text-gray-800">{title}</h3>
      <div className="relative w-40 h-20 mb-2">
        <svg viewBox="0 0 200 100" className="w-full h-full">
          {/* Background arc */}
          <path
            d="M 20 80 A 80 80 0 0 1 180 80"
            fill="none"
            stroke="#f3f4f6"
            strokeWidth="16"
            strokeLinecap="round"
          />
          {/* Colored arc */}
          <path
            d="M 20 80 A 80 80 0 0 1 180 80"
            fill="none"
            stroke={color}
            strokeWidth="16"
            strokeLinecap="round"
            strokeDasharray={`${(percentage / 100) * 251} 251`}
            style={{ transition: 'stroke-dasharray 0.5s ease' }}
          />
          {/* Needle */}
          <line
            x1="100"
            y1="80"
            x2="100"
            y2="25"
            stroke="#1f2937"
            strokeWidth="3"
            strokeLinecap="round"
            transform={`rotate(${rotation} 100 80)`}
            style={{ transition: 'transform 0.5s ease' }}
          />
          {/* Center dot */}
          <circle cx="100" cy="80" r="6" fill="#1f2937" />
        </svg>
      </div>
      <div className="text-center">
        <p className="text-3xl font-extrabold" style={{ color }}>
          {value.toFixed(2)}
        </p>
        <p className="text-sm text-gray-500 mt-1">จาก {max} คะแนน</p>
      </div>
    </div>
  );
};

export default GaugeChart;
