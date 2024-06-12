import React from 'react'

const IncDecBtn = ({ value, onIncrement, onDecrement }) => {
  return (
    <div className="button-container">
      <button onClick={onDecrement}>-</button>
      <span>{value}</span>
      <button onClick={onIncrement}>+</button>
    </div>
  )
}

export default IncDecBtn