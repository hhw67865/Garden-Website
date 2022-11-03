import './App.css';
import NavBar from "./NavBar/NavBar"
import SearchResultsList from './SearchResultsList/SearchResultsList';
import Filter from "./Filter/Filter"
import Logo from "./Logo/Logo"
import Footer from "./Footer/Footer"
import {useState} from 'react'
import plants from "./data"




function App() {
  const [searchQuery, setSearchQuery] = useState("");
  function handleChange (e) {
    setSearchQuery(e.target.value)
}

const filteredPlants = plants.filter((plant)=>{
        
  return plant.vegetable.toLowerCase().includes(searchQuery.toLowerCase())
})

  console.log(searchQuery);

  return (
    <>
      <NavBar></NavBar>
      <div className="grid-container">
        <Logo/>
        <Filter searchQuery={searchQuery} setSearchQuery={setSearchQuery} handleChange={handleChange}/>
        <SearchResultsList
          handleChange={handleChange}
          filteredPlants={filteredPlants}
        ></SearchResultsList>
        <Footer/>
      </div>
    </>
  );
}

export default App;
