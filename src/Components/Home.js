import headshot from '../imgs/headshot.jpeg'
import { FaArrowDown } from 'react-icons/fa'

export default function Home() {
    return (
        <div id='home' className="home container">
            <h1 className="home__header">
                Hey, I'm <span>Gary</span>
            </h1>
            <img className='home__img' src={headshot} alt="professional headshot"/>
            <p className='home__subheader'>
                a frontend developer<br/>
                based in NJ/NYC
            </p>
            <p className='home__subheader home__subheader--dark'>specializing in Javascript, React, HTML, and CSS</p>
            <a href='#recent-projects' className='home__link'>My recent projects <FaArrowDown className='home__link-icon'/></a>
        </div>
    )
}