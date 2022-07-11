import { useFormik, Formik, Field, Form, ErrorMessage } from "formik";
import React from "react";
import "../styles/styles.css";
import * as Yup from "yup";

export const FormikComponents = () => {
  return (
    <div>
      <h1>Formik Basic Tutorial</h1>

      <Formik
        initialValues={{
          firstName: "Fernando",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("First name is required"),
          lastName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Last name is required"),
          email: Yup.string().email().required("Email is required"),
          terms: Yup.boolean().oneOf([true], "You must accept the terms"),
          jobType: Yup.string().required("Job type is required"),
        })}
      >
        {(formik) => (
          <Form>
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" type="text"></Field>
            <ErrorMessage name="firstName" component="span" />

            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" type="text"></Field>

            <ErrorMessage name="lastName" component="span" />

            <label htmlFor="email">Email Address</label>
            <Field name="email" type="text"></Field>
            <ErrorMessage name="email" component="span" />

            <label>
              <Field name="terms" type="checkbox"></Field>Terms and conditions
            </label>

            <ErrorMessage name="terms" component="span" />

            <label>Job Type</label>
            <Field name="jobType" as="select">
              <option value="">Pick Sometimes</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-junior">IT Junior</option>
            </Field>
            <ErrorMessage name="jobType" component="span" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
