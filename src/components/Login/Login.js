import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <section className="mt-5" style={{height: "800px"}}>
        <div className="container" style={{width:"400px"}}>
          <div className="row d-flex justify-content-center align-items-center">
            <div className="row d-flex justify-content-center align-items-center">
              <form>
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
                    type="email"
                    id="form3Example3"
                    className="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                  />
                  <label className="form-label" style={{opacity:"0.7"}} htmlFor="form3Example3">
                    Email address
                  </label>
                </div>
                <div className="form-outline mb-3">
                  <input
                    type="password"
                    id="form3Example4"
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                  />
                  <label className="form-label" style={{opacity:"0.7"}} htmlFor="form3Example4">
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
                    <label className="form-check-label" htmlFor="form2Example3">
                      Remember me
                    </label>
                  </div>
                  <a href="#!" className="text-body">
                    Forgot password?
                  </a>
                </div>
                <div className="text-lg-start mt-4 pt-2 float-right d-flex flex-column justify-content-center align-items-center">
                  <button type="button" className="btn btn-primary btn-lg w-100">
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
    </>
  );
}

export default Login;
