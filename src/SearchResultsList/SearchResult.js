import {useState} from 'react'

const SearchResult = ({id, vegetable, maturity, cultivars, plantingDates, spacing, depth,img})=>{

    const [likes, setLikes] = useState(0);

    const handleLike = () => {
        setLikes(prevLikes => prevLikes+1)
    }

    return (
        <div className="grid-item" key={id}>
            <img src={img} style={{width:"100%", height: "60%", objectFit:"cover"}}></img>
            <em>{vegetable.toUpperCase()}</em><br/>
            {/* <li>{maturity}</li> */}
            <strong>{cultivars}</strong>
            {/* <li>{plantingDates}</li> */}
            {/* <li>{spacing}</li> */}
            {/* <li>{depth}</li> */}
            {/* <button onClick={handleLike}>❤️ {likes}</button> */}
        </div>
    )
}

export default SearchResult
