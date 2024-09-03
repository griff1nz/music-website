import { Button } from 'react-bootstrap';
import { useRef, useState, useEffect } from 'react';
import { useInView, motion, useAnimation } from 'framer-motion'
function Lessons() {
    const ref = useRef(null);
    const isInView = useInView(ref)
    const mainControl = useAnimation();
    useEffect(() => {
        if (isInView) {
            mainControl.start('visible')
        }
    }, [isInView])
    return (
        <>
            <div id='lessons' className='section' style={{ padding: '16px' }}>

                <h1>Lessons</h1>
                <div id='lessonDiv'>
                    <img src='https://images.pexels.com/photos/752535/pexels-photo-752535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' id='lessonImage' />
                    <div>
                        <h3>Cello</h3>
                        <p>Beginner cello students will start with the first volumes of<a href='https://a.co/d/5jH54ir' target='_blank'>Essential Elements for Strings</a> and <a href='https://a.co/d/7p6ygru' target='_blank'>Suzuki Cello School</a>books. Intermediate students will start with later volumes, as well as<a href='https://a.co/d/62NYaHs' target='_blank'>Three-Octave Scales</a>and<a href='https://a.co/d/3Q9Vk0C' target='_blank'>Position Pieces for Cello.</a></p>
                        <h3>Saxophone</h3>
                        <p>Beginner saxophone lessons will start with<a href='https://a.co/d/g0kZhgq' target='_blank'>Accent on Achievement</a> and<a href='https://a.co/d/eAfuy8u' target='_blank'>Rubank Elementary Method.</a> Intermediate students will start with<a href='https://a.co/d/eLzNWsG' target='_blank'>Rubank Intermediate Method</a>and<a href='https://a.co/d/cUFFFSF' target='_blank'>Universal Method for Saxophone.</a></p>
                        {/* <h3>Lesson Times</h3> */}
                        {/* <p>Lessons will take place on Zoom from 3:00pm to 9:00pm Sunday-Thursday, as well as 8:00am to 2:00pm on Saturday. </p>  Will uncomment later*/}
                    </div>
                </div>
                <p style={{ textAlign: 'center' }}><strong>Ready to begin?</strong> Go to the <a href='https://calendly.com/zion-isaac-griffin' target='_blank'>Calendly booking page</a> to book your first lesson, or email me directly for a lesson package! Students of all ages are welcome! (All lesson times are in Eastern Time.)</p>
                <motion.div ref={ref}
                    variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial='hidden'
                    animate={mainControl}
                    transition={{ duration: 0.5, delay: 0.25 }}>
                    <Button variant='secondary' style={{ display: 'block', marginLeft: '25%', marginRight: '25%', marginBottom: '5px' }} href='https://calendly.com/zion-isaac-griffin' target='_blank' size="lg">
                        Book a Lesson!
                    </Button>
                </motion.div>

            </div>
            <hr style={{ width: '70%', margin: 'auto' }} />

        </>
    )
}

export default Lessons;