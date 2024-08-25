import ContactForm from "../components/ContactForm";
function Contact() {
    return (
        <div id='contact' className='section'>
            <h1>Contact</h1>
            <p>If you wish to get in touch, please fill out the form below. You can also email me at<a href='mailto:zion.isaac.griffin@gmail.com'>zion.isaac.griffin@gmail.com</a>or call or text<a href='tel:4844252044'>(484) 425-2044.</a></p>
            <ContactForm />
        </div>
    )
}
export default Contact;