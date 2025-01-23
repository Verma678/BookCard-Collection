import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Bookcontent from "./Bookcontent";
import Search_results from "./Search_results";
import LoginPage from "./components/LoginPage";
import SignUp from "./SignUp";
import ProtectedRoute from "./ProtectedRoutes";
import IrreversibleSignIn from "./IrreversibleSignIn";
import "./index.css";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signUp" element={<SignUp />} />
        <Route
          path="/"
          element={
            <IrreversibleSignIn>
              <LoginPage />
            </IrreversibleSignIn>
          }
        />
        <Route
          path="/card/:id"
          element={
            <ProtectedRoute>
              <Bookcontent />
            </ProtectedRoute>
          }
        />
        <Route
          path="/search"
          element={
            <ProtectedRoute>
              <Search_results />
            </ProtectedRoute>
          }
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default Main;
