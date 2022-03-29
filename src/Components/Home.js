import circle from '../imgs/circle.png'

export default function Home() {
    return (
        <div className="home container">
            <h1 className="home__header">
                Hey, I'm<br/> 
                Gary
            </h1>
            <img className='home__img' src={circle}/>
            <p className='home__subheader'>
                a frontend developer<br/>
                based in NJ/NYC
                </p>
            <p className='home__subheader home__subheader--dark'>specializing in Javascript, React, HTML, and CSS</p>
            <a href='/' className='home__link'>My Recent Projects ↓</a>
        </div>
    )
}