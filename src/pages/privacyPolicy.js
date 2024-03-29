import React from "react";
import { Grid } from "@material-ui/core";
import { useStyles } from "../utils/uiComponents";

import Intro from "../components/introPrivacy";
import PrivacyPolicy from "../components/privacy"

import Header from "../components/privacyHeader"
import Footer from "../components/footer";

export default function Landing() {
  let classes = useStyles();
  return (
    <Grid container className={classes.backgroundImage}>
      <Header />
      <Grid item xs={12} className={classes.introHeightPolicy} data-aos="zoom-in">
        <Intro />
      </Grid>
      <PrivacyPolicy />
      <Footer />
    </Grid>
  );
}
