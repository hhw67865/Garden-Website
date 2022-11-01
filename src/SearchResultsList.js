import plants from "./data"
import SearchResult from './SearchResult';

const SearchResultsList = ()=> {
    const searchResults = plants.map((plant)=>{
        
        return <SearchResult key={plant.id} vegetable={plant.vegetable} maturity={plant.maturity} cultivars={plant.cultivars} plantingDates={plant.plantingDates} spacing={plant.spacing} depth={plant.depth}></SearchResult>
    })
    return (
        <div className="grid-container">
            {searchResults}
        </div>
    )
}

export default SearchResultsList