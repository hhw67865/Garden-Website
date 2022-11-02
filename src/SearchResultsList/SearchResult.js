import {useState} from 'react'

const SearchResult = ({id, vegetable, maturity, cultivars, plantingDates, spacing, depth})=>{

    const [likes, setLikes] = useState(0);

    const handleLike = () => {
        setLikes(prevLikes => prevLikes+1)
    }

    return (
        <ul className="grid-item" key={id}>
            <li>{vegetable}</li>
            <li>{maturity}</li>
            <li>{cultivars}</li>
            <li>{plantingDates}</li>
            <li>{spacing}</li>
            <li>{depth}</li>
            <button onClick={handleLike}>❤️ {likes}</button>
        </ul>
    )
}

export default SearchResult
