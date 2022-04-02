import emailjs from '@emailjs/browser'
import { useState, useRef } from 'react'
import { FaRegEnvelope, FaLinkedinIn, FaTwitter, FaGithub } from 'react-icons/fa'

export default function Contact() {
    const form = useRef()
    const [formInput, setFormInput] = useState({
        emailInput: "",
        subjectInput: "",
        messageInput: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setFormInput(prevInput => ({
            ...prevInput,
            [name]: value
        }))
    }

    // add loading indicator while form submitting
    const handleSubmit = e => {
        e.preventDefault();
        emailjs.sendForm('service_zgnvac9', 'template_7eyss0i', form.current, 'LvJXPFneuivSpJduu')
        .then((result) => {
            console.log(result.text);
            window.location.reload(false)
        }, (error) => {
            console.log(error.text);
        });
    }

    const { emailInput, subjectInput, messageInput } = formInput

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
                <form ref={form} onSubmit={handleSubmit} className='contact__message-form'>
                <label>
                        Email
                        <input 
                            name='emailInput'
                            type='email'
                            value={emailInput}
                            onChange={handleChange}
                            required
                        />
                    </label>
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
