import { FaRegFilePdf } from 'react-icons/fa'

export default function About() {
    return (
        <div id='about' className="container about">
            <h1 className="about__header">About me</h1>
            
            <div className="about__body-full">
                <p className="about__body">
                I have an affinity for all things technology. Throughout my life and in any job I’ve had, this has always found a way to prove true. As toddler I spent most of my time tinkering with my computer. As a teenager I would flash custom ROM’s on my smartphone. As a waiter I would be implementing new POS systems to increase efficiency and sales.</p>
                <p className="about__body">I spent many years on a quest to sharpen my soft skills. But as I’ve gotten older, I've naturally returned to my roots. I am driven to finally pursue my true passion and commit to the world of web development. I have established some ambitious goals for myself and my journey to achieve them has begun. Please reach out if you would like to take part!</p>
            </div>

            <a href="https://drive.google.com/file/d/1c65zpkdLQyI1F4hmTV4tjnyEl_68Ma4b/view?usp=sharing" target="_blank" rel="noreferrer" className="about__link">View resume <FaRegFilePdf className="about__link-icon" /></a>
        </div>
    )
}

            /* <p className="about__body">I thus quit my job and have spent the past year learning various web development technologies. I take pride in my ability to grasp languages quickly, and the idea that there will always be more to learn is what excites me most about the industry.</p> */