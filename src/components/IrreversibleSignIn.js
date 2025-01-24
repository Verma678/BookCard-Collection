import React from "react";
import { Navigate } from "react-router-dom";

const IrreversibleSignIn = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") == "true";
  if (isLoggedIn) {
    return <Navigate to="/home" />;
  } else {
    return children;
  }
};

export default IrreversibleSignIn;
