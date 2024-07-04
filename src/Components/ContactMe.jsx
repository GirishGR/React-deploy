import { useState } from 'react';
import './Portfolio.css';
import axios from 'axios';


function ContactMe() {

  let [contactDetails, setContactDetails] = useState({
    name: "",
    mobile: "",
    email: "",
    subject: "",
    message: ""
  })

  const updateContact = (event) => {
    setContactDetails({ ...contactDetails, [event.target.name]: event.target.value })
  }



  const handleSubmit = async (event) => {
    event.preventDefault();

    // console.log(JSON.stringify(contactDetails))
    await axios.post('http://localhost:3005/users', contactDetails)
      .then((response)  => { console.log(response.JSON()) })
      .catch((err) => {
        console.log(err)
      })

      if((contactDetails.message && contactDetails.name && contactDetails.email && contactDetails.subject && contactDetails.mobile).length == 0){
   alert("Please fill in all the details")
  }else{    alert("Thanks for the contact details!") }
}



  // let handleSubmit = async (event)=>{

  //   let url = 'http://localhost:3002/users';
  //       let options ={
  //         method: 'POST',
  //         headers:{
  //           'Content-type':'application/json'
  //         },
  //         body:JSON.stringify(contactDetails)
  //       };

  //       let response = await fetch(url,options);
  //       let data = await response.json();

  //       if(data){
  //         alert("Thanks for the data!");
  //       }

   
  //     }





  return <>

    <div className="container">


      <h1 className="mt-5 animationtop">Contact Me</h1>


      <form  action="">

        <div className="row formContainer">
          <div className="col-lg-4 col-md-10 col-12">
            <div className="ContactMe animationleft">
              <input className='mb-3 mt-4' name={"name"} type="text" id='name' placeholder="  Full Name" onChange={updateContact} />
              <input className='' name={"email"} type="text" id='email' placeholder="  Email" onChange={updateContact} />
            </div>
          </div>

          <div className="col-lg-4 col-md-10 col-12">
            <div className="ContactMe2 animationright">
              <input className='mb-3 mt-4' name={"mobile"} id='mobile' type="text" placeholder="  Mobile Number" onChange={updateContact} />
              <input name={"subject"} id='subject' type="text" placeholder="  Subject For" onChange={updateContact} />

            </div>

          </div>

          <div className="col-12 col-md-10 ContactMe4">

            <textarea className='mt-3 animationbuttom' id='message' name={"message"} placeholder="  Message" cols="40" rows="8" onChange={updateContact}></textarea>
          </div>

          <div className="col-12 col-md-10 ContactMe3 mt-3">
            <input type="submit" onClick={handleSubmit} value="Send Messsage" />
          </div>

        </div>
      </form>





    </div>



    <div className="row">
      <div className="col mt-3">

        <div className="Socials2 animationbuttom">
          <a href="https://github.com/GirishGR" rel="noreferrer" target="_blank"><i className="bi bi-github socialsIcons2 "></i></a>
          <a href="https://www.linkedin.com/in/girish-g-r-114575219?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" rel="noreferrer" target="_blank"> <i className="bi bi-linkedin socialsIcons2"></i></a>
          <a href="https://www.instagram.com/im_girishgr?igsh=MXdhbHJ1eGNreWdxcg==" rel="noreferrer" target="_blank"><i className="bi bi-instagram socialsIcons2"></i></a>
          <a href="https://www.facebook.com/grudresh2?mibextid=2JQ9oc" rel="noreferrer" target="_blank"> <i className="bi bi-facebook socialsIcons2"></i> </a>
          <a href="https://x.com/GirishG41304335?t=Bq1Rduf5Cklc__sxnxWpVg&s=08" rel="noreferrer" target="_blank"><i className="bi bi-twitter-x socialsIcons2"></i></a>
        </div>

      </div>
    </div>




  </>
}

export default ContactMe;