
import SearchResult from './SearchResult';


const SearchResultsList = ({filteredPlants})=> {

    const searchResults = filteredPlants.map((plant)=>{
        
        return <SearchResult key={plant.id} {...plant}></SearchResult>
    })


    return (
        <div className="item3">
            
            <div className="searchResults">
                {searchResults}
            </div>
        </div>
    )
}

export default SearchResultsList
