import React from "react";

const Card = ({ imgUrl, dishName, hotelName, buttonText }) => {
  return (
    <div className="w-[200px] bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-4 flex flex-col items-center gap-2 text-white shadow-md border border-white/30 hover:shadow-lg transition-shadow duration-300">
      <img
        src={imgUrl}
        alt={dishName + " image"}
        className="w-full h-20 object-cover rounded-md"
        />
      <p className="font-semibold text-lg truncate">{dishName}</p>
      <p className="font-semibold text-sm truncate">{hotelName}</p>
      <button className="mt-auto bg-green-500 hover:bg-green-600 text-white py-1.5 px-6 rounded-lg font-semibold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-400">
        {buttonText}
      </button>
    </div>
  );
};

export default Card;

