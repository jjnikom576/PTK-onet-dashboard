import React from 'react';

const StatCard = ({ title, value, subtitle, trend, color }) => (
  <div 
    className="bg-white rounded-xl shadow-lg p-6 border-l-4 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" 
    style={{ borderColor: color }}
  >
    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
      {title}
    </p>
    <p className="text-4xl font-extrabold mb-2" style={{ color }}>
      {value}
    </p>
    <p className="text-sm text-gray-600">{subtitle}</p>
    {trend !== undefined && (
      <div className={`mt-3 inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
        trend > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
      }`}>
        <span className="text-lg mr-1">{trend > 0 ? '↑' : '↓'}</span>
        {Math.abs(trend).toFixed(0)} จากปีที่แล้ว
      </div>
    )}
  </div>
);

export default StatCard;
