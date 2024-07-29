import "./Portfolio.css";
import React, { useState } from "react";

function Navbar() {
  let [toggle, setToggle] = useState(false);

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
        <div className="container-fluid togglerIcon">
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
            data-bs-toggle="collapse"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {toggle === true ? (
              <>
              
                <span className="navbar-toggler-icon"> </span>
              </>
            ) : (
              <>
                <span className="navbar-toggler-icon"> </span>{" "}
              </>
            )}
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {toggle === false ? (
              <>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbarmanual2">
                  <li className="nav-item">
                    <a
                      className="nav-link animationtop "
                      aria-current="page"
                      href="#header"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link animationtop " href="#about">
                      About
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link   animationtop " href="#education2">
                      Education
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link   animationtop " href="#skill2">
                      Skills
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link  animationtop" target="_blank" href="/myworks">
                      My Works
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link  animationtop" href="#ContactMe2">
                      Contact Me
                    </a>
                  </li>

                  {/* <li className="nav-item">
                    <a className="nav-link  animationtop" href="/thankyou">
                      Thanks
                    </a>
                  </li> */}
                </ul>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
