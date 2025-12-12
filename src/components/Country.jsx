import React, { cacheSignal, useState } from 'react'
import countrydata from '../countrydata/countrydata'
import Card from './Card'
const Country = () => {

  return (
    <div className='max-w-[90%] mx-auto '>
      <h1>Country Data</h1>
      <div className='grid grid-cols-4 gap-5 '>
        {
          countrydata.map((country) => (
            <Card
              key={country.name.common}
              name={country.name.common}
              flag={country.flags.svg}
              population={country.population}
              region={country.region}
              capital={country.capital?.[0]}
            />
          ))
        }
      </div>

    </div>
  )
}

export default Country