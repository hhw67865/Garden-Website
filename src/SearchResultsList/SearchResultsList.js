import plants from "../data"
import SearchResult from './SearchResult';
import {useState} from 'react'

const SearchResultsList = ()=> {
    const [searchQuery, setSearchQuery] = useState("");

    function handleChange (e) {
        setSearchQuery(e.target.value)
    }
    
    const filteredPlants = plants.filter((plant)=>{
        
        return plant.vegetable.toLowerCase().includes(searchQuery.toLowerCase())
    })


    const searchResults = filteredPlants.map((plant)=>{
        
        return <SearchResult key={plant.id} {...plant}></SearchResult>
    })






    return (
        <div className="item3">
            <div id="plantSearch">
                <input type="text" onChange={handleChange} placeholder="Search.."></input>
            </div>
            <div className="searchResults">
                {searchResults}
            </div>
        </div>
    )
}

export default SearchResultsList
