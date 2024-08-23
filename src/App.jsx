import About from './sections/About'
import Lessons from './sections/Lessons'
import Footer from './components/footer'
import Contact from './sections/Contact'
import Pricing from './sections/Pricing'
import './App.css';
import Header from './components/header';
import { Button } from 'react-bootstrap';

function App() {

  return (
    <>
      <div style={{ minHeight: '93vh' }}>
        <Header />
        <div className='background'>
          <h2 style={{ textAlign: 'center', paddingTop: '50px' }}>Online Lessons for All Ages</h2>
          <Button id='button' href='https://calendly.com/zion-isaac-griffin' target='_blank' variant="primary" size="lg">
            Book a Lesson!
          </Button>

        </div>
        <div id='sections'>
          <About />
          <Pricing />
          <p>pp</p>
          <Lessons />
          <Contact />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
