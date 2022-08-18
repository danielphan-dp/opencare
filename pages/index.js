import React from "react";
import WithLayout from "../src/WithLayout";
import IndexView from "../src/views/IndexView";
import Main from "../src/layouts/Main";

const Index = () => {
  return <WithLayout component={IndexView} layout={Main} />;
};

export default Index;
