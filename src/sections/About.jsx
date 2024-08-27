import './sections.css';
function About() {
    return (
        <div id='about' className='section' style={{padding: '5px'}}>

            <h1>About</h1>
            <div style={{display: 'flex'}}>
            <p>Zion was born and raised in East Pennsylvania, attending East Penn School District. He began his musical journey in 6th grade when he picked up the alto saxophone, followed by learning the cello in 8th grade. Switching between strings and wind, Zion was an active member of the concert and jazz bands as well as Sinfonia and chamber orchestra. He studied under Carrie England at Eyer Middle School, then under Ryan Harrington and Connie Arnold at Emmaus High School until he graduated in 2023.<br />Starting in the fall of 2024, Zion began sharing his musical expertise by providing online music lessons via Zoom. </p>
            <img src='../../public/images/about-me.jpg' style={{display: 'block', height: '400px', margin: '4px 50px', borderRadius: '50px'}}/>
            </div>
        </div>
    )
}

export default About;