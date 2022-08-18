import React from "react";
import WithLayout from "../src/WithLayout";
import RegisterView from "../src/views/RegisterView";
import Main from "../src/layouts/Main";

const Register = () => {
  return <WithLayout component={RegisterView} layout={Main} />;
};

export default Register;
