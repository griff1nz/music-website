import './footer.css';

function Footer() {
    return (
        <footer>
            <p style={{margin: 'auto 0'}}>©2024 Zion Griffin. <a href='https://github.com/griff1nz/music-website' target='_blank'>View the code</a></p>
            <div className='footer-links'>
                <a href='https://www.facebook.com/griffin.zi/' target='_blank'><img src='https://cdn3.iconfinder.com/data/icons/transparent-on-dark-grey/500/icon-02-512.png' /></a>
                <a href='https://www.linkedin.com/in/zion-griffin-9aa245243/' target='_blank'><img src='https://cdn-icons-png.flaticon.com/512/61/61109.png' /></a>
                <a href='https://github.com/griff1nz' target='_blank'><img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' /></a>
            </div>
        </footer>
    )
}
export default Footer;