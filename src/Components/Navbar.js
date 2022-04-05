
import { useState } from "react"

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
                    <ul className="navbar__menu-items">
                        <li><a href="#top">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#recent-projects">Recent projects</a></li>
                    </ul>
                    <a href="#contact" className="navbar__contact navbar__contact-large-screen" onClick={closeMenu}>Contact</a>
                </nav>
                <a href="#contact" className="navbar__contact" onClick={closeMenu}>Contact</a>
            </header>
            <nav className={menuOpen ? "navbar__menu active" : "navbar__menu"}>
                <h1 className="navbar__menu-header">Jump to</h1>
                <ul className="navbar__menu-items" onClick={closeMenu}>
                    <li><a href="#top">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#recent-projects">Recent projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </>
    )
}