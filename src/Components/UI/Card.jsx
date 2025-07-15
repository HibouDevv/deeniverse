import React from 'react';

const Card = ({ img, className = '', description }) => {
  return (
    <div className={`bg-white max-w-sm w-full rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105 duration-300 ${className}`}>
      <img src={img} alt="Card" className="w-full h-48 object-cover" />
      <div className="p-4">
        <p className="text-gray-700 text-sm sm:text-base">{description}</p>
      </div>
    </div>
  );
};

export default Card;
