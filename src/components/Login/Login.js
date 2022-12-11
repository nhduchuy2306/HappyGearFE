import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { setIsLogin } = useContext(LoginContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post("http://localhost:8080/happygear/api/users/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        if (response?.status === 200) {
          window.localStorage.setItem("UserLogin",response.data.userName);
          notifyLogin();
          setTimeout(() => {
            navigate("/");
            setIsLogin(true);
          }, 2000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const notifyLogin = () =>
    toast.success("Login successfully!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <section className="d-flex justify-content-center align-items-center m-5">
          <div className="container" style={{ width: "400px" }}>
            <h1 className="text-center mb-5">Login</h1>
            <div className="row d-flex justify-content-center align-items-center">
              <div className="row d-flex justify-content-center align-items-center">
                <form onSubmit={handleLogin}>
                  <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
                    <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                    <button
                      type="button"
                      className="btn btn-primary btn-floating mx-1"
                    >
                      <i className="fa fa-facebook-f"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary btn-floating mx-1"
                    >
                      <i className="fa fa-twitter"></i>
                    </button>

                    <button
                      type="button"
                      className="btn btn-primary btn-floating mx-1"
                    >
                      <i className="fa fa-google"></i>
                    </button>
                  </div>

                  <div className="divider d-flex align-items-center my-4">
                    <p className="text-center fw-bold mx-3 mb-0">Or</p>
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="form3Examle3"
                      className="form-control form-control-lg"
                      placeholder="Enter a username"
                      onChange={handleUsernameChange}
                      value={username}
                    />
                    <label
                      className="form-label"
                      style={{ opacity: "0.7" }}
                      htmlFor="form3Example3"
                    >
                      Username
                    </label>
                  </div>
                  <div className="form-outline mb-3">
                    <input
                      type="password"
                      id="form3Example4"
                      className="form-control form-control-lg"
                      placeholder="Enter password"
                      onChange={handlePasswordChange}
                      value={password}
                    />
                    <label
                      className="form-label"
                      style={{ opacity: "0.7" }}
                      htmlFor="form3Example4"
                    >
                      Password
                    </label>
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="form2Example3"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="form2Example3"
                      >
                        Remember me
                      </label>
                    </div>
                    <a href="#!" className="text-body">
                      Forgot password?
                    </a>
                  </div>
                  <div className="text-lg-start mt-4 pt-2 float-right d-flex flex-column justify-content-center align-items-center">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg w-100"
                    >
                      Login
                    </button>
                    <div className="mt-2 float-right">
                      <span className="mr-2">Don't have an account?</span>
                      <Link to="/register" className="link-danger">
                        Register
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Login;
