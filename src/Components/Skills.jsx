

function Skills() {


  return <>

    <div className="container " id="skills">
      <h1 className="mb-5 mt-5 animationtop">My Skills</h1>
      <div className="row Skill1">

        {/* FRONT END DETAILS */}
        <div className="col col-lg-5 col-md-5 col-11 Skills animationleft">

          <h4 className="text-center mt-4">Front-End</h4>
          <div className="FrontEndSkills ">
            <h5 className="text-start">HTML</h5>
            <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: "75%" }}>75%</div>
            </div></div>

          <div className="FrontEndSkills">
            <h5 className="text-start">CSS</h5>
            <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: "65%" }}>65%</div>
            </div></div>

          <div className="FrontEndSkills">
            <h5 className="text-start">BootStrap</h5>
            <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: "50%" }}>50%</div>
            </div></div>

          <div className="FrontEndSkills">
            <h5 className="text-start">Javascript & ReactJS</h5>
            <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: "50%" }}>Core</div>
            </div></div>

        </div>


            {/* BACKEND DETAILS */}

        <div className="col col-lg-5 col-md-5 col-11 Skills animationright">

          <h4 className="text-center mt-4">BackEnd & DB</h4>

          <div className="FrontEndSkills">
            <h5 className="text-start">NodeJs</h5>
            <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: 0 }}></div>
            </div></div>

          <div className="FrontEndSkills">
            <h5 className="text-start">ExpressJs</h5>
            <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: 0 }}></div>
            </div></div>

          <div className="FrontEndSkills">
            <h5 className="text-start">MySQL</h5>
            <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: 0 }}></div>
            </div></div>

          <div className="FrontEndSkills">
            <h5 className="text-start">MongoDB</h5>
            <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: 0 }} ></div>
            </div></div>



<div id="ContactMe2"></div>

        </div>

      </div>
    </div >

  </>
}

export default Skills;