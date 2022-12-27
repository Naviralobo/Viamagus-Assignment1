import React from "react";
import classes from "./Login.module.css";
import Form from "./Form";

const Login = () => {
  return (
    <div className={classes.login}>
      <div className={classes.amazonbg}>
        <img
          className={classes.amazon}
          src="/images/amazon.png"
          alt="amazon-logo"
        />
      </div>
      <div className={classes.bodyDiv}>
        <div className={classes.heading}>Login</div>
        <img
          className={classes.tree}
          src="/images/tree.png"
          alt="amazon-logo"
        />
        <hr className={classes.hr} />
        <Form />
        <div className={classes.forgotOrNewUser}>
          <div>Forgot Password?</div>
          <div style={{ color: "red" }}>New User? Sign Up</div>
        </div>
        <div style={{ textAlign: "center", fontWeight: "bold" }}>or</div>
        <a href="http://www.google.com" style={{ textDecoration: "none" }}>
          <div className={classes.googleFb}>
            <img
              style={{ width: "10%" }}
              src="/images/google.jpg"
              alt="google logo"
            />

            <div style={{ margin: "2% 20%" }}>OPEN WITH GOOGLE</div>
          </div>
        </a>
        <a href="http://www.facebook.com" style={{ textDecoration: "none" }}>
          <div className={classes.googleFb}>
            <img
              style={{
                width: "8%",
                margin: "1%",
              }}
              src="/images/facebook.png"
              alt="google logo"
            />
            <div style={{ margin: "2% 20%" }}>OPEN WITH FACEBOOK</div>
          </div>
        </a>
      </div>
    </div>
  );
};
export default Login;
