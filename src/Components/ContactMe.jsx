import { useState } from 'react';
import './Portfolio.css';
import Axios from 'axios';
import Image from './Imgs/Sorryy.jpg'
import Modal from 'react-modal'


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    marginTop:'6vh',
  },
};

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

  const [isOpen,setIsOpen] = useState(false)

  let handleModal = ()=>{
    setIsOpen(!isOpen)
  }

  const handleSubmit = (event)=>{
    event.preventDefault();
    const url ='http://127.0.0.1:5000/api/contactDetails';
    Axios.post(url,contactDetails)
    .then((response)=>{if(response.data){setIsOpen(!isOpen)}
    })
    .catch((err)=>{
      console.log(err)
    })
  if(contactDetails){
    setIsOpen(!isOpen)
  }
   }

  return <>

    <div className="container">


      <h1 className="mt-5 mb-4 animationtop">Contact Me</h1>


      <form  >

        <div className="row formContainer">
          <div className="col-lg-4 col-md-10 col-12">
            <div className="ContactMe animationleft">
              
              <input name="name" type="text" id='name' placeholder="  Full Name" onChange={updateContact}  required/>
              <p className='FormMsgs'></p>

              <input className='' name="email" type="text" id='email' placeholder="  Email" onChange={updateContact} required/>
              <p className='FormMsgs'></p>

            </div>
          </div>

          <div className="col-lg-4 col-md-10 col-12">
            <div className="ContactMe2 animationright">
              <input name="mobile" id='mobile' type="text" placeholder="  Mobile Number" onChange={updateContact} required />
              <p className='FormMsgs'></p> 
              <input name="subject" id='subject' type="text" placeholder="  Subject For" onChange={updateContact} required/>
              <p className='FormMsgs'></p>
            </div>

          </div>

          <div className="col-12 col-md-10 ContactMe4">

            <textarea className=' animationbuttom' id='message' name="message" placeholder="  Message" cols="40" rows="8" onChange={updateContact} required ></textarea>
          </div>
            <p className='FormMsgs text-center' ></p>
          <div className="col-12 col-md-10 ContactMe3 mt-2">
            <input type="submit"  value="Send Messsage" onClick={handleSubmit}/>
          </div>
    {/* <pre>{JSON.stringify(contactDetails)}</pre> */}
        </div>
      </form>

      {/* Modal on Submission */}
<Modal
        isOpen={isOpen}
        contentLabel="Example Modal"
        style={customStyles}
      >
       
        <div >
          <img src={Image} style={{height:'241px', }} alt="" />
          <div className='text-center '>
       <h1 className='mb-3' style={{height:'40px', backgroundColor:'white',color:'grey',fontWeight:"900", fontSize:'25px'}}>BackEnd not deployed!</h1>
      </div>
        </div>
      

        <button onClick={handleModal} className='btn btn-secondary form-control text-white' style={{fontWeight:'700', fontSize:"20px"}}>Ok</button>
      </Modal>
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
