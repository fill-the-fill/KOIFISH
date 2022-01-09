import React from "react";
import { Grid } from "@material-ui/core";
import { useStyles } from "../utils/uiComponents";

import Intro from "../components/introContact";
import Contact from "../components/contact";
// import PrivacyPolicy from "../components/privacy"

import PrivacyHeader from "../components/privacyHeader"
import Footer from "../components/footer";

export default function Landing() {
  let classes = useStyles();
  return (
    <Grid container className={classes.backgroundImage}>
      <PrivacyHeader />
      <Grid item xs={12} data-aos="zoom-in">
        <Intro />
      </Grid>
      <Grid item xs={12}>
        <Contact/>
      </Grid>
      <Footer />
    </Grid>
  );
}
