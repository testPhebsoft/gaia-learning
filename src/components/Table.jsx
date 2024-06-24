import React from 'react';

const Table = ({ headers = [], rows = [] }) => {
  // Slice the rows array to show at most 3 rows
  const slicedRows = rows.slice(0, 3);

  return (
    <table>
      <thead>
        <tr>
          {/* Map over the headers array to generate th elements */}
          {headers.map((header, index) => (
            <th key={index} className="pr-20 text-left text-gray-300">{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* Map over the rows array to generate tr and td elements */}
        {slicedRows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className="pr-20 text-left">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
