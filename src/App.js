import './App.css';
import NavBar from "./NavBar"
import SearchBar from "./SearchBar"
import SearchResultsList from './SearchResultsList';
import plants from './data.js'


function App() {
  return (
    <>
      <NavBar></NavBar>
      <SearchBar></SearchBar>
      <SearchResultsList></SearchResultsList>
    </>
  );
}

export default App;
