import "./Portfolio.css";
import { Link } from "react-scroll";

let Footer = () => {
  return (
    <>
      <div className="container text-center" id="footer">
        <div className="row justify-content-md-center">
          <div className="col Footer mt-4">

  
            <a
              className="nav-link active text-center mb-2"
              aria-current="page"
              href="/"
            >

              
             <Link to="header" smooth={true} duration={2000}> Home/Top </Link>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
