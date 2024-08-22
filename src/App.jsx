import About from './sections/About'
import Lessons from './sections/Lessons'
import Footer from './components/footer'
import Contact from './sections/Contact'
import './App.css';
import Header from './components/header';
import { Button } from 'react-bootstrap';

function App() {

  return (
    <>
      <Header />
      <div className='background'>
        <Button id='button' href='https://calendly.com/zion-isaac-griffin' target='_blank' variant="primary" size="lg">
          Book a Lesson!
        </Button>

      </div>
      <About />
      <Lessons />
      <Contact />
      <Footer />
    </>
  )
}

export default App
