import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../styles/Login.css";
import { toast } from "react-toastify";
import { addUser, getAllUsers } from "../services/userService";

const Register = ({ openLogin, setIsPopUpOpen }) => {
  const [loading, setLoading] = useState(false);
  const [nextUserId, setNextUserId] = useState(1);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await getAllUsers();
        if (users.length > 0) {
          const maxId = Math.max(...users.map((user) => user.id));
          setNextUserId((maxId + 1).toString());
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      phoneNumber: "",
      confirmPassword: "",
      address: {
        doorNo: "",
        street: "",
        city: "",
        pincode: "",
      },
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .matches(/^[A-Za-z\s]+$/, "Full name can only contain letters")
        .min(3, "Full name must be at least 3 characters")
        .max(50, "Full name cannot exceed 50 characters")
        .required("Full name is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      phoneNumber: Yup.string()
        .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
        .required("Phone Number is required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(/[a-z]/, "Password must contain at least one lowercase letter")
        .matches(/[0-9]/, "Password must contain at least one number")
        .matches(
          /[@$!%*?&]/,
          "Password must contain at least one special character"
        )
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
      address: Yup.object({
        doorNo: Yup.string().required("Door No is required"),
        street: Yup.string().required("Street is required"),
        city: Yup.string()
          .matches(/^[A-Za-z\s]+$/, "City name must only contain letters")
          .required("City is required"),
        pincode: Yup.string()
          .matches(/^[0-9]{6}$/, "Pincode must be exactly 6 digits")
          .required("Pincode is required"),
      }),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const newUser = {
          id: nextUserId,
          name: values.fullName,
          email: values.email,
          password: values.password,
          phoneNumber: values.phoneNumber,
          address: values.address,
          interest: [],
          sell: [],
          servicesAndModifications: [],
          myPurchase: [],
        };
        await addUser(newUser);
        toast.success("Registration successful!", { position: "top-right" });
        setIsPopUpOpen(false);
        setNextUserId((prevId) => prevId + 1);
        formik.resetForm();
      } catch (error) {
        toast.error("Registration failed!", { position: "top-right" });
      }
      setLoading(false);
    },
  });
  return (
    <div className="login-container">
      <h2>Register</h2>
      <form className="login-form" onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.touched.fullName && formik.errors.fullName ? "error" : ""
            }
          />
          {formik.touched.fullName && formik.errors.fullName && (
            <p className="error-text">{formik.errors.fullName}</p>
          )}
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formik.values.email}
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
          <label>Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.touched.phoneNumber && formik.errors.phoneNumber
                ? "error"
                : ""
            }
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber && (
            <p className="error-text">{formik.errors.phoneNumber}</p>
          )}
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formik.values.password}
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

        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.touched.confirmPassword && formik.errors.confirmPassword
                ? "error"
                : ""
            }
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <p className="error-text">{formik.errors.confirmPassword}</p>
          )}
        </div>

        <div className="address-container">
          <div className="form-group">
            <label>Door No</label>
            <input
              type="text"
              name="address.doorNo"
              value={formik.values.address.doorNo}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.address?.doorNo &&
              formik.errors.address?.doorNo && (
                <p className="error-text">{formik.errors.address.doorNo}</p>
              )}
          </div>

          <div className="form-group">
            <label>Street</label>
            <input
              type="text"
              name="address.street"
              value={formik.values.address.street}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.address?.street &&
              formik.errors.address?.street && (
                <p className="error-text">{formik.errors.address.street}</p>
              )}
          </div>

          <div className="form-group">
            <label>City</label>
            <input
              type="text"
              name="address.city"
              value={formik.values.address.city}
              onChange={(e) =>
                formik.setFieldValue(
                  "address.city",
                  e.target.value.toUpperCase()
                )
              }
              onBlur={formik.handleBlur}
            />
            {formik.touched.address?.city && formik.errors.address?.city && (
              <p className="error-text">{formik.errors.address.city}</p>
            )}
          </div>

          <div className="form-group">
            <label>Pincode</label>
            <input
              type="text"
              name="address.pincode"
              value={formik.values.address.pincode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.address?.pincode &&
              formik.errors.address?.pincode && (
                <p className="error-text">{formik.errors.address.pincode}</p>
              )}
          </div>
        </div>

        <button
          className="login-btn"
          type="submit"
          disabled={loading || !formik.isValid || !formik.dirty}
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
      <div className="signup-section">
        <span>Already have an account?</span>
        <button
          className="signup-btn"
          onClick={() => {
            openLogin();
          }}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Register;
