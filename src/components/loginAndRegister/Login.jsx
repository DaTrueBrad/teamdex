import axios from "axios";
import { Form, Formik, Field } from "formik";
import React from "react";
import Swal from "sweetalert2";
import {Link} from 'react-router-dom'


function Login() {
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
