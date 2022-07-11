import React from "react";
import "../styles/styles.css";
import { useForm } from "./../hooks/useForm";
export const RegisterPage = () => {
  const {
    FormData,
    onChange,
    resetForm,
    isValidEmail,
    name,
    email,
    password1,
    password2,
  } = useForm({
    name: "yeltsin",
    email: "Yeltsin@mail.com",
    password1: "",
    password2: "",
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(FormData);
  };
  return (
    <div>
      <h1>Register Page</h1>
      <form noValidate onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={name}
          onChange={onChange}
          className={`${name.trim().length <= 0 && "has-error"}`}
        />

        {name.trim().length <= 0 && <span>Este cambio es necesario</span>}
        <input
          type="email"
          placeholder="email"
          name="email"
          value={email}
          onChange={onChange}
          className={`${!isValidEmail(email) && "has-error"}`}
        />
        {!isValidEmail(email) && <span>Email no es valido</span>}

        <input
          type="password"
          name="password1"
          placeholder="Password1"
          value={password1}
          onChange={onChange}
        />
        {password1.trim().length <= 0 && <span>Este cambio es necesario</span>}
        {password1.trim().length < 6 && password1.trim().length > 0 && (
          <span>La contraseña tiene que tener 6 caracteres </span>
        )}
        <input
          type="password"
          name="password2"
          placeholder="Repeat Pässword"
          value={password2}
          onChange={onChange}
        />
        {password2.trim().length <= 0 && <span>Este cambio es necesario</span>}
        {password2.trim().length > 0 && password1 !== password2 && (
          <span>Las contraseñas deben ser iguales </span>
        )}
        <button type="submit">Create</button>
        <button type="button" onClick={resetForm}>
          Reset Form
        </button>
      </form>
    </div>
  );
};
