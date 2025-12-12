import React from 'react'

const Card = ({key,name,flag,population,region,capital}) => {
  return (
    <div key={key} className=' border border-white'>
        <div className='h-40 w-full '>
        <img src={flag} alt="" className='w-full h-full object-cover'/>
        </div>
        <div className='w-full h-40'>
          <h1>Name: {name}</h1>
          <h1>Region: {region}</h1>
          <h1>Capital: {capital}</h1>
          <h1>Populations: {population}</h1>
        </div>
    </div>
  )
}

export default Card