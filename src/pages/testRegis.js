import React, { useState, useEffect } from "react";
import { object } from "yup";
// import useForm from "../components/useForm";
// import validate from "../components/validateInfo";

const FormSignup = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };
  return (
    <div className="form-content-right">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div>Signup successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )}
      {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}
      <form className="form" onSubmit={handleSubmit}>
        <h1>Get Start</h1>
        <div className="form-inputs">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            name="username"
            className="form-input"
            placeholder="Enter your username"
            value={formValues.username}
            onChange={handleChange}
          />
          <p className="text-red-600">{formErrors.username}</p>
          {/* {errors.username && <p className="text-red-600">{errors.username}</p>} */}
        </div>

        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            value={formValues.email}
            onChange={handleChange}
          />
          <p className="text-red-600">{formErrors.email}</p>
          {/* {errors.email && <p className="text-red-600">{errors.email}</p>} */}
        </div>

        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-input"
            placeholder="Enter your password"
            value={formValues.password}
            onChange={handleChange}
          />
          <p className="text-red-600">{formErrors.password}</p>
          {/* {errors.password && <p className="text-red-600">{errors.password}</p>} */}
        </div>

        <div className="form-inputs">
          <label htmlFor="password2" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            name="password2"
            className="form-input"
            placeholder="Enter your password2"
            // value={formValues.password2}
            // onChange={handleChange}
          />
          {/* {errors.password2 && (
            <p className="text-red-600">{errors.password2}</p>
          )} */}
        </div>
        <button className="form-input-btn" type="submit">
          Sign Up
        </button>

        <span className="form-input-login">
          Already have an account? Login <a href="#">here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
