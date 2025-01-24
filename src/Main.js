import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Bookcontent from "./components/Bookcontent";
import Search_results from "./components/Search_results";
import LoginPage from "./components/LoginPage";
import SignUp from "./components/SignUp";
import ProtectedRoute from "./components/ProtectedRoutes";
import IrreversibleSignIn from "./components/IrreversibleSignIn";
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
