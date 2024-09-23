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
        <div className='background'>
          <div style={{ paddingTop: '50px' }}>
            <motion.h2 style={{ color: 'white', textAlign: 'center', backgroundImage: 'linear-gradient(to bottom right, dimgray, gainsboro', border: '5px solid white', borderRadius: '8px', marginLeft: '25%', marginRight: '25%', padding: '10px' }}
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.25 }}
            >Interactive Online Saxophone & Cello Lessons, Anytime, Anywhere</motion.h2>
          </div>
          <div style={{ display: 'flex' }}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/QXFK3wiEm8Y?si=bl6enjYkewQAk9a8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen style={{ marginLeft: 'auto', marginRight: "auto", marginTop:'10px', height: '25vh', width: '430px'}}></iframe>
          </div>
          <div>
            <Button id='button' href='https://calendly.com/zion-isaac-griffin' target='_blank' variant="secondary" size="lg">
              Book a Lesson!
            </Button>
          </div>

        </div>
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
