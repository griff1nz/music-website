import ContactForm from "../components/ContactForm";
function Contact() {
    return (
        <div id='contact' className='section' style={{padding: '16px'}}>
            <h1>Contact</h1>
            <p style={{textAlign: 'center'}}>If you wish to get in touch, please fill out the form below. You can also email me directly at<a href='mailto:zion.isaac.griffin@gmail.com'>zion.isaac.griffin@gmail.com.</a></p>
            <ContactForm />
        </div>
    )
}
export default Contact;