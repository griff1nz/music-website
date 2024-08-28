import { Button } from 'react-bootstrap';
function Lessons() {
    return (
        <>
            <div id='lessons' className='section' style={{ padding: '16px' }}>

                <h1>Lessons</h1>
                <div style={{ display: 'flex', marginBottom: '10px' }}>
                    <img src='https://images.pexels.com/photos/752535/pexels-photo-752535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' style={{ display: 'block', height: '400px', margin: '4px 50px', borderRadius: '50px' }} />
                    <div>
                        <h3>Cello</h3>
                        <p>Cello lessons will be taught using the Suzuki Cello School books, starting with Volume 1. Other materials include scale book and finger position books.</p>
                        <h3>Saxophone</h3>
                        <p>Saxophone lessons will be taught using the Rubank books, starting with <a href='https://a.co/d/eAfuy8u' target='_blank'>Rubank Elementary Method.</a> <a href='https://a.co/d/cUFFFSF' target='_blank'>Universal Method for Saxophone</a> by Paul Deville will also be used.</p>
                    </div>
                </div>
                <p style={{ textAlign: 'center' }}><strong>Ready to begin?</strong> Go to the <a href='https://calendly.com/zion-isaac-griffin' target='_blank'>Calendly booking page</a> to book an individual lesson, or email me directly to reserve four weekly lessons!</p>
                <Button style={{ display: 'block', marginLeft: '25%', marginRight: '25%', marginBottom: '5px' }} href='https://calendly.com/zion-isaac-griffin' target='_blank' variant="primary" size="lg">
                    Book a Lesson!
                </Button>

            </div>
            <hr style={{ width: '70%', margin: 'auto' }} />

        </>
    )
}

export default Lessons;