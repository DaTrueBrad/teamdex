import { Form, Formik, Field } from "formik";
import React from "react";

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
          console.log(values)
        }}
      >
        <Form>
          <Field name="username" placeholder="Username" />
          <Field name="password" type="password" placeholder="Password" />
          <button className="lg-btn">Log In</button>
        </Form>
      </Formik>
      <br />
          <small>Not a user? <a href="/register">Click here!</a></small>
    </div>
  );
}

export default Login;
