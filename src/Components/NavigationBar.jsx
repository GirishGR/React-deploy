import { Nav, Navbar, NavLink } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll"

import './Portfolio.css';

let Navigationbar = () => {

    return (
      

          <Navbar collapseOnSelect expand="sm"  variant="dark">
          <Navbar.Brand  className="NavbarContainer animationleft ms-3" href="#">Girish G R</Navbar.Brand>
            <Navbar.Toggle className="NavbarToggler animationright" aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav>
                     <NavLink  className="NavbarContainer animationtop" eventKey="1" as={Link}  to="header" smooth={true} offset={0} duration={1500}>Home</NavLink>
                    <NavLink className="NavbarContainer animationtop"  eventKey="2" as={Link} to="about" smooth={true} offset={50} duration={700}>About</NavLink>
                    <NavLink className="NavbarContainer animationtop"  eventKey="3" as={Link} to="education" smooth={true} offset={-50} duration={1000}>Education</NavLink>
                    <NavLink className="NavbarContainer animationtop" eventKey="4" as={Link} to="skills" smooth={true} offset={-70} duration={1000}>Skills</NavLink>
                    {/* <NavLink className="NavbarContainer animationtop" eventKey="4" as={Link} to="/myworks" smooth={true} offset={0} duration={500}>MyWorks</NavLink> */}
                    <NavLink className="NavbarContainer animationtop" eventKey="5" as={Link} to="ContactMe" smooth={true} offset={-150} duration={1200}>ContactMe</NavLink>

                </Nav>
            </Navbar.Collapse>     
        </Navbar>



   
    );
}

export default Navigationbar;



// <nav
//         className="navbar navbar-expand-lg position-fixed"
//         toggle={toggle}
//         id="navbarmanual"
//         data-bs-theme="dark"
//       >
//         <div className="container togglerIcon">
          
//           <a className="navbar-brand WebDeveloper animationleft" href="/header">
//             Girish
//           </a>
//           {/* {
//           toggle == true ? <>   <div>
        
//         <button  className="navbar-toggler" type="button" data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse"  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon" onblur={()=>{setToggle(false)}}></span> </button> </div> </> : <> <div> <button  className="navbar-toggler" type="button" >
//           <span className="navbar-toggler-icon"data-bs-toggle="" onblur={()=>{setToggle(true)}}></span>
//       </button> </div></> 



//       } */}


//           <button         
//             onClick={handleToggle}
//             className="navbar-toggler"
//             type="button"
//             data-bs-target="#navbarSupportedContent"
//             data-bs-toggle= "collapse"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
              
//                 <span className="navbar-toggler-icon"> </span>
      
//           </button>


//           <div className="collapse navbar-collapse panel-collapse" id= "navbarSupportedContent">
//               <>
//                 <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbarmanual2">
//                   <li className="nav-item">
//                     <a
//                       className="nav-link animationtop "
//                       // aria-current="page"
//                       href="#header"
//                     >
//                       Home
//                     </a>
//                   </li>
//                   <li className="nav-item" >
//                     <a className="nav-link animationtop " href="#about">
//                       About
//                     </a>
//                   </li>

//                   <li className="nav-item">
//                     <a className="nav-link   animationtop " href="#education2">
//                       Education
//                     </a>
//                   </li>

//                   <li className="nav-item">
//                     <a className="nav-link   animationtop " href="#skill2">
//                       Skills
//                     </a>
//                   </li>

//                   <li className="nav-item">
//                     <a className="nav-link  animationtop" target="_blank" href="/myworks">
//                       My Works
//                     </a>
//                   </li>

//                   <li className="nav-item">
//                     <a className="nav-link  animationtop" href="#ContactMe2">
//                       Contact Me
//                     </a>
//                   </li>

//                 </ul>
//               </>
//           </div>
//         </div>
//         </nav>
      