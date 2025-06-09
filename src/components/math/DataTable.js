import React from 'react';

const DataTable = ({ 
  data = [], 
  headers = [], 
  title,
  className = "w-full border-collapse mt-4 mb-4",
  headerBgColor = "bg-gray-100",
  stripedRows = true
}) => {
  return (
    <div className="my-4">
      {title && <p className="font-medium mb-2">{title}</p>}
      <div className="overflow-x-auto">
        <table className={className}>
          <thead className={headerBgColor}>
            <tr>
              {headers.map((header, index) => (
                <th key={index} className="px-4 py-2 border-b border-gray-300 text-center font-semibold">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className={stripedRows && rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                {Array.isArray(row) ? (
                  row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="px-4 py-2 border-b border-gray-200 text-center">
                      {cell}
                    </td>
                  ))
                ) : (
                  Object.values(row).map((cell, cellIndex) => (
                    <td key={cellIndex} className="px-4 py-2 border-b border-gray-200 text-center">
                      {cell}
                    </td>
                  ))
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
