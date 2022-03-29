
export default function Contact() {
    return (
        <div id='contact' className="container contact">
            <h1 className="contact__header">Contact me</h1>

            <a href="home" className="contact__link">
                <p className="contact__link-type">Email</p>
                <p className="contact__link-handle">gary@garyk.dev</p>
            </a>
            <a href="https://www.linkedin.com/in/garykassee/" target="_blank" className="contact__link">
                <p className="contact__link-type">LinkedIn</p>
                <p className="contact__link-handle">/in/garykassee</p>
            </a>
            <a href="https://twitter.com/gareWare" target="_blank" className="contact__link">
                <p className="contact__link-type">Twitter</p>
                <p className="contact__link-handle">gareWare</p>
            </a>

            
        </div>
    )
}

//             <h2 className="contact__form-header">Or send me a message:</h2>
