import img1 from './assets/image/icon1.svg'
import img2 from './assets/image/icon2.svg'
import img3 from './assets/image/icon3.svg'
import Lastdiv from './Lastdiv.jsx'


const Cards=()=>{
    return (<>
    <div className='liner'></div>
        <div className='cards_sec'>
            <div className='card'>
                <img src={img2} alt='Brand Recognition'/>
                <h1>Brand Recognition</h1>
                <p>Boost your brand recognition with each click.Generic links don't 
                    mean a thing.Branded links help instil confidence in your content</p>
            </div>

            <div className='card'>
                <img src={img3} alt='Brand Recognition'/>
                <h1>Brand Recognition</h1>
                <p>Boost your brand recognition with each click.Generic links don't 
                    mean a thing.Branded links help instil confidence in your content</p>
            </div>

            <div className='card'>
                <img src={img1} alt='Brand Recognition'/>
                <h1>Brand Recognition</h1>
                <p>Boost your brand recognition with each click.Generic links don't 
                    mean a thing.Branded links help instil confidence in your content</p>
            </div>
        </div>
        <Lastdiv/>
    </>)
}
export default Cards