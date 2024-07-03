
import './Portfolio.css';
import React, { useState } from "react";


function Navbar(){

let [toggle, setToggle] = useState(false);


const navToggle = () => {
  setToggle(toggle ? false : true);
};

const closeNav = () => {
  setToggle(false);
};





return(

  <>


  <div className="container" id='navbar'>

    <div className="row ">

      <div className="col-12 ">

      <nav className="navbar navbar-expand-lg " toggle={toggle} id="navbarmanual" data-bs-theme="dark">
    <div className="container-fluid togglerIcon">

      <a className="navbar-brand WebDeveloper animationleft" href="#">Girish G R</a>

      {/* {
          toggle == true ? <>   <div>
        
        <button  className="navbar-toggler" type="button" data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse"  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" onblur={()=>{setToggle(false)}}></span> </button> </div> </> : <> <div> <button  className="navbar-toggler" type="button" >
          <span className="navbar-toggler-icon"data-bs-toggle="" onblur={()=>{setToggle(true)}}></span>
      </button> </div></> 


      } */}
    
<button  className="navbar-toggler" type="button" data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse"  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
        <span className="navbar-toggler-icon" ></span> </button>


      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbarmanual2">
          <li className="nav-item ">
          

                <> <a className="nav-link active animationtop" aria-current="page" href="#navbar"  >Home</a></> 
          
           
          </li>
          <li className="nav-item">
            <a className="nav-link  active animationtop " href="#about">About Me</a>
          </li> 

          <li className="nav-item">
            <a className="nav-link  active animationtop " href="#education2">Education</a>
          </li>
  
          <li className="nav-item">
            <a className="nav-link  active animationtop " href="#skill2">Skills</a>
          </li>

          <li className="nav-item">
            <a className="nav-link  active animationtop" href="#ContactMe2">Contact Me</a>
          </li>
     </ul>
      </div>
    </div>
    
  </nav>
  
      </div>
    </div>
  </div>



  </>
)

}

export default Navbar;