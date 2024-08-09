import { useContext } from "react"
import { Link } from "react-router-dom"
import { ThemeContext } from "../context/ThemeContext"


const Navbar = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <>
            <div className="navbar" style={{background : theme === 'light' ? 'black' : 'white'}}>
                <Link style={{color : theme === 'light' ? 'white' : 'black'}} to="/">Home</Link>
                <Link style={{color : theme === 'light' ? 'white' : 'black'}} to="/about">About</Link>
                <Link style={{color : theme === 'light' ? 'white' : 'black'}} to="/blog">Blog</Link>
                <button onClick={toggleTheme} style={{background : theme === 'light' ? 'white' : 'black'}}>🌙</button>
            </div>

        </>
    )
}

export default Navbar