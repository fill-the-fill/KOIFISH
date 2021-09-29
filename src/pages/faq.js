import React from "react";
import { Grid } from "@material-ui/core";
import { useStyles } from "../utils/uiComponents";

import Intro from "../components/introPrivacy";
// import PrivacyPolicy from "../components/privacy"

import PrivacyHeader from "../components/privacyHeader"
import Faq from "../components/faq"
import Footer from "../components/footer";

import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";

export default function Landing() {
  let classes = useStyles();
  return (
    <Grid container className={classes.backgroundImage}>
      <PrivacyHeader />
      <Grid item xs={12}>
        <Intro />
      </Grid>
      <Grid item xs={12}>
        <Faq />
      </Grid>
      <div className="backto-top">
        <ScrollToTop showUnder={10}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      <Footer />
    </Grid>
  );
}
