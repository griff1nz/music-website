import './sections.css';
function About() {
    return (
        <>
            <div id='about' className='section' style={{ padding: '16px' }}>

                <h1>About</h1>
                <div id='aboutWrapper'>
                    <div id='aboutSection'>
                        <p>Zion was born and raised in East Pennsylvania, attending East Penn School District. He began his musical journey in 6th grade when he picked up the alto saxophone, followed by learning the cello in 8th grade. Switching between strings and wind, Zion was an active member of the concert and jazz bands as well as Sinfonia and chamber orchestra. He studied under Carrie England at Eyer Middle School, then under Ryan Harrington and Connie Arnold at Emmaus High School until he graduated in 2023.<br />Starting in the fall of 2024, Zion began sharing his musical expertise by providing online music lessons via Zoom. </p>
                    </div>
                    <img id="me" src='../../public/images/about-me.jpg'  />
                </div>
            </div>
            <hr style={{ width: '70%', margin: 'auto' }} />
        </>
    )
}

export default About;