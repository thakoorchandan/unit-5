import React from "react";
import Login from "../Components/Login";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess, loginFailure } from "../Redux/auth/action";

function LoginPage() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);
  const handleLogin = ({ email, password }) => {
    // fake auth
    if (email === "admin" && password === "admin") {
      const action = loginSuccess("sampleToken");
      dispatch(action);
    } else {
      const action = loginFailure("wrong Credentials");
      dispatch(action);
    }
  };
  if (isAuth) {
    console.log(isAuth);
    return <Redirect to="/" />;
  }
  return (
    <div>
      <Login handleLogin={handleLogin} />
    </div>
  );
}

export default LoginPage;
