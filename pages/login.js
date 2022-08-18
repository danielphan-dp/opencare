import React from "react";
import WithLayout from "../src/WithLayout";
import LoginView from "../src/views/LoginView";
import Main from "../src/layouts/Main";

const Login = () => {
  return <WithLayout component={LoginView} layout={Main} />;
};

export default Login;
