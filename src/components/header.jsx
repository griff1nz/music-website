import './header.css'
function Header() {

    return (
        <>
            <header>
                <a href='/' className='headertext'>Zion Griffin</a>
                <div>
                    <a href='#about' className='headertext'>About</a>
                    <a href='#pricing' className='headertext'>Pricing</a>
                    <a href='#lessons' className='headertext'>Lessons</a>
                    <a href='/' className='headertext'>Contact</a>
                </div>
            </header>
        </>
    )
}

export default Header