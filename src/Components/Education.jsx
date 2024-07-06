import './Portfolio.css'

function Education() {

  return<>

  <div className="container goto" id='education'>

<div className="row EducationExp">
<h1 className="mb-5 mt-5  animationtop"> Education And Experience</h1>
<div className="col col-lg-6 col-md-5 animationleft" >
<div className='EduEx'>
      <h4 className='headers mb-3'>Education</h4>
      <div className="">
      <div className="text-start"><i className="bi bi-houses-fill EducationIcon"></i></div>

      <div className="MBA text-start">
           
        <small className="TextAll">2015-2017</small>
        <h5 className="TextAll">Post Graduation Degree</h5>
        <h6 className="TextAll">Master Of Business Administration in Finance, UOM</h6>
      </div>

      
      <div className="text-start"><i className="bi bi-houses-fill EducationIcon"></i></div>
      <div className="MBA text-start mb-5">

        <small className="TextAll">2012-2015</small>
        <h5 className="TextAll">Bachelor Degree</h5>
        <h6 className="TextAll">Bachelor of Commerce, Tumkur University</h6>
      </div>

    </div>

    </div>



</div>


<div className="col col-lg-5 col-md-10  col-sm-10 EduEx animationright">

<h4 className='headers  mb-3'>Experience</h4>
  
<div className="text-start"><i className="bi bi-calendar-check-fill EducationIcon"></i></div>

<div className="MBA text-start">
  <small className="TextAll">Nov-2022 to Present</small>
  <h5 className="TextAll">Alstom Transport India Ltd</h5>
  <h6 className="TextAll">Process Associate-1</h6>
</div>



  <div className="text-start"><i className="bi bi-calendar-check-fill EducationIcon"></i></div>
<div className="MBA text-start">
  <small className="TextAll">Jan-2017 to July-2022</small>
  <h5 className="TextAll">ABB Global Business Services</h5>
  <h6 className="TextAll" id='skill2'>Accounting and Reporting Specialist</h6>
</div>
      </div>
    </div>
    </div>

</>
  
  
}


export default Education;