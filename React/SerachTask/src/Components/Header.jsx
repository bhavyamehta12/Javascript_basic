import Search from './Search';

export default function Header({search,setSearch}) {
  return (
    <header id="header-container">
      <div id="logo">LOGO</div>
      <Search search={search} setSearch={setSearch}/>
    </header>
  );
}