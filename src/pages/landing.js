import React, {useState, useEffect} from "react";
import { Grid } from "@material-ui/core";
import { useStyles } from "../utils/uiComponents";

import Intro from "../components/intro";
import ICO from "../components/ico";
import Exchange from "../components/exchange";
import Allocation from "../components/tokenAllocation";
import History from "../components/history";
import RoadMap from "../components/roadMap";
// import Statistics from "../components/statistics";
import Team from "../components/team";

import Header from "../components/header";
import Footer from "../components/footer";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();


export default function Landing() {

  //data-aos="fade-up" Animation for later, messed up redirect on the same page

  let classes = useStyles();
  return (
    <Grid container className={classes.backgroundImage}>
      <Header />
      <Grid item xs={12} className={classes.introHeight} data-aos="zoom-in">
        <Intro />
      </Grid>
      <div className={classes.websitePadding} >
        <Grid item xs={12} >
          <ICO />
        </Grid>
        <Grid item xs={12} >
          <Exchange />
        </Grid>
        <Grid item xs={12} >
          <Allocation />
        </Grid>
        <Grid item xs={12} >
          <RoadMap />
        </Grid>
        <Grid item xs={12} >
          <History />
        </Grid>
        <Grid item xs={12} >
          <Team />
        </Grid>

      </div>
      <Footer />
    </Grid>
  );
}
