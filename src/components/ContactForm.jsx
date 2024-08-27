// Shamelessly stolen from my portfolio website and slightly modified
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import './ContactForm.css'

var resultText;
var resultColor;
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
                resultColor = 'green';
                toggleDisplay();
                event.target.reset();
            }, (error) => {
                console.log(error.text);
                resultText = "There was an error sending your message; Please try again.";
                resultColor = 'red';
                toggleDisplay();
            });
    }
    return (
        <div style={{margin: '5px'}}>
            <form onSubmit={submitHandler}>
                <div style={{width:'80%', display: 'flex', justifyContent: 'space-between'}}>
                    <div className='formdiv'>
                    <label htmlFor='firstnametext'>First Name</label>
                    <input type='text' className='formtext' placeholder="First Name" required name='firstname' id='firstnametext' />
                    </div>
                    <div className='formdiv'>
                    <label htmlFor='lastnametext'>Last Name</label>
                    <input type='text' required placeholder="Last Name" className='formtext' name='lastname' id='lastnametext'/>
                    </div>
                </div>
                <div className='formdiv'>
                    <label htmlFor='emailtext' >Email</label>
                    <input type='email' required placeholder="Email" className='formtext' name='email' id='emailtext'></input>
                </div>
                <div className='formdiv' >
                    <label htmlFor='messagetext' >Message</label>
                    <textarea rows='3' required style={{width:'100%'}}name='message' placeholder="Enter a message..." id='messagetext'></textarea>
                </div>
                <button id='sendbutton'>Send</button>
                {display == 'true' && <p style={{color: resultColor}}>{resultText}</p>}
            </form>
        </div>
    )
}

export default ContactForm;