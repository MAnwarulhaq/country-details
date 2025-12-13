import React from 'react'

const CountriesListShimmer = () => {
  return (
    <div className='grid grid-cols-4 my-5 gap-5  '>
     <div
      className="  rounded-2xl bg-[#ccc]"
    >
      
      <div className="h-44 w-full">
       
      </div>

  
      <div className="p-4 space-y-1 h-40 w-full">
        <h1 className="text-lg font-semibold "></h1>
        <p className="text-sm opacity-80"></p>
        <p className="text-sm opacity-80"></p>
        <p className="text-sm opacity-80"></p>
      </div>
    </div>
    <div
      className=" rounded-2xl bg-[#ccc]"
    >
      
      <div className="h-44 w-full">
       
      </div>

  
      <div className="p-4 space-y-1 h-40 w-full">
        <h1 className="text-lg font-semibold "></h1>
        <p className="text-sm opacity-80"></p>
        <p className="text-sm opacity-80"></p>
        <p className="text-sm opacity-80"></p>
      </div>
    </div>
    
    </div>
  )
}

export default CountriesListShimmer