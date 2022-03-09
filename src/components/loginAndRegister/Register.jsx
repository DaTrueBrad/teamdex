import axios from 'axios';
import { Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from "yup";
import Swal from 'sweetalert2';

function Register() {

  const SignupSchema = Yup.object().shape({
    username: Yup.string()
      .min(4, "Username must be at least 4 characters long")
      .max(25, "Username cannot be longer than 25 characters")
      .required("Username Required"),
    email: Yup.string()
      .email("Invalid email")
      .required("Email Required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .max(50, "Password is too long"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
  });

  return (
    <div>
      <h1>Register</h1>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          confirmPassword: ""
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          axios.post(`/api/registerUser`, values)
          .then((res) => {
            Swal.fire({
              icon: 'success',
              title: 'Hooray!!',
              html: `This came back!<br></br>username: ${res.data.username} id: ${res.data.id}`
            })
          })
          .catch((err) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops!',
              text: err.response.data
            })
          })
        }}
      >
        {({ errors, touched, isValid }) => (
        <Form>
          <Field name="username" placeholder="Username"/>
          <Field name="email" placeholder="Email"/>
          <Field name="password" type="password" placeholder="Password"/>
          <Field name="confirmPassword" type="password" placeholder="Confirm Password"/>
          <button type="submit"  disabled={!isValid} className="lg-btn">Register</button>
          {errors.username && touched.username ? (
              <div className="error">{errors.username}</div>
            ) : null}
          {errors.email && touched.email ? (
              <div className="error">{errors.email}</div>
            ) : null}
            {errors.password && touched.password ? (
              <div className="error">{errors.password}</div>
            ) : null}
            {errors.confirmPassword && touched.confirmPassword ? (
              <div className="error">{errors.confirmPassword}</div>
            ) : null}
        </Form>
        )}
      </Formik>
    </div>
  )
}

export default Register