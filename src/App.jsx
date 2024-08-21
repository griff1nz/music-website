import About from './sections/About'
import './App.css';
import Header from './components/header';
import { Button } from 'react-bootstrap';

function App() {

  return (
    <>
      <div className='background'>
        <Header />
        <a href='https://calendly.com/zion-isaac-griffin' target='_blank'>
          <Button variant="primary" size="lg">
            Book a Lesson!
          </Button>
        </a>
      </div>
      <About/>
    </>
  )
}

export default App
