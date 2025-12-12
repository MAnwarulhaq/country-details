import React from "react";

const Card = ({ name, flag, population, region, capital }) => {
  return (
    <div
      className="rounded-2xl overflow-hidden shadow-lg bg-white/10 backdrop-blur-lg border border-white/20 
      hover:scale-[1.03] hover:shadow-xl transition-all duration-300 cursor-pointer"
    >
      
      <div className="h-44 w-full">
        <img
          src={flag}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

  
      <div className="p-4 space-y-1 bg-white">
        <h1 className="text-lg font-semibold">{name}</h1>
        <p className="text-sm opacity-80"><span className="font-medium">Region:</span> {region}</p>
        <p className="text-sm opacity-80"><span className="font-medium">Capital:</span> {capital}</p>
        <p className="text-sm opacity-80"><span className="font-medium">Population:</span> {population.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default Card;
