import './App.css';
import NavBar from "./NavBar/NavBar"
import SearchResultsList from './SearchResultsList/SearchResultsList';
import Filter from "./Filter/Filter"
import Logo from "./Logo/Logo"
import Footer from "./Footer/Footer"




function App() {

  return (
    <>
      <NavBar></NavBar>
      <div className="grid-container">
        <Logo/>
        <Filter/>
        <SearchResultsList></SearchResultsList>
        <Footer/>
      </div>
    </>
  );
}

export default App;
