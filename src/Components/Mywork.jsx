// import Navbar from './Navbar';
// import { Route, Routes } from 'react-router-dom';
// import Home from './Home';

import { useRef } from "react";


let Mywork = ()=>{

  const slider = useRef();
  let tx = 0;
  
  const slideForward = ()=>{
      if(tx > -50){
        tx-=20;
      }
      slider.current.style.transform = `translateX(${tx}%)`
  }
  
  const slideBackword = () =>{
    if(tx < 0){
      tx+=20;
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }


  return<>
  
 {/* <div className="container">
 
 <nav
        className="navbar navbar-expand-lg position-fixed" 
        id="navbarmanual"
        data-bs-theme="dark"
      >
        <div className="container-fluid togglerIcon">
          <a className="navbar-brand WebDeveloper animationleft" href="#">
            Girish G R
          </a>

        </div>
      </nav>
      </div> */}


  
<div className="container myWork-container2">
 
 <h1 className="text-center mt-5 mb-4">My works</h1>
 <h3 className="text-center">Non Responsive Clone Designs</h3>

 <div className="row justify-content-center myWork-container" ref={slider}>

 <i className="bi bi-arrow-right-circle-fill nextBtn" onClick={slideForward}></i>

<i className="bi bi-arrow-left-circle-fill backBtn" onClick={slideBackword}></i>
 
   <div className="col-lg-5  col-md-5 col-11 myworks">
       

       <div className="netflix-header">
       <p className="text-center">Netflix Clone - HTML, CSS, JS DOM - <a href="https://netflix-clone-practive.vercel.app/">Click</a></p>
       </div>
 
       <div className="netflix-clone">
         
       <a href="https://netflix-clone-practive.vercel.app/"><iframe className="girishportfolio" title="netflix" src="https://netflix-clone-practive.vercel.app/" frameborder=""></iframe></a>
      
       </div>
 
 
   </div>
 
   <div className="col-lg-5 col-md-5 col-11 myworks">
 
   <div className="netflix-header">
       <p className="text-center">Amazon Clone - HTML & CSS -  <a href="https://amazon-clone-eta-rosy.vercel.app/">Click</a></p>
       </div>
 
       <div className="netflix-clone">
         
       <a href="https://amazon-clone-eta-rosy.vercel.app/"><iframe className="girishportfolio" title="amazon" src="https://amazon-clone-eta-rosy.vercel.app/" frameborder=""></iframe></a>
      
       </div>
   </div>
 
   <div className="col-lg-5 col-md-5 col-11 myworks">
   <div className="netflix-header">
       <p className="text-center">Restaurant Site View - HTML & CSS -  <a href="https://amazon-clone-eta-rosy.vercel.app/">Click</a></p>
       </div>
 
       <div className="netflix-clone">
         
       <a href="https://practive1-restaurant.vercel.app/"><iframe className="girishportfolio" title="restaurant" src="https://practive1-restaurant.vercel.app/" frameborder=""></iframe></a>
      
       </div>
 
 </div>

 <div className="col-lg-5 col-md-5 col-11 myworks">
   <div className="netflix-header">
       <p className="text-center">Edu site - HTML & CSS -  <a href="https://edusity-sooty-eight.vercel.app/">Click</a></p>
       </div>
 
       <div className="netflix-clone">
         
       <a href="https://edusity-sooty-eight.vercel.app/"><iframe className="girishportfolio" title="restaurant" src="https://edusity-sooty-eight.vercel.app/" frameborder=""></iframe></a>
      
       </div>
 
 </div>
 {/* <div className="col-lg-5 m-2 col-md-5 col-11 myworks">
 
 
 </div> */}
 
 </div>
 </div>
  

  
  
  
  
  </>
}

export default Mywork;