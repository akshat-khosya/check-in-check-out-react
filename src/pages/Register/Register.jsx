import "./register.scss";
import React from "react";
import { Form } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Register;
