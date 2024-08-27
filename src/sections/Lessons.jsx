import { Button } from 'react-bootstrap';
function Lessons() {
    return (
        <div id='lessons' className='section' style={{padding: '5px'}}>

            <h1>Lessons</h1>
            <h3>Cello</h3>
            <p>Cello lessons will be taught using the Suzuki Cello School books, starting with Volume 1. Other materials include scale book and finger position books.</p>
            <h3>Saxophone</h3>
            <p>Saxophone lessons will be taught using the Rubank books, starting with <a href='https://a.co/d/eAfuy8u' target='_blank'>Rubank Elementary Method.</a> <a href='https://a.co/d/cUFFFSF' target='_blank'>Universal Method for Saxophone</a> by Paul Deville will also be used.</p>
            <p><strong>Ready to begin?</strong> Go to the <a href='https://calendly.com/zion-isaac-griffin' target='_blank'>Calendly booking page</a> to book an individual lesson, or email me directly to reserve four weekly lessons!</p>
            <Button style={{display: 'block', marginLeft: '25%', marginRight: '25%', marginBottom: '5px'}} href='https://calendly.com/zion-isaac-griffin' target='_blank' variant="primary" size="lg">
            Book a Lesson!
          </Button>
        </div>
    )
}

export default Lessons;