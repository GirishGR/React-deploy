import React, { useState } from "react";

const Certification = () => {

      let [view,setView] = useState(false);

      const handleView = ()=>{
        setView(!view);
      }

    
        let downReactCert = () =>{
          const fileName = "ReactCertificate.pdf";
         const aTag = document.createElement('a');
         aTag.href = fileName;
         aTag.download = 'ReactCertificate.pdf';
         document.body.appendChild(aTag);
         aTag.click();
         aTag.remove();
        }
   

        let downWebDCert = () =>{
          const fileName = "WebDeveloper.pdf";
         const aTag = document.createElement('a');
         aTag.href = fileName;
         aTag.download = 'WebDeveloper.pdf';
         document.body.appendChild(aTag);
         aTag.click();
         aTag.remove();
        }

        let fullStack = ()=>{
          const fileName = "ProStackMERN.jpg";
         const aTag = document.createElement('a');
         aTag.href = fileName;
         aTag.download = 'ProStackMERN.jpg';
         document.body.appendChild(aTag);
         aTag.click();
         aTag.remove();
        }

  return (
    <div className="container ">
      <h2 className="text-center fw-bolder mt-3 mb-4 ">Certification </h2>

      <div className="row justify-content-center ">
        <div className="col-11 mb-4">
          <div className="edureka flex mb-3 mt-4">
            <h5>
              1. Front-End Web Developer Certification Course from Edureka
            </h5>
            
            <h5 onClick={handleView}><i class="bi bi-eye-fill" style={{color:'#ff00ee'}}></i></h5>
          </div>

          <div className={view ? "" : "d-none"}>
            <div className="edureka">
              <p className="mx-4">
                * Web Developer Certification Course from Edureka
              </p>{" "}

  <h5> <i class="bi bi-box-arrow-down" style={{color:'#ff00ee'}} onClick={()=>{downWebDCert()}}></i></h5>
            </div>
            <div className="edureka">
              {" "}
              <p className="mx-4">
                * ReactJs Certification Course from Edureka
              </p>{" "}
              <button>
                <h5><i class="bi bi-box-arrow-down" style={{color:'#ff00ee'}} onClick={()=>{downReactCert()}}></i></h5>
              </button>
            </div>
          </div>
          

          

          <div className="edureka flex mt-2 mb-4">
            <h5>
              2. Full Stack Certification Course from ProStack Academy
            </h5>
            <h5> <i class="bi bi-box-arrow-down " style={{color:'#ff00ee'}} onClick={fullStack}></i></h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certification;
