import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

import { Row, Col, CardBody, Card, Alert, Container, Form, Input, FormFeedback, Label } from "reactstrap";

import { Link, useNavigate } from "react-router-dom";
import withRouter from "../../../components/Common/withRouter.jsx";

// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";

//Toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import images
import profile from "../../../../images/profile-img.png";
import logo from "../../../../images/logo.svg";
import { createSelector } from "reselect";

const Login = props => {

  //meta title
  document.title = "Login | Skote React + Laravel 10 Admin And Dashboard Template";

  const [email, setEmail] = useState('admin@themesbrand.com');
  const [password, setPassword] = useState('12345678');

  const navigate = useNavigate();

  const handleClick = () => {
    setEmail('admin@themesbrand.com');
    setPassword('12345678');
  };
  const [userLogin, setUserLogin] = useState({ email: email, password: '' });

  const validation = useFormik({
    // enableReinitialize : use this  flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      email: userLogin.email || email,
      password: userLogin.password || password,
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Please Enter Your Email"),
      password: Yup.string().required("Please Enter Your Password"),
    }),
    onSubmit: (values) => {
      console.log("User login")
        navigate('/dashboard');
    }
  });

  return (
    <React.Fragment>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card className="overflow-hidden">
                <div className="bg-primary-subtle">
                  <Row>
                    <Col xs={7}>
                      <div className="text-primary p-4">
                        <h5 className="text-primary">Welcome Back !</h5>
                        <p>Sign in to continue to Skote.</p>
                      </div>
                    </Col>
                    <Col className="col-5 align-self-end">
                      <img src={profile} alt="" className="img-fluid" />
                    </Col>
                  </Row>
                </div>
                <CardBody className="pt-0">
                  <div>
                    <Link to="/" className="logo-light-element">
                      <div className="avatar-md profile-user-wid mb-4">
                        <span className="avatar-title rounded-circle bg-light">
                        <img
                            src={logo}
                            alt=""
                            className="rounded-circle"
                            height="34"
                          />
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className="p-2">
                    <Form
                      className="form-horizontal"
                      onSubmit={(e) => {
                        e.preventDefault();
                        validation.handleSubmit();
                        return false;
                      }}
                    >
                      <ToastContainer closeButton={false} limit={1} />

                      <div className="mb-3">
                        <Label className="form-label">Email</Label>
                        <Input
                          name="email"
                          className="form-control"
                          placeholder="Enter email"
                          type="email"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.email || ""}
                          invalid={
                            validation.touched.email && validation.errors.email ? true : false
                          }
                        />
                        {validation.touched.email && validation.errors.email ? (
                          <FormFeedback type="invalid">{validation.errors.email}</FormFeedback>
                        ) : null}
                      </div>

                      <div className="mb-3">
                        <Label className="form-label">Password</Label>
                        <Input
                          name="password"
                          value={validation.values.password || ""}
                          type="password"
                          placeholder="Enter Password"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          invalid={
                            validation.touched.password && validation.errors.password ? true : false
                          }
                        />
                        {validation.touched.password && validation.errors.password ? (
                          <FormFeedback type="invalid">{validation.errors.password}</FormFeedback>
                        ) : null}
                      </div>

                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customControlInline"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customControlInline"
                        >
                          Remember me
                        </label>
                      </div>

                      <div className="mt-3 d-grid">
                        <button
                          className="btn btn-primary btn-block"
                          type="submit"
                        >
                          Log In
                        </button>
                      </div>

                      {/*<Alert color="info" className="mt-4">*/}
                      {/*  <div className="d-flex align-items-center">*/}
                      {/*    <div className="flex-grow-1">*/}
                      {/*          <p className="mb-0 email">Email - admin@themesbrand.com</p>*/}
                      {/*          <p className="mb-1 pass">Password - 12345678</p>*/}
                      {/*      </div>*/}
                      {/*      <div className="flex-shrink-0">*/}
                      {/*          <Link to="#"  onClick={handleClick} className="btn btn-primary">Click Me</Link>*/}
                      {/*      </div>*/}
                      {/*  </div>*/}
                      {/*</Alert>*/}

                      {/*<div className="mt-4 text-center">*/}
                      {/*  <Link to="/forgot-password" className="text-muted">*/}
                      {/*    <i className="mdi mdi-lock me-1" />*/}
                      {/*    Forgot your password?*/}
                      {/*  </Link>*/}
                      {/*</div>*/}
                        <div className="text-center mt-5">
                            <p>
                                © {new Date().getFullYear()} Emarald Care
                            </p>
                        </div>
                    </Form>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default withRouter(Login);

Login.propTypes = {
  history: PropTypes.object,
};
