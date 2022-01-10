import React from "react";
import { Grid, Button, Typography } from "@material-ui/core";
import { useStyles } from "../utils/uiComponents";
import data from "../config/index.json";
import exchangeImg from "../utils/images/exchange.jpeg";
import exchangeImg2 from "../utils/images/exchange2.jpeg";
import GoldenFish from "../utils/images/fish.png";
import exchange from "../utils/images/devices.png"

export default function Exchange() {
  let classes = useStyles();
  return (
    <div id="exchange">
      <Grid container id="exchange">
        <Grid item xs={12} md={6}>
          <Typography variant="h1" className={classes.exchangeTitle}>
            {data.data.exchange.title}
          </Typography>
          <img
            alt="goldenFish"
            src={GoldenFish}
            className={classes.goldenTitleFish}
          ></img>
          <Typography variant="h2" className={classes.exchangeText}>
            {data.data.exchange.text}
          </Typography>
          <br></br>
          <Typography variant="h2" className={classes.exchangeText}>
            {data.data.exchange.text2}
          </Typography>
          <br></br>
          <Typography variant="h2" className={classes.exchangeText}>
            {data.data.exchange.text3}
          </Typography>
          <Button className={classes.whitePaperButton}> <a href="whitepaper.pdf" target="_blank" style={{textDecoration: 'none', color: 'inherit'}}>VIEW WHITEPAPER</a></Button>
         
        </Grid>
        <Grid item xs={12} md={6} style={{alignSelf: 'center'}}>
          <img src={exchange} alt="exchange" style={{width: '100%'}} className={classes.exchangeImages}/>
        </Grid>
      </Grid>
      <hr className={classes.hr}></hr>
    </div>
  );
}
