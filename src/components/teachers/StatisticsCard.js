import React from 'react';

const StatisticsCard = ({ icon, title, value, color = 'blue', bgColor = 'bg-blue-100', textColor = 'text-blue-600' }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex items-center">
        <div className={`p-2 ${bgColor} rounded-lg`}>
          <span className="text-2xl">{icon}</span>
        </div>
        <div className="mr-4">
          <p className="text-sm text-gray-600">{title}</p>
          <p className={`text-2xl font-bold ${textColor}`}>{value}</p>
        </div>
      </div>
    </div>
  );
};

export default StatisticsCard;
