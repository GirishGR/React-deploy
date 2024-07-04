



let Header = () =>{

  let DownCv = () =>{
    alert("CV will be uploaded shortly!")
  }

return<>

<div className="container text-center" id="header">
  <div className="row ">

  <div className="col col-lg-5 col-md-10 HeaderContainers right-section ">
<div className="Header animationimage mb-2 mt-5">
  <img src="Images/bg1.png" alt="" height="350px" />
  </div>

  </div>

  <div className="col col-lg-7 col-md-10 left-section HeaderContainers ">
    <div className="Left-section2 mb-5 ">
  <p className='mt-5 animationleft'>Hi, I am <span className="yellow">Girish G R</span></p>
            <p className=" animationright " id="">Web Developer</p>
  
            <p className="left-section3 animationbuttom">Hi, I'm Girish G R, a Finance Professional and an aspiring web developer with a passion for creating engaging and user-friendly web experiences. With a core knowledge in frontend development,I am looking for an opportunity in the profession of developing web applications that solve real-world problems.</p>
  
            <button className="btn btn-primary button" type="submit">  
            <a href="#ContactMe2" className="nav-link active " aria-current="page" id='about'>Hire Me</a>
             </button>
            <button  className="btn btn-success button" type="submit" id="DownloadCV" onClick={DownCv}>Download CV</button>
            </div>
  </div>

  </div>

</div>



</>

}

export default Header;