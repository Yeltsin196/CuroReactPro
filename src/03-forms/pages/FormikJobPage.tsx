import { useFormik } from "formik";
import React from "react";
import "../styles/styles.css";
import * as Yup from "yup";

export const FormikJobPage = () => {
  const {
    /*   handleChange,
    values, */
    handleSubmit,
    errors,
    touched,
    /*    handleBlur, */
    getFieldProps,
  } = useFormik({
    initialValues: {
      firstName: "Fernando",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("First name is required"),
      lastName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Last name is required"),
      email: Yup.string().email().required("Email is required"),
    }),
  });

  return (
    <div>
      <h1>Formik Basic Tutorial</h1>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="firstName">First Name</label>
        <input type="text" {...getFieldProps("firstName")} />

        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}

        <label htmlFor="lastName">Last Name</label>
        <input type="text" {...getFieldProps("lastName")} />

        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor="email">Email Address</label>
        <input type="email" {...getFieldProps("email")} />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
