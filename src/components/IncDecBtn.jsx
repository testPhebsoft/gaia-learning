import React from 'react';

const IncDecBtn = ({ value, onIncrement, onDecrement }) => {
  return (
    <div className="inline-flex items-center border border-gray-300 rounded">
      <button
        onClick={onDecrement}
        className="px-2 py-1 border-r border-gray-300"
      >
        -
      </button>
      <span className="px-2 py-1">{value}</span>
      <button
        onClick={onIncrement}
        className="px-2 py-1 border-l border-gray-300"
      >
        +
      </button>
    </div>
  );
};

export default IncDecBtn;