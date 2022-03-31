import { FaRegEnvelope, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

export default function Contact() {
    return (
        <div id='contact' className="container contact">
            <h1 className="contact__header">Contact me</h1>

            <a href="home" className="contact__link">
                <p className="contact__link-type">Email <FaRegEnvelope className='contact__link-type-icon'/></p>
            </a>
            <p className="contact__link-handle">gary@garyk.dev</p>

            <a href="https://www.linkedin.com/in/garykassee/" target="_blank" rel="noreferrer" className="contact__link">
                <p className="contact__link-type">LinkedIn <FaLinkedinIn className='contact__link-type-icon'/></p>
            </a>
            <p className="contact__link-handle">/in/garykassee</p>

            <a href="https://twitter.com/gareWare" target="_blank" rel="noreferrer" className="contact__link">
                <p className="contact__link-type">Twitter <FaTwitter className='contact__link-type-icon'/></p>
            </a>
            <p className="contact__link-handle">gareWare</p>
            
        </div>
    )
}

//             <h2 className="contact__form-header">Or send me a message:</h2>
