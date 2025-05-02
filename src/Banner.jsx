import computer from './assets/image/working_with_computer.svg'

const Banner=()=>{
    return (<>
    <section className="banner">

<div className="banner_text">
    <h1>More than just<br/> shorter links</h1>
    <p>Build your brands recognition and get detailed<br/> insights on how your links are performing</p>
    <a href="">Get Started</a>
</div>


<div className="banner_img">
    <img src={computer}/>
</div>
</section>
    
    </>)
}
export default Banner