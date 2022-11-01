const SearchResult = ({id, vegetable, maturity, cultivars, plantingDates, spacing, depth})=>{

    return (
        <ul className="grid-item" key={id}>
            <li>{vegetable}</li>
            <li>{maturity}</li>
            <li>{cultivars}</li>
            <li>{plantingDates}</li>
            <li>{spacing}</li>
            <li>{depth}</li>
        </ul>
    )
}

export default SearchResult