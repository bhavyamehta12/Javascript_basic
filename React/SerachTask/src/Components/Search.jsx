import React from 'react'

const Search = ({search,setSearch}) => {
  return (
    <div className='search-div'>
      <input type='text' value={search} onChange={(e)=>setSearch(e.target.value)} className='searchbox' placeholder='🔍 Search for products...'/>
    </div>
  )
}

export default Search
