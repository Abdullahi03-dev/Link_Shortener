import shortly from './assets/image/Shortly.svg'
import facebook from './assets/image/icon-facebook.svg'
import instagram from './assets/image/icon-instagram.svg'
import pinterest from './assets/image/icon-pinterest.svg'
import twitter from './assets/image/icon-twitter.svg'


const Footer=()=>{
    return (
        <>
        <footer>
            <div className='footer_img'>
                <h1>Shortly</h1>
            </div>

            <div className='nav_links'>
                <h3>Features</h3>
                <a href=''>Link Shortening</a>
                <a href=''>Branded Links</a>
                <a href=''>Analytics</a>
            </div>

            <div className='nav_links'>
                <h3>Resources</h3>
                <a href=''>Blog</a>
                <a href=''>Developers</a>
                <a href=''>Support</a>
            </div>

            <div className='nav_links'>
                <h3>company</h3>
                <a href=''>About</a>
                <a href=''>Our Team</a>
                <a href=''>Contact</a>
            </div>

            <div className='social_links'>
                <img src={facebook}/>
                <img src={instagram}/>
                <img src={pinterest}/>
                <img src={twitter}/>
                <img src={pinterest}/>

            </div>
        </footer>
        </>
    )
}

export default Footer