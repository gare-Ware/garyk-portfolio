
import { useState } from "react"
import { HashLink } from 'react-router-hash-link'

export default function Navbar() {
    
    const [menuOpen, setMenuOpen] = useState(false)
    
    const toggleMenu = () => setMenuOpen(!menuOpen)

    return (
        <>
            <header className="navbar">
                <div className={menuOpen ? "navbar__burger open" : "navbar__burger"} onClick={toggleMenu} >
                    <div className="navbar__burger-btn"></div>
                </div>
                <HashLink smooth to="/#contact" className="navbar__contact" onClick={toggleMenu}>Contact</HashLink>
            </header>
            <nav className={menuOpen ? "navbar__menu active" : "navbar__menu"}>
                <h1 className="navbar__menu-header">Jump to</h1>
                <ul className="navbar__menu-items" onClick={toggleMenu}>
                    <li><HashLink smooth to="/#top">Home</HashLink></li>
                    <li><HashLink smooth to="/#about">About</HashLink></li>
                    <li><HashLink smooth to="/#recent-projects">Recent projects</HashLink></li>
                    <li><HashLink smooth to="/#contact">Contact</HashLink></li>
                </ul>
            </nav>
        </>
    )
}
