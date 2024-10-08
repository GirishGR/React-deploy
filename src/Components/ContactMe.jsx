import { useState } from 'react';
import './Portfolio.css';
import Axios from 'axios';

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


  let [errors, setErrors] = useState({}); 

  const handleSubmit = (event)=>{
    event.preventDefault();
    const url ='http://127.0.0.1:5000/api/contactDetails';
    Axios.post(url,contactDetails)
    .then((response)=>{if(response.data){alert("Thanks for sharing data")}
    })
    .catch((err)=>{
      console.log(err)
    })
 
const validateErrors = {};

if(!contactDetails.name.trim()){
  validateErrors.name = "Name is required";
}

if(!contactDetails.mobile.trim()){
  validateErrors.mobile = "Mobile number is required";
}

if(!contactDetails.email.trim()){
  validateErrors.email = "Email is required"
}else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(contactDetails.email)){
    validateErrors.email = "Invalid email format"
}


if(!contactDetails.subject.trim()){
  validateErrors.subject = "Subject is required"
}

if(!contactDetails.message.trim()){
  validateErrors.message = "Message is required"
}

setErrors(validateErrors);


if(Object.keys(validateErrors).length === 0){
//  alert("Thanks for sharing details")
}
   }

  return <>

<div className="container animationtop">
       
<h1 className="mt-5 mb-4 ">Contact Me</h1>
             
          <form >

            <div className='row justify-content-center'>
              <div className="col-lg-5 col-11 ContactMe ">
                  <input type="text" className='form-control' name="name" placeholder='Please enter your name' onChange={updateContact} required/>
                  <p className='FormMsgs'>{errors.name}</p>
                    <input type="text" name="mobile" placeholder='Please enter mobile number' className='form-control' onChange={updateContact} required/>
                    <p className='FormMsgs'>{errors.mobile}</p>
              </div>

              <div className="col-lg-5 col-11 ContactMe">
                  <input type="text" name="email" className='form-control'  placeholder='Please enter email' onChange={updateContact} required/>
                  <p className='FormMsgs'>{errors.email}</p>
                    <input type="text" placeholder='Please enter subject' name="subject" className='form-control' onChange={updateContact} required/>
                    <p className='FormMsgs'>{errors.subject}</p>
              </div>

                <div className="col-lg-7 col-11 ContactMe">
                  <textarea name="message" rows={8} className='form-control' placeholder='Please type in your message' onChange={updateContact} required></textarea>
                  <p className='FormMsgs text-center'>{errors.message}</p>
                 
                </div>    
                <div className='submitButton'>
                {/* <input type="submit" value="Send Message" className='button3 align-content-center' onClick={handleSubmit}/> */}
                <button className='button' onClick={handleSubmit}>Send Message</button>
                </div>           
              </div>
              {/* <pre className='text-center'>{JSON.stringify(contactDetails)}</pre> */}

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




// Incase of password and Confirm password.

// if(!contactDetails.password.trim()){
//   validateErrors.password = "Password is required"
// }else if (contactDetails.password.length< 6){
//   validateErrors.password = "Password should be at least 6 characters"
// }

// if(contactDetails.Confirmpassword !== contactDetails.password){
//   validateErrors.Confirmpassword = "Password and Confirm password should be same"
// }