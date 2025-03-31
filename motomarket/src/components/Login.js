import React, { useState } from "react";
import "../styles/Login.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { getAllUsers } from "../services/userService";
import { toast } from "react-toastify";

const Login = ({ openRegister, loginSuccess }) => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid Email Format")
        .required("Email is Required"),
      password: Yup.string().required("Password is Required"),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const users = await getAllUsers();
        const loginUser = users.find((user) => user.email === values.email);

        if (loginUser) {
          if (loginUser.password === values.password) {
            toast.success("Login successful!", {
              position: "top-right",
            });
            localStorage.setItem("loggedInUser", JSON.stringify(loginUser));
            loginSuccess(loginUser);
          } else {
            toast.error("Incorrect password!", { position: "top-right" });
          }
        } else {
          toast.error("User not found!", { position: "top-right" });
        }
      } catch (error) {
        toast.error("Error while logging in!", { position: "top-right" });
        console.error("Login Error:", error);
      }
      setLoading(false);
    },
  });

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            name="email"
            value={formik.values.email}
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.touched.email && formik.errors.email ? "error" : ""
            }
          />
          {formik.touched.email && formik.errors.email && (
            <p className="error-text">{formik.errors.email}</p>
          )}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            name="password"
            value={formik.values.password}
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.touched.password && formik.errors.password ? "error" : ""
            }
          />
          {formik.touched.password && formik.errors.password && (
            <p className="error-text">{formik.errors.password}</p>
          )}
        </div>
        <div>
          <button type="submit" disabled={loading} className="login-btn">
            {loading ? "Logging in..." : "Login"}
          </button>
        </div>
      </form>
      <div className="signup-section">
        <span>Don't have an account?</span>
        <button
          className="signup-btn"
          onClick={() => {
            openRegister();
          }}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Login;
