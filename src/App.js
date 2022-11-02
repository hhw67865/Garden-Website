import './App.css';
import NavBar from "./NavBar"
import SearchResultsList from './SearchResultsList';



function App() {
  return (
    <>
      <NavBar></NavBar>
      <div id="main-container">
        <SearchResultsList></SearchResultsList>
      </div>
    </>
  );
}

export default App;
