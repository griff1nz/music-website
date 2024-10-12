import './sections.css';
import { useRef, useState, useEffect } from 'react';
import { useInView, motion, useAnimation } from 'framer-motion'
function About() {
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
            <div id='about' className='section' style={{ padding: '16px' }}>

                <h1>About</h1>
                <div id='aboutWrapper'>
                    <div id='aboutSection'>
                        <p>Zion was born and raised in East Pennsylvania, attending East Penn School District. He began his musical journey in 6th grade when he picked up the alto saxophone, followed by learning the cello in 8th grade. Switching between string and wind instruments, Zion was an active member of the concert and jazz bands as well as Sinfonia and chamber orchestra during his time in school. He studied under Carrie England at Eyer Middle School, then under Ryan Harrington and Connie Arnold at Emmaus High School until he graduated in 2023.<br />Starting in 2024, Zion began sharing his musical expertise by providing online music lessons via Zoom. </p>
                        
                    </div>
                    <motion.img ref={ref} variants={{
                        hidden: {opacity: 0, scale: 0.3, rotate: -10},
                        visible: {opacity: 1, scale: 1, rotate: 0}
                    }}
                    initial='hidden'
                    animate={mainControl}
                    transition={{ease: 'easeOut', duration: 0.5, delay: 0.5}}  id="me" src='../../images/about-me.jpg'  />
                </div>
            </div>
            <hr style={{ width: '70%', margin: 'auto' }} />
        </>
    )
}

export default About;