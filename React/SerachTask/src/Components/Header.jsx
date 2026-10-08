import '../App.css'
import Search from './Search'

const Header = ({search,setSearch}) => {
  return (
    <>
    <div className='header-div'>
      <h1 className='logo'>Logo</h1>
      <Search search={search} setSearch={setSearch}/>
    </div>
    </>
  )
}

export default Header
