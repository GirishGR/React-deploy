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

        <form onSubmit={onSubmit}>
          <div className="row justify-content-center">
            <div className="col-lg-5 col-11 ContactMe ">
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Please enter your name"
                required
              />
              <p className="FormMsgs"></p>
              <input
                type="text"
                name="mobile"
                placeholder="Please enter mobile number"
                className="form-control"
                required
              />
              <p className="FormMsgs"></p>
            </div>

            <div className="col-lg-5 col-11 ContactMe">
              <input
                type="text"
                name="email"
                className="form-control"
                placeholder="Please enter email"
                required
              />
              <p className="FormMsgs"></p>
              <input
                type="text"
                placeholder="Please enter subject"
                name="subject"
                className="form-control"
                required
              />
              <p className="FormMsgs"></p>
            </div>

            <div className="col-lg-7 col-11 ContactMe">
              <textarea
                name="message"
                rows={8}
                className="form-control"
                placeholder="Please type in your message"
                required
              ></textarea>
              <p className="FormMsgs text-center"></p>
            </div>
            <div className="submitButton">
              {/* <input type="submit" value="Send Message" className='button3 align-content-center' onClick={handleSubmit}/> */}
              <button className="button">Send Message</button>
            </div>
            <p className="FormMsgs mb-0 mt-1 text-center">{result}</p>
          </div>
          {/* <pre className='text-center'>{JSON.stringify(result)}</pre> */}
        </form>

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
