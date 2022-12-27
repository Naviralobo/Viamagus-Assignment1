import React, { useRef, useState } from "react";
import classes from "./Form.module.css";
const Form = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [message, setMessage] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    // const regex = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])/g;
    const regex = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}/g;
    if (regex.match(emailInputRef)) {
      setMessage("");
    } else {
      setMessage("email Invalid");
    }
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label className={classes.label}>Email</label>
      <input className={classes.input} ref={emailInputRef} type="email" />
      {message}
      <div style={{ display: "flex" }}>
        <div className={classes.minusSymbol}>-</div>
        <div className={classes.alert}>The email field is required</div>
      </div>
      <label className={classes.label}>Password</label>
      <input className={classes.input} ref={passwordInputRef} type="password" />
      <button className={classes.submitButton} type="submit">
        Sign In
      </button>
    </form>
  );
};
export default Form;
