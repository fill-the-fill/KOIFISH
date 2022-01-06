import React from "react";
import { Grid, Button, Typography } from "@material-ui/core";
import { useStyles } from "../utils/uiComponents";
import data from "../config/index.json";
import exchangeImg from "../utils/images/exchange.jpeg";
import exchangeImg2 from "../utils/images/exchange2.jpeg";
import GoldenFish from "../utils/images/fish.png";

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
        <Grid item xs={12} md={6}>
          <div className={classes.exchangeImages}>
            <img src={exchangeImg} alt="exchange" style={{ width: "80%", border: '3px solid #C3B96C' }} />
            <img
              src={exchangeImg2}
              alt="exchange"
              style={{ marginBottom: 20, width: "80%", border: '3px solid #C3B96C' }}
            />
          </div>
        </Grid>
      </Grid>
      <hr className={classes.hr}></hr>
    </div>
  );
}
