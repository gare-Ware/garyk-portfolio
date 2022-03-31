
import { useState } from "react"
import { HashLink } from 'react-router-hash-link'

export default function Navbar() {
    
    const [menuOpen, setMenuOpen] = useState(false)
    
    const toggleMenu = () => setMenuOpen(!menuOpen)
    const closeMenu = () => setMenuOpen(false)

    return (
        <>
            <header className="navbar">
                <div className={menuOpen ? "navbar__burger open" : "navbar__burger"} onClick={toggleMenu} >
                    <div className="navbar__burger-btn"></div>
                </div>
                <nav className="navbar__menu-large-screen">
                    <ul className="navbar__menu-items" onClick={closeMenu}>
                        <li><HashLink smooth to="/#top">Home</HashLink></li>
                        <li><HashLink smooth to="/#about">About</HashLink></li>
                        <li><HashLink smooth to="/#recent-projects">Recent projects</HashLink></li>
                    </ul>
                    <HashLink smooth to="/#contact" className="navbar__contact navbar__contact-large-screen" onClick={closeMenu}>Contact</HashLink>
                </nav>
                <HashLink smooth to="/#contact" className="navbar__contact" onClick={closeMenu}>Contact</HashLink>
            </header>
            <nav className={menuOpen ? "navbar__menu active" : "navbar__menu"}>
                <h1 className="navbar__menu-header">Jump to</h1>
                <ul className="navbar__menu-items" onClick={closeMenu}>
                    <li><HashLink smooth to="/#top">Home</HashLink></li>
                    <li><HashLink smooth to="/#about">About</HashLink></li>
                    <li><HashLink smooth to="/#recent-projects">Recent projects</HashLink></li>
                    <li><HashLink smooth to="/#contact">Contact</HashLink></li>
                </ul>
            </nav>
        </>
    )
}