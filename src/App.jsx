import About from './sections/About'
import Lessons from './sections/Lessons'
import Footer from './components/footer'
import Contact from './sections/Contact'
import Schedule from './sections/Schedule'
import Pricing from './sections/Pricing'
import './App.css';
import Header from './components/header';
import { Button } from 'react-bootstrap';
import { motion } from 'framer-motion'

function App() {

  return (
    <>
      <div style={{ minHeight: '93vh' }}>
        <Header />
        {/* <div className='background'> */}
          <div style={{ paddingTop: '50px', width: '100%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}} id='top'>
            <motion.h2 id='motionh2' 
              variants={{
                hidden: { opacity: 0, x: -75 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.25 }}
            >Interactive <span style={{color: '#33b3ff'}}>Online</span> Saxophone & Cello Lessons, Anytime, Anywhere<br /><p style={{fontSize: '20px', marginTop: '20px'}}>Unlock your musical potential with Griffin Winds & Strings.</p></motion.h2>
            <motion.img  variants={{
                hidden: { opacity: 0, x: 75 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.25 }}src='https://images.pexels.com/photos/45243/saxophone-music-gold-gloss-45243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' id='saximg' ></motion.img>
          </div>
          
          
          <div style={{marginBottom: '30px'}}>
            <Button id='button' href='https://calendly.com/zion-isaac-griffin' target='_blank' variant="secondary" size="lg">
              Book a Lesson!
            </Button>
          </div>
          {/* <hr style={{ width: '70%', margin: 'auto', marginTop: '30px'}} /> */}

        {/* </div> */}
        <div id='sections'>
          <About />
          <Pricing />

          <Lessons />
          <Schedule />
          <Contact />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
