import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CountriesList from './components/CountriesList'
import CountryDetail from './components/CountryDetail'
import { BrowserRouter,Routes,Route } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<CountriesList/>}/>
      <Route path='/countrydetail/:name' element={<CountryDetail/>}/>
    </Routes>
    </BrowserRouter>
    {/* <Country/> */}
    {/* <CountryDetail/> */}
    </>
  )
}

export default App
