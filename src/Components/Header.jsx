import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';



// const girishResume = 'http://localhost:3004/GirishResume.pdf'
let Header = () =>{
    
  let downCv = () =>{
    const fileName = "GirishResume.pdf";
   const aTag = document.createElement('a');
   aTag.href = fileName;
   aTag.download = 'GirishResume.pdf';
   document.body.appendChild(aTag);
   aTag.click();
   aTag.remove();
  }

return<>

<div className="container text-center" id="header">
  <div className="row ">

  <div className="col col-lg-5 col-md-10 HeaderContainers right-section ">
<div className="Header animationimage mt-5">
  <dotlottie-player src="https://lottie.host/74476745-7ed6-4d1e-8d30-09e7346ea09b/Qd8fC619Ye.json"
      background="transparent" loop autoplay style={{height:"350px"}}></dotlottie-player>
  </div>

  </div>

  <div className="col col-lg-7 col-md-10 left-section HeaderContainers ">
    <div className="Left-section2 mb-5 ">
  <p className='mt-5 animationleft'>

  <TypeAnimation sequence={['Hi, I am Girish G R', 2000]} wrapper="span" speed={1} style={{ color:'#ff00ee', fontWeight:"700" }} repeat={3} />

  </p>
            <p className=" animationright " id="">  <TypeAnimation sequence={['Financial Analyst', 2000,'Web Developer', 2000,]} wrapper="span" speed={10} style={{}} repeat={Infinity} /></p>
  
            <p className="left-section3 animationbuttom">Hi, I'm Girish, a Finance Professional and an aspiring web developer with a passion for creating engaging and user-friendly web experiences. With a core knowledge in frontend development,I am looking for an opportunity in the profession of developing web applications that solve real-world problems.</p>
  
            <button className="button me-2" type="submit">  
            <Link to='ContactMe' smooth={true} duration={1000} offset={-150} className="nav-link active about" aria-current="page" >Hire Me</Link>
             </button>
            <button  className="button " type="submit" id="DownloadCV" onClick={()=>{downCv()}}>Download CV</button>
            </div>
  </div>

  </div>

</div>



</>

}

export default Header;