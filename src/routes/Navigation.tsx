import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import {
  FormikAbstractation,
  FormikBasicPage,
  FormikComponents,
  FormikJobPage,
  RegisterPage,
} from "../03-forms/pages";

import logo from "../logo.svg";
import { ShoppingPage } from "./../02-component-patterns/pages/ShoppingPage";

export const Navigation = () => {
  return (
    <>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="Logo" />
            <ul>
              <li>
                <NavLink
                  to="/register"
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                >
                  Register
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/formik-basic"
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                >
                  Formik Basic
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/formik-job"
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                >
                  Formik job
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/formik-components"
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                >
                  Formik Components
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/formik-abstractation"
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                >
                  Formik abstractation
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/users"
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                >
                  Users
                </NavLink>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/about" element={<h1>About Page</h1>} />
            <Route path="/about" element={<h1>About Page</h1>} />
            <Route path="/users" element={<h1>Users Page</h1>} />
            <Route path="/home" element={<ShoppingPage></ShoppingPage>} />
            <Route path="/register" element={<RegisterPage></RegisterPage>} />
            <Route
              path="/*"
              element={<Navigate to="/home" replace></Navigate>}
            />
            <Route
              path="/formik-basic"
              element={<FormikBasicPage></FormikBasicPage>}
            />
            <Route
              path="/formik-job"
              element={<FormikJobPage></FormikJobPage>}
            />
            <Route
              path="/formik-components"
              element={<FormikComponents></FormikComponents>}
            />
            <Route
              path="/formik-abstractation"
              element={<FormikAbstractation></FormikAbstractation>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};
