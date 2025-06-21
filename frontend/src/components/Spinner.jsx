import React from 'react'

const Spinner = ({width, height, color}) => {
  return (
    <div>
        <div className="flex justify-center items-center space-x-2">
      <div className={`${width} ${height} ${color} rounded-full animate-bounce [animation-delay:-0.3s] `}></div>
      <div className={`${width} ${height} ${color} rounded-full animate-bounce [animation-delay:-0.15s]`}></div>
      <div className={`${width} ${height} ${color} rounded-full animate-bounce`}></div>
    </div>
    </div>
  )
}

export default Spinner
