import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Divider } from "@material-ui/core";
import { Application } from "./components";
import { SectionAlternate } from "../../components/organisms";
import UserRoute from "../../../routes/UserRoute";

const useStyles = makeStyles((theme) => ({
  pagePaddingTop: {
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(5),
    },
  },
}));

const PredictView = () => {
  const classes = useStyles();
  const fileUploadAndResize = () => {
    console.log("h");
  };
  return (
    <UserRoute>
      <div style={{ userSelect: "none" }}>
        <SectionAlternate innerNarrowed>
          <Application />
        </SectionAlternate>
        <Divider />
      </div>
    </UserRoute>
  );
};

export default PredictView;
