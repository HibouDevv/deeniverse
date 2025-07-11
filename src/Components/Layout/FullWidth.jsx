import React from 'react'

const FullWidth = ({ children , className}) => {
  return (
    <div className={`text-black bg-gray-700 py-10 w-full  ${className}`}>
        {children}
    </div>
  )
}

export default FullWidth