import { Link } from "react-scroll";
import "./Portfolio.css";
import React, { useState } from "react";

function Navbar() {
  let [toggle, setToggle] = useState(true);

  let handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg position-fixed"
        toggle={toggle}
        id="navbarmanual"
        data-bs-theme="dark"
      >
        <div className="container togglerIcon">
          
          <a className="navbar-brand WebDeveloper animationleft" href="/header">
            Girish
          </a>
          {/* {
          toggle == true ? <>   <div>
        
        <button  className="navbar-toggler" type="button" data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse"  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" onblur={()=>{setToggle(false)}}></span> </button> </div> </> : <> <div> <button  className="navbar-toggler" type="button" >
          <span className="navbar-toggler-icon"data-bs-toggle="" onblur={()=>{setToggle(true)}}></span>
      </button> </div></> 



      } */}


          <button         
            onClick={handleToggle}
            className="navbar-toggler"
            type="button"
            data-bs-target="#navbarSupportedContent"
            data-bs-toggle= "collapse"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
              
                <span className="navbar-toggler-icon"> </span>
      
          </button>


          <div className="collapse navbar-collapse panel-collapse" id= "navbarSupportedContent">
              <>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbarmanual2">
                  <li className="nav-item">
                   <Link to='header' smooth={true} offset={0} duration={500}> Home</Link>
                  </li>
                  <li className="nav-item" >
                  <Link to='about' smooth={true} offset={0} duration={500}> About</Link>
                  </li>

                  <li className="nav-item">
                  <Link to='education2' smooth={true} offset={0} duration={500}> Education</Link>
                  </li>

                  <li className="nav-item">
                  <Link to='skill2' smooth={true} offset={0} duration={500}> Skills</Link>
                  </li>

                  <li className="nav-item">
                  <Link to='/myworks' smooth={true} offset={0} duration={500}> MyWorks</Link>
                  </li>

                  <li className="nav-item">
                  <Link to='ContactMe2' smooth={true} offset={0} duration={500}> ContactMe</Link>
                  </li>

                </ul>
              </>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
