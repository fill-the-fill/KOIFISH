import React from "react";
import { Grid, Button, Paper, Typography } from "@material-ui/core";
import data from "../config/index.json";
import { useStyles } from "../utils/uiComponents";
import GoldenFish from "../utils/images/fish.png";
import IcoImg from "../utils/images/ico.png";

export default function ICO() {
  let classes = useStyles();
  return (
    <div>
      <Grid container id="ico">
        <Grid item xs={12} sm={6}  className={classes.icoImage}>
          <img src={IcoImg} alt="ico" className={classes.icoImage}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h1" className={classes.icoTitle}>
            {data.data.ico.title}
          </Typography>
          <img
        alt="goldenFish"
        src={GoldenFish}
        className={classes.goldenTitleFish}
      ></img>
          <Typography variant="h2" className={classes.allocationText}>
            {data.data.ico.text}
          </Typography>
          <Button className={classes.buyButton}>JOIN ICO NOW</Button>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item xs={12} sm={4}>
              <Paper elevation={0} className={classes.stageSquare}>
                <div className={classes.stageText}>STAGE 1</div>
                <div className={classes.stageText2}>Circulation Supply</div>
                <div className={classes.stageText3}>10 000 000</div>
                <div className={classes.stageText2}>Token Price</div>
                <div className={classes.stageText3}>$ 0.0066</div>
                <div className={classes.stageText2}>Duration</div>
                <div className={classes.stageText3}>2 weeks</div>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={4}>
            <Paper elevation={0} className={classes.stageSquare}>
                <div className={classes.stageText}>STAGE 2</div>
                <div className={classes.stageText2}>Circulation Supply</div>
                <div className={classes.stageText3}>33 000 000</div>
                <div className={classes.stageText2}>Token Price</div>
                <div className={classes.stageText3}>$ 0.022</div>
                <div className={classes.stageText2}>Duration</div>
                <div className={classes.stageText3}>1 month</div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
            <Paper elevation={0} className={classes.stageSquare}>
                <div className={classes.stageText}>STAGE 3</div>
                <div className={classes.stageText2}>Circulation Supply</div>
                <div className={classes.stageText3}>33 000 000</div>
                <div className={classes.stageText2}>Token Price</div>
                <div className={classes.stageText3}>$ 0.033</div>
                <div className={classes.stageText2}>Duration</div>
                <div className={classes.stageText3}>1,5 months</div>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <hr className={classes.hr}></hr>
    </div>
  );
}
