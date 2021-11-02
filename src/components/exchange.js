import React from "react";
import { Grid, Button, Typography } from "@material-ui/core";
import { useStyles } from "../utils/uiComponents";
import data from "../config/index.json";
import exchangeImg from "../utils/images/exchange.png";
import exchangeImg2 from "../utils/images/exchange2.png";

export default function Exchange() {
  let classes = useStyles();
  return (
    <div>
      <Grid container id="exchange">
        <Grid item xs={12} sm={6}>
          <Typography variant="h1" className={classes.exchangeTitle}>
            {data.data.exchange.title}
          </Typography>
          <Typography variant="h2" className={classes.exchangeText}>
            {data.data.exchange.text}
          </Typography>
          <Button className={classes.whitePaperButton}>VIEW WHITEPAPER</Button>
        </Grid>
        <Grid item sm={12} md={6}>
          <div style={{ textAlign: "center" }}>
            <img src={exchangeImg} alt="exchange" style={{width: '40%'}}/>
            <img
              src={exchangeImg2}
              alt="exchange"
              style={{ marginBottom: 20, width: '40%' }}
            />
          </div>
        </Grid>
      </Grid>
      <hr className={classes.hr}></hr>
    </div>
  );
}
