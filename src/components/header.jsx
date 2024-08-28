import './header.css'
function Header() {

    return (
        <>
            <header>
                <a href='/' className='headertext'>Zion Griffin</a>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <a href='#about' className='headertext'>About</a>
                    <a href='#pricing' className='headertext'>Pricing</a>
                    <a href='#lessons' className='headertext'>Lessons</a>
                    <a href='#contact' className='headertext'>Contact</a>
                </div>
            </header>
        </>
    )
}

export default Header