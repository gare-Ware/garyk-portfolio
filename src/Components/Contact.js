import { useState } from 'react'
import { FaRegEnvelope, FaLinkedinIn, FaTwitter, FaGithub } from 'react-icons/fa'

export default function Contact() {
    
    const [subjectInput, setSubjectInput] = useState("")
    const [messageInput, setMessageInput] = useState("")
    
    const handleChange = e => {
        const value = e.target.value
        const name = e.target.name
        name === 'subjectInput'
            ? setSubjectInput(value)
            : setMessageInput(value)
    }

    return (
        <div id='contact' className="container contact">
            <h1 className="contact__header">Contact me</h1>
            <div className='contact__handles'>
                <a href="mailto:gary@garyk.dev" className="contact__link">
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
                <a href="https://github.com/gare-Ware" target="_blank" rel="noreferrer" className="contact__link">
                    <p className="contact__link-type">Github <FaGithub className='contact__link-type-icon'/></p>
                </a>
                <p className="contact__link-handle">gare-Ware</p>
            </div>
            <div className='contact__message'>
                <h2 className="contact__message-header">Send me a message:</h2>

                <form id='message' className='contact__message-form'>
                    <label>
                        Subject
                        <input 
                            name='subjectInput'
                            type='text'
                            value={subjectInput}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Message
                        <textarea 
                            name='messageInput'
                            type='text'
                            value={messageInput}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <button type='submit'>Send</button>
                </form>

            </div>
        </div>
    )
}
