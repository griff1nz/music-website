import './header.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
function Header() {
    const [open, setOpen] = useState(false);
    const timeout = function() {
        setTimeout(() => {setOpen(!open)}, 500);
    }
    return (
        <>
            <header>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <a href='/' className='headertext'>Zion Griffin</a>
                    <div id='desktop'>
                        <a href='#about' className='headertext'>About</a>
                        <a href='#pricing' className='headertext'>Pricing</a>
                        <a href='#lessons' className='headertext'>Lessons</a>
                        <a href='#contact' className='headertext'>Contact</a>

                    </div>
                    <div id='mobiledropdown'>
                        <Button variant='outline-secondary'
                            onClick={() => setOpen(!open)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open}
                        >
                            <img src='https://www.svgrepo.com/show/8109/menu-symbol-of-three-parallel-lines.svg' style={{width: '25px'}}/>
                        </Button>
                    </div>
                </div>
                <Collapse in={open}>
                    <div id="example-collapse-text" style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
                        <ul onClick={() => (timeout())} style={{ display: 'flex', flexDirection: 'column' }}>
                            <a href='#about'>About</a>
                            <a href='#pricing'>Pricing</a>
                            <a href='#lessons'>Lessons</a>
                            <a href='#contact'>Contact</a>
                        </ul>
                    </div>
                </Collapse>
            </header>
        </>
    )
}

export default Header