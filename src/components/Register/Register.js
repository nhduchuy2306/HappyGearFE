import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup';
import "./Register.scss";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {

  const [gender, setGender] = useState(false)

  const navigate = useNavigate();

  const notify = () => toast.success('Register successfully!', {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  const { values, handleChange, isSubmitting, handleSubmit, touched, errors, handleBlur } = useFormik({
    initialValues: {
      email: "",
      userName: "",
      password: "",
      fullName: "",
      address: "",
      phoneNumber: "",
      confirmedPassword: ""
    },
    validationSchema: Yup.object({
      email: Yup.string()
        // eslint-disable-next-line
        .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Email is not valid")
        .required("Required"),
      password: Yup.string()
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, "Password must have minimum eight characters, at least one uppercase letter, one lowercase letter and one number")
        .min(8, "Password must at least 8 character")
        .required("Required"),
      fullName: Yup.string().required("Required"),
      address: Yup.string().required("Required"),
      phoneNumber: Yup.number().positive().integer().required("Required").min(10, "Phone number must be at least 10 characters"),
      userName: Yup.string()
        .test(
          "Username unique", "Username already in use",
          function (value) {
            if (value !== undefined) {
              return new Promise(function (resolve, reject) {
                axios.get(`http://localhost:8080/happygear/api/users/${value}`)
                  .then((res) => {
                    if (res.status === 200){
                      resolve(false)
                    }
                    else if(res.status === 204){
                      resolve(true)
                    }
                  })
                  .catch((error) => {
                    console.log(error)
                  })
              })
            }
          }
        )
        .min(2, "UserName must be at least 2 characters").required("Required"),
      confirmedPassword: Yup.string().required("Required").oneOf([Yup.ref('password'), null], 'Passwords must match')
    }),
    onSubmit: (values, actions) => {
      console.log("onSubmit called");
      const requestBody = {
        email: values.email,
        userName: values.userName,
        password: values.password,
        fullName: values.fullName,
        address: values.address,
        phoneNumber: values.phoneNumber,
        confirmedPassword: values.confirmedPassword,
        gender: gender
      };
      axios.post("http://localhost:8080/happygear/api/users/register", requestBody)
        .then((response) => {
          if (response.status === 200) {
            notify();
            actions.resetForm();
            navigate("/login")
          }
        })
        .catch((error) => console.log(error))
    },
  })

  return (
    <section className="gradient-custom" style={{ height: "800px" }}>
      <div className="container py-5 h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-12 col-lg-9 col-xl-7">
            <div
              className="card shadow-2-strong card-registration"
              style={{ borderRadius: "15px" }}
            >
              <div className="card-body p-4 p-md-5">
                <h3
                  className="mb-4 pb-2 pb-md-0 mb-md-5 text-center text-primary"
                  style={{ color: "", fontWeight: "bold" }}
                >
                  Registration Form
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <h6 className="form-label font-weight-bold">
                          Full Name
                        </h6>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          className="form-control form-control-lg"
                          placeholder="Enter Full Name"
                          value={values.fullName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {(touched.fullName && errors.fullName) && (
                          <p className="text-error">{errors.fullName}</p>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <h6 className="form-label">
                          User Name
                        </h6>
                        <input
                          type="text"
                          id="userName"
                          name="userName"
                          className="form-control form-control-lg"
                          placeholder="Enter User Name"
                          value={values.userName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {(touched.userName && errors.userName) && (
                          <p className="text-error">{errors.userName}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <h6 className="form-label font-weight-bold">
                          Password
                        </h6>
                        <input
                          type="password"
                          id="password"
                          name="password"
                          className="form-control form-control-lg"
                          placeholder="Password"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {(touched.password && errors.password) && (
                          <p className="text-error">{errors.password}</p>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <h6 className="form-label">
                          Confirmed Password
                        </h6>
                        <input
                          type="password"
                          id="confirmedPassword"
                          name="confirmedPassword"
                          className="form-control form-control-lg"
                          placeholder="Confirm Password"
                          value={values.confirmedPassword}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {(touched.confirmedPassword && errors.confirmedPassword) && (
                          <p className="text-error">{errors.confirmedPassword}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4 d-flex align-items-center">
                      <div className="form-outline datepicker w-100">
                        <h6 className="form-label">
                          Address
                        </h6>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="address"
                          name="address"
                          placeholder="Enter Address"
                          value={values.address}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {(touched.address && errors.address) && (
                          <p className="text-error">{errors.address}</p>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <h6 className="mb-2 pb-1">Gender: </h6>

                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          id="gender"
                          value="0"
                          checked={gender === false}
                          onClick={() => setGender(true)}
                        />
                        <label className="form-check-label">
                          Male
                        </label>
                      </div>

                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          id="gender"
                          value="1"
                          checked={gender === true}
                          onClick={() => setGender(true)}
                        />
                        <label className="form-check-label">
                          Female
                        </label>
                      </div>

                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4 pb-2">
                      <div className="form-outline">
                        <h6 className="form-label">
                          Email
                        </h6>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control form-control-lg"
                          placeholder="Enter Email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {(touched.email && errors.email) && (
                          <p className="text-error">{errors.email}</p>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6 mb-4 pb-2">
                      <div className="form-outline">
                        <h6 className="form-label">
                          Phone Number
                        </h6>
                        <input
                          type="tel"
                          id="phoneNumber"
                          name="phoneNumber"
                          className="form-control form-control-lg"
                          placeholder="Enter Phone Number"
                          value={values.phoneNumber}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {(touched.phoneNumber && errors.phoneNumber) && (
                          <p className="text-error">{errors.phoneNumber}</p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="row mt-4 pt-2">
                    <input
                      className="btn btn-primary btn-lg"
                      type="submit"
                      value="Register"
                      disabled={isSubmitting}
                    />
                    <span className="text-center mt-3">Do you have account ? <Link to="/login">Sign in</Link></span>
                  </div>
                  <ToastContainer
                    position="top-right"
                    autoClose={1000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
