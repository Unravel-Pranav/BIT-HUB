import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="text-center text-lg-start text-dark">
        {/* <!-- Section: Social media --> */}
        <section className="d-flex justify-content-between p-4 text-white">
          {/* <!-- Left --> */}
          <div className="me-5">
            <span>Get connected with us on social networks:</span>
          </div>
          {/* <!-- Left -->

      <!-- Right --> */}
          <div>
            <Link to="/" className="text-white me-4">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link to="/" className="text-white me-4">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link to="/" className="text-white me-4">
              <i className="fab fa-google"></i>
            </Link>
            <Link to="/" className="text-white me-4">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link to="/" className="text-white me-4">
              <i className="fab fa-linkedin"></i>
            </Link>
            <Link to="/" className="text-white me-4">
              <i className="fab fa-github"></i>
            </Link>
          </div>
          {/* <!-- Right --> */}
        </section>
        {/* <!-- Section: Social media --> */}

        {/* <!-- Section: Links  --> */}
        <section className="">
          <div className="container text-center text-md-start mt-5">
            {/* <!-- Grid row --> */}
            <div className="row mt-3">
              {/* <!-- Grid column --> */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* <!-- Content --> */}
                <h6 className="text-uppercase fw-bold">TechFusion Freelancers</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                <p>
                  A collective of ambitious BTech students turned freelancers,
                  TechFusion, is breathing life into innovative applications.
                  With a fusion of skills, dedication, and creativity, we're
                  building applications that redefine possibilities and empower
                  businesses. 
                </p>
              </div>
              {/* <!-- Grid column -->

          <!-- Grid column --> */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold">Products</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                <p>
                  <Link to="/" className="text-dark">
                    BIThub
                  </Link>
                </p>
                <p>
                  <Link to="/" className="text-dark">
                    Rent It Out
                  </Link>
                </p>
                <p>
                  <Link to="/" className="text-dark">
                  Service Provider
                  </Link>
                </p>
              </div>
              {/* <!-- Grid column -->

          <!-- Grid column --> */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold">Useful links</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                <p>
                  <Link to="https://github.com/Unravel-Pranav" className="text-dark">
                    Pranav - Linkdin
                  </Link>
                </p>
                <p>
                <Link to="https://github.com/Unravel-Pranav" className="text-dark">
                  Pranav - GitHub
                  </Link>
                </p>
               
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                <p>
                  <i className="fas fa-home mr-3"></i> Wardha, Maharastra 442001, IN
                </p>
                <p>
                  <i className="fas fa-envelope mr-3"></i> techfusion@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone mr-3"></i> 8317208443
                </p>
                <p>
                  <i className="fas fa-print mr-3"></i>  7058918996
                </p>
              </div>
              {/* <!-- Grid column --> */}
            </div>
            {/* <!-- Grid row --> */}
          </div>
        </section>
        {/* <!-- Section: Links  -->

    <!-- Copyright --> */}
        <div className="text-center p-3">
          © 2020 Copyright:
          <Link className="text-dark" to="https://bitHub.com/">
            BitHub
          </Link>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
      {/* <!-- Footer --> */}
    </>
  );
}
