import React from "react";
import { Grid } from "@material-ui/core";
import { useStyles } from "../utils/uiComponents";

import Intro from "../components/intro";
import History from "../components/history";
import Future from "../components/future";
import Statistics from "../components/statistics";
import Team from "../components/team";

import Header from "../components/header";
import Footer from "../components/footer";

import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";

export default function Landing() {
  let classes = useStyles();
  return (
    <Grid container className={classes.backgroundImage}>
      <Header />
      <Grid item xs={12}>
        <Intro />
      </Grid>
      <Grid item xs={12}>
        <History />
      </Grid>
      <Grid item xs={12}>
        <Future />
      </Grid>
      <Grid item xs={12}>
        <Statistics />
      </Grid>
      <Grid item xs={12}>
        <Team />
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
