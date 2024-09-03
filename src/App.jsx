import About from './sections/About'
import Lessons from './sections/Lessons'
import Footer from './components/footer'
import Contact from './sections/Contact'
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
          <div style={{ paddingTop: '50px'}}>
            <motion.h2 style={{ color: 'white', textAlign: 'center', backgroundImage: 'linear-gradient(to bottom right, dimgray, gainsboro', border: '5px solid white', borderRadius: '8px', marginLeft: '25%', marginRight: '25%', padding: '10px'}}
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.25 }}
            >Online Saxophone and Cello Lessons for East Pennsylvania and Beyond</motion.h2>
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
          <Contact />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
