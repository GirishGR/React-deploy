import { useState } from "react";
import Modal from "react-modal";
import Image from "./Imgs/thank-you-form.png";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    marginTop: "6vh",
    borderRadius:"10px",
  },
};

function ContactEmail() {
  const [result, setResult] = useState("");
  // let [errors, setErrors] = useState({});

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending contact details...");
    const formData = new FormData(event.target);

    formData.append("access_key", "ae568a45-76a9-4edd-9983-994b74e5c99d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult(handleModal());
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  let handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="container animationtop">
        <h1 className="mt-5 mb-4 ">Contact Me</h1>
        <div className="row justify-content-center">
              <div className="col-lg-5 col-md-5 col-11 contact-container">

                 <h3>Thanks for visiting my Portfolio site!</h3>
                <p>I am open for opportunities. if you are interested with my CV,
                   please get in touch with below contact details.</p>

                <p><i class="bi bi-envelope-at-fill"></i> : grgirish33@gmail.com</p>
                <p><i class="bi bi-telephone-forward-fill"></i>: +91-9513300588</p>

                <h3 className="mt-4 mb-0">Or Leave a message <i class="bi bi-arrow-right"></i></h3>

              </div>

              <div className="col-lg-5 col-md-5 col-11 ContactMe contact-container">

              <form onSubmit={onSubmit}>
    
           <input
             type="text"
             className="form-control"
             name="name"
             placeholder="Enter your name"
             required
           />
           <p className="FormMsgs"></p>
           <input
             type="tel"
             name="mobile"
             placeholder="Enter mobile number"
             className="form-control"
             required
           />
           <p className="FormMsgs"></p>
      

        
           <input
             type="email"
             name="email"
             className="form-control"
             placeholder="Enter email"
            pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
             required
           />
           <p className="FormMsgs"></p>
           <input
             type="text"
             placeholder="Enter subject"
             name="subject"
             className="form-control"
             required
           />
           <p className="FormMsgs"></p>
      

        
           <textarea
             name="message"
             rows={6}
             className="form-control ContactMe"
             placeholder="Enter your message"
             required
           ></textarea>
           <p className="FormMsgs text-center"></p>
        
         <div className="submitButton">
           {/* <input type="submit" value="Send Message" className='button3 align-content-center' onClick={handleSubmit}/> */}
           <button className="button">Send Message</button>
         </div>
         <p className="FormMsgs mb-0 mt-1 text-center">{result}</p>
      
       {/* <pre className='text-center'>{JSON.stringify(result)}</pre> */}
     </form>
              </div>
        </div>
        <Modal
          isOpen={isOpen}
          contentLabel="Example Modal"
          style={customStyles} 
        >
          <div>
            <img src={Image} style={{ height: "200px" }} alt="" />
          </div>
          <button
            onClick={handleModal}
            className="btn btn-secondary form-control text-center align-content-center"
            style={{ fontWeight: "700", fontSize: "20px", height:'40px'}}
          >
            Ok
          </button>
        </Modal>
      </div>

      <div className="row">
        <div className="col mt-3">
          <div className="Socials2 animationbuttom">
            <a
              href="https://github.com/GirishGR"
              rel="noreferrer"
              target="_blank"
            >
              <i className="bi bi-github socialsIcons2 "></i>
            </a>
            <a
              href="https://www.linkedin.com/in/girish-g-r-114575219?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              <i className="bi bi-linkedin socialsIcons2"></i>
            </a>
            <a
              href="https://www.instagram.com/im_girishgr?igsh=MXdhbHJ1eGNreWdxcg=="
              rel="noreferrer"
              target="_blank"
            >
              <i className="bi bi-instagram socialsIcons2"></i>
            </a>
            <a
              href="https://www.facebook.com/grudresh2?mibextid=2JQ9oc"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              <i className="bi bi-facebook socialsIcons2"></i>{" "}
            </a>
            <a
              href="https://x.com/GirishG41304335?t=Bq1Rduf5Cklc__sxnxWpVg&s=08"
              rel="noreferrer"
              target="_blank"
            >
              <i className="bi bi-twitter-x socialsIcons2"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactEmail;
