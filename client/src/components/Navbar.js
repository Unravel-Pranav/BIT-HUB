import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from '../context/UserContext';
import "./Navbar.css";
import { loginUser } from "../api/AuthicationApi";
import axios from "axios";

export default function Navbar() {
  const userData = {
    email: "",
    password: "",
    role:""
  };
  // to set log in form  data
  const [data, setData] = useState(userData);
  // to set response data
  const [Resdata, RessetData] = useState("");
  // to change status if status change then useeffect render one time if we not use it we need to refresh page
  const [login, setlogin] = useState(false);
  // to verify authentication complete
  const [auth, setauth] = useState(false);
  // to run loading component
  const [loading, setLoading] = useState(false);
  // to close the modal after login is success
  const [showLoginModal, setShowLoginModal] = useState(false);

  const { setUserContext } = useUserContext();

  // to navigate
  const Navigate = useNavigate();
  // for logout function
  const handleLogout = () => {
    // Clear the access_token from localStorage when logging out
    localStorage.removeItem("access_token");
    // Redirect the user to the login page or home page after logout
    // You can add your own redirect logic based on your routes
    window.location.assign("/");
  };
  // change handler function
  function onChangeHandler(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  // get details of login user
  const GetUser = async () => {
    // set loading true
    setLoading(true);
    try {
      const response = await axios.get("https://bit-hub-22ky.onrender.com/api", {
        headers: {
          Authorization: `${localStorage.getItem("access_token")}`,
        },
      });
      console.log("data in navbar");
      RessetData(response.data);
      setUserContext(response.data);
      //  set loading false
      setLoading(false);
      // set authentication complete
      setauth(true);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  // to render Component
  useEffect(
    (req, res) => {
      // if token is not then rediret it to home page
      if (!localStorage.getItem("access_token")) {
        Navigate("/");
      } else {
        GetUser();
      }
    },
    [login] // add dependency when login set then online render componenet again and again
  );

  // function for loaging
  const onLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setShowLoginModal(true);
    const userResponse = await loginUser(data);

    try {
      if (userResponse.status === 200) {
        setLoading(false);
        setlogin(true);
        localStorage.setItem("access_token", userResponse.data.user.token);
        // setUserContext(userResponse.data.user);

      }
    } catch (error) {
      setLoading(false);
      alert("LogIn Failed")
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-lg-3 py-lg-2 shadow-sm sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center me-5 fw-bold fs-3 h-font" to="/">
            <img className="img-fluid" style={{ height: "40px" }} src="Logo.svg" alt="Logo"></img>
            <span class="ms-2">BIThub</span>
          </Link>

          <button
            className="navbar-toggler shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
              <li className="nav-item">
                <Link
                  className="nav-link me-2 active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link me-2" to="/aboutus">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link me-2" to="/resource">
                  Resource
                </Link>
              </li>
              <li className="nav-item">
                    <Link className="nav-link me-2" to="/uploadresourse">
                      Upload Resource
                    </Link>
                  </li>
              {/* if authentication is done then only show this link  */}
              {auth ? (
                <>
                  
                  <li className="nav-item">
                    <Link className="nav-link me-2" to="/addsubject">
                      Manage Subject
                    </Link>
                  </li>
                  
                  <li className="nav-item">
                    <Link className="nav-link me-2" to="/studentresource">
                      Student Resource
                    </Link>
                  </li>
                  {Resdata.role === "admin" && (
                   
                    <li className="nav-item">
                      <Link className="nav-link me-2" to="/managecr">
                        Manage CR
                      </Link>
                    </li>
                    
                  )}
                </>
              ) : (
                ""
              )}
            </ul>
            {/* during loging set loading   */}
            {loading ? (
              <div className="spinner-border text-success" role="status">
                <span className="sr-only"></span>
              </div>
            ) : auth ? ( // if  authentication done thenonly show user name hide login button
              <>
                <div className="d-flex justify-content-center">
                  <div className="tooltip-container">
                    <button
                      type="button"
                      className="btn btn-outline-success shadow-none me-lg-3 me-2"
                    >
                      {Resdata.full_name}
                    </button>
                    <button
                      className="btn btn-danger tooltip-text"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="d-flex justify-content-center">
                <button
                  type="button"
                  className="btn btn-outline-dark shadow-none me-lg-3 me-2"
                  data-bs-toggle="modal"
                  data-bs-target="#LoginModal"
                >
                  Login
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Login Modal Code */}
      <div
        className="modal fade"
        id="LoginModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="false"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <form action="">
              <div className="modal-header">
                <h5 className="modal-title d-flex align-items-center">
                  <i className="bi bi-person-circle fs-3 me-2"></i>
                  User Login
                </h5>
                <button
                  type="reset"
                  className="btn-close shadow-none"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input
                    onChange={onChangeHandler}
                    value={data.email}
                    type="email"
                    name="email"
                    className="form-control shadow-none"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    onChange={onChangeHandler}
                    value={data.password}
                    type="password"
                    name="password"
                    className="form-control shadow-none"
                  />
                </div>

                

                <div className="d-flex align-items-center justify-content-between mb-2">
                  <button
                    onClick={(e) => onLogin(e)}
                    className="btn btn-dark shadow-none"
                  >
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

    </>
  );
}
