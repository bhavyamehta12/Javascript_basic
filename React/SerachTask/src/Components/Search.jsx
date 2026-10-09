import React from 'react'

const Search = ({search,setSearch}) => {
  function handleSearch(){
    
  }
  return (
    <div className='search-div'>
      <input type='text' value={search} onChange={(e)=>setSearch(e.target.value)} className='searchbox' placeholder='🔍 Search for products...'/>
      <button className='search-btn' onClick={handleSearch}>Search</button>
    </div>
  )
}

export default Search
