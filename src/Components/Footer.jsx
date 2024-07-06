import "./Portfolio.css";

let Footer = () => {
  return (
    <>
      <div className="container text-center" id="footer">
        <div className="row justify-content-md-center">
          <div className="col Footer mt-4">
            <p className="mt-2">
              Designed with <i className="bi bi-heart-fill"></i> by Girish G R
            </p>
            <a
              className="nav-link active text-center mb-2"
              aria-current="page"
              href="#"
            >
              Home/Top
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
