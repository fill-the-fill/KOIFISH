import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { useStyles } from "../utils/uiComponents";
import KoiLogo from "../utils/images/KoiLogo.png";

import History from "../components/history";
import Future from "../components/future";
import Statistics from "../components/statistics";
import Team from "../components/team";

import Footer from "../components/footer"

export default function Landing() {
  let classes = useStyles();
  return (
    <Grid container className={classes.backgroundImage}>
      <Grid item xs={12}>
        <img src={KoiLogo} className={classes.koiLogo}></img>
        <Button className={classes.buyButton}>BUY YOUR LUCK</Button>
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
      <Footer/>
    </Grid>
  );
}
