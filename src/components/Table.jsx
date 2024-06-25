import React from 'react';

const Table = ({ headers = [], rows = [] }) => {
  // Ensure rows is an array of arrays
  let validRows;
  if (Array.isArray(rows[0])) {
    validRows = rows;
  } else {
    validRows = [rows];
  }

  // Slice the rows array to show at most 3 rows
  const slicedRows = validRows.slice(0, 3);

  return (
    <table className="border-b border-gray-300 w-full">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index} className="pr-20 text-left text-gray-400 font-medium">{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {slicedRows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className={`pr-20 text-left font-medium py-4 ${cellIndex === 3 ? 'text-teal-500' : ''}`}>{cell}</td>
            ))}
          </tr>
        ))}
        {/* Display a message if rows are empty or invalid */}
        {slicedRows.length === 0 && (
          <tr>
            <td colSpan={headers.length} className="text-left">No data available</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
