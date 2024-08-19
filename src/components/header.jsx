import './header.css'
import { Link } from 'react-router-dom'
function Header() {

    return (
        <>
            <div className='header'>
                <a href='/' className='headertext'>Zion Griffin</a> 
                <a href='/' className='headertext'>About Me</a>
                <a href='/' className='headertext'>Book A Lesson</a>
                <a href='/' className='headertext'>Contact</a>
            </div>
        </>
    )
}

export default Header