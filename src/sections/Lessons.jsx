import { Button } from 'react-bootstrap';
function Lessons() {
    return (
        <div id='lessons' className='section'>

            <h1>Lessons</h1>
            <p><strong>Ready to begin?</strong> Go to the <a href='https://calendly.com/zion-isaac-griffin' target='_blank'>Calendly booking page</a> to book an individual lesson, or email me directly to reserve four weekly lessons!</p>
            <Button style={{display: 'block', marginLeft: '25%', marginRight: '25%', marginBottom: '5px'}} href='https://calendly.com/zion-isaac-griffin' target='_blank' variant="primary" size="lg">
            Book a Lesson!
          </Button>
        </div>
    )
}

export default Lessons;