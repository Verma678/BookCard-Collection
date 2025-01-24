import { Outlet, Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  if (isLoggedIn) {
    return children;
  } else return <Navigate to="/" />;
}

export default ProtectedRoute;
