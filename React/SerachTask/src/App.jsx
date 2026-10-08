import React from 'react'
import Header from './Components/Header'
import './App.css'
import { useState } from 'react'

const App = () => {
  const [search, setSearch] = useState("");
  return (
    <div className='main'>
      <Header search={search} setSearch={setSearch}/>
    </div>
  )
}

export default App
