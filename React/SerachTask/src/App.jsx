import React from 'react'
import Header from './Components/Header'
import './App.css'
import { useState } from 'react'
import Body from './Components/Body'

const App = () => {
  const [search, setSearch] = useState("");
  return (
    <div className='main'>
      <Header search={search} setSearch={setSearch}/>
      <Body/>
    </div>
  )
}

export default App
