import { useState } from 'react'


const NavBar = () => {
const [clicked, setClicked] = useState(true)

    function handleClick () {
        setClicked(()=>!clicked)
    }

    return (
        <div className="navBar">            
            <a>Home</a>
            <a>News</a>
            <a>Contact</a>
            <a>About</a>   
            <button onClick={handleClick}>{clicked? "😎":"😘"}</button>         
        </div>
    )
}

export default NavBar