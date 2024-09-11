import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ConectUs from './Components/ConectUs'
import CardUi from './Components/CardUi'
import Customer from './Components/Customer'
import Service from './Components/Service'
import Navbar from './Components/Navbar'


function App() {
  return (
<div>
  <Navbar/>
<Service/>
<ConectUs/>
<CardUi/>
<Customer/>
</div>
  )
}

export default App
