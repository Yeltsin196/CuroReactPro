import { useFormik, Formik, Field, Form, ErrorMessage } from "formik";
import React from "react";
import "../styles/styles.css";
import * as Yup from "yup";
/* import { MyTextInput } from "../components/MyTextInput";
import { MySelect } from "../components/MySelect";
import { MyCheckbox } from "../components/MyCheckbox"; */

import { MyTextInput, MySelect, MyCheckbox } from "../components";

export const FormikAbstractation = () => {
  return (
    <div>
      <h1>Formik Basic Tutorial</h1>

      <Formik
        initialValues={{
          firstName: "",
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
          jobType: Yup.string()
            .notOneOf(["it-junior"], "Esta opcion no es permitida")
            .required("Job type is required"),
        })}
      >
        {(formik) => {
          return (
            <Form>
              <MyTextInput
                label="First Name"
                name="firstName"
                placeholder="Yeltsin"
              ></MyTextInput>
              <MyTextInput
                label="Last Name"
                name="lastName"
                placeholder="Ramirez"
              ></MyTextInput>
              <MyTextInput
                label="Email"
                name="email"
                placeholder="algo@mail.com"
                type="email"
              ></MyTextInput>
              <MyCheckbox
                label="terms and conditions"
                name={"terms"}
              ></MyCheckbox>

              <MySelect name="jobType" label="Job Type">
                <option value="">Pick Sometimes</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="it-senior">IT Senior</option>
                <option value="it-junior">IT Junior</option>
              </MySelect>

              <button type="submit">Submit</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
