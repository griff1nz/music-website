// Shamelessly stolen from my portfolio website and slightly modified
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import './ContactForm.css'

var resultText;
function ContactForm() {
    // state={
    //     showMessage: false
    // }
    const [display, setDisplay] = useState('false');
    const toggleDisplay = () => {
        setDisplay((bro) => bro = 'true');
    }
    const form = useRef();
    function submitHandler(event) {
        event.preventDefault();
        // console.log(event.target);
        emailjs.sendForm('service_d097u9z', 'template_ozraatf', event.target, 'UilRHb2BzE7-tA5cA') //Will have to find a way to hide this later
            .then((result) => {
                console.log(result.text);

                resultText = "Thank you for your message! I will get back to you as soon as I can."
                toggleDisplay();
                event.target.reset();
            }, (error) => {
                console.log(error.text);
                resultText = "There was an error sending your message; Please try again."
                toggleDisplay();
            });
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor='firstnametext'>First Name</label>
                    <input type='text' required name='firstname' id='firstnametext' />
                </div>
                <div>
                    <label htmlFor='lastnametext'>Last Name</label>
                    <input type='text' required name='lastname' id='lastnametext' />
                </div>
                <div>
                    <label htmlFor='emailtext' >Email</label>
                    <input type='email' required name='email' id='emailtext'></input>
                </div>
                <div >
                    <label htmlFor='messagetext' >Message</label>
                    <textarea rows='5' required name='message' id='messagetext'></textarea>
                </div>
                <button id='sendbutton'>Send</button>
                {display == 'true' && <p>{resultText}</p>}
            </form>
        </div>
    )
}

export default ContactForm;