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
          <motion.h2 style={{ textAlign: 'center', paddingTop: '50px' }}
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.25 }}
          >Online Saxophone and Cello Lessons for All Ages</motion.h2>
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
