import axios from "axios";
import { Form, Formik, Field } from "formik";
import React from "react";
import Swal from "sweetalert2";
import {Link, useNavigate} from 'react-router-dom'
import { useCookies } from "react-cookie";


function Login() {
  const navigate = useNavigate()
  const [cookies, setCookie, removeCookie] = useCookies(["userID", "username"])
  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={(values) => {
          axios.post('/api/loginUser', values)
          .then((res) => {
            setCookie("userID", res.data.id, {path: "/"})
            setCookie("username", res.data.username, {path: "/"})
            Swal.fire({
              icon: 'success',
              title: 'Hooray!!',
              html: `You are now logged in!`
            })
            .then((res) => {
              navigate('/teams')
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
        <Form>
          <Field name="username" placeholder="Username" />
          <Field name="password" type="password" placeholder="Password" />
          <button className="lg-btn">Log In</button>
        </Form>
      </Formik>
      <br />
          <small>Not a user? <Link to="/register">Click here!</Link></small>
    </div>
  );
}

export default Login;
