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
                        <p>Hi! My name is Zion. Born and raised in East Pennsylvania, I attended East Penn School District, graduating from Emmaus High School in 2023. I began my musical journey in 6th grade when I picked up the alto saxophone, followed by learning the cello in 8th grade. Switching between string and wind instruments, I was an active member of the concert and jazz bands as well as Sinfonia and chamber orchestra during my time in school. I studied under Carrie England at Eyer Middle School, then under Ryan Harrington and Connie Arnold at Emmaus High School.<br />Starting in 2024, I began sharing my musical expertise by providing online music lessons via Zoom. </p>
                        <h2>Why online?</h2>
                        <p>Throughout my career as a student prior to getting a vehicle, I was dependent on my parents to transport me to and from my lessons. However, they were occasionally unavailable to provide transportation, preventing me from attending my lessons and creating a barrier for my learning. <br />I believe that online lessons are just as effective as in-person lessons, with the added bonus of the student being able to attend from their own home without having to travel to and from lessons.</p>
                        
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