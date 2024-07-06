import { useState } from 'react';
import './Portfolio.css';


function AboutMe(){

  let [Knowmore, setKnowMore] = useState(false);  
  

  return<>
  
  <div className="container text-center AboutMe " id='AboutMe'>
  <h1 className='mt-5 animationtop'>About Me</h1>

    <div className="row justify-content-md-center">
      <div className="col col-lg-11 col-md-11">
        
        <img src="./Imgs/Girish2.jpg" className="Girish-Pic mt-5 animationimage"/>

        </div>
        </div> 

        <div className="col col-lg-12 col-md-12 AboutMe2">
     
        <h3 className=" mt-5 AbtMe2 animationleft" >Aspiring Web Developer with Front-End Skills</h3>
        <h5 className="AbtMe3 mt-3 animationright"> My journey in web development began with a curiosity to understand how technology shapes our online experiences. Over the months, I've honed my skills in front-end skills like HTML, CSS, JAVASCRIPT, REACTJS, embracing new technologies and best practices along the way.</h5>
        
        <div className="Socials mt-4 mb-3">
          
          <a href="https://github.com/GirishGR" ><i className="bi bi-github socialsIcons"></i></a>

          <a href="https://www.linkedin.com/in/girish-g-r-114575219?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i className="bi bi-linkedin socialsIcons"></i></a>

        <a href="https://www.instagram.com/im_girishgr?igsh=MXdhbHJ1eGNreWdxcg=="><i className="bi bi-instagram socialsIcons"></i></a>

         <a href="https://www.facebook.com/grudresh2?mibextid=2JQ9oc"><i className="bi bi-facebook socialsIcons"></i></a>

         <a href="https://x.com/GirishG41304335?t=Bq1Rduf5Cklc__sxnxWpVg&s=08"><i className="bi bi-twitter-x socialsIcons"></i></a>
        
        </div>

        </div>

        {
        (Knowmore == true)  ? <>
        <div >
        <div className="container text-center ">
          <h2><b className=''>Personal Infos</b></h2>
          <div className="row justify-content-md-center PersonalInfo">
            <div className="col col-lg-3 col-md-4 text-start animationimage
            ">
              <p>Name : <b>Girish GR</b></p>
              <p>Age : <b>29 years</b></p>
              <p>Nationality : <b>Indian</b></p>
              <p>Languages : <b>Kannada, English, Hindi</b></p>
              <p>Qualification : <b>MBA</b></p>
            </div>
      
            <div className="col col-lg-3 col-md-4 text-start PersonalInfo animationimage ">
      
      <div>
        <p>Address : <b>Bengaluru</b></p>
      <p> Phone : <b>+91-9513300588</b></p>
      <p>Email : <b>grgirish33@gmail.com</b></p>
      <p>GitHub : <b>GirishGR</b></p>
      <p>Experience : <b>7yrs (Finance Domain)</b></p>
              </div>
            </div>
          </div>

      </div>
      <button type="button" className="btn btn-info mt-3 mb-5 button" id="KnowMore" onClick={()=>{setKnowMore(false)}} > Close</button>

    </div> </> : <>
    <button type="button" className="btn btn-info mt-1 mb-5 button" id="education2" onClick={()=>{setKnowMore(true)}} > Know More</button>
    </>
}
  </div>
 

  
  </>
}


export default AboutMe;