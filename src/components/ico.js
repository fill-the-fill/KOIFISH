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
                <Typography variant="h1" className={classes.stageText}>STAGE 1</Typography>
                <Typography variant="h2" className={classes.stageText2}>Circulation Supply</Typography>
                <Typography variant="h2" className={classes.stageText3}>10 000 000</Typography>
                <Typography variant="h2" className={classes.stageText2}>Token Price</Typography>
                <Typography variant="h2" className={classes.stageText3}>$ 0.0066</Typography>
                <Typography variant="h2" className={classes.stageText2}>Duration</Typography>
                <Typography variant="h2" className={classes.stageText3}>2 weeks</Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={4}>
            <Paper elevation={0} className={classes.stageSquare}>
                <Typography variant="h1" className={classes.stageText}>STAGE 2</Typography>
                <Typography variant="h2" className={classes.stageText2}>Circulation Supply</Typography>
                <Typography variant="h2" className={classes.stageText3}>33 000 000</Typography>
                <Typography variant="h2" className={classes.stageText2}>Token Price</Typography>
                <Typography variant="h2" className={classes.stageText3}>$ 0.022</Typography>
                <Typography variant="h2" className={classes.stageText2}>Duration</Typography>
                <Typography variant="h2" className={classes.stageText3}>1 month</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
            <Paper elevation={0} className={classes.stageSquare}>
                <Typography variant="h1" className={classes.stageText}>STAGE 3</Typography>
                <Typography variant="h2" className={classes.stageText2}>Circulation Supply</Typography>
                <Typography variant="h2" className={classes.stageText3}>33 000 000</Typography>
                <Typography variant="h2" className={classes.stageText2}>Token Price</Typography>
                <Typography variant="h2" className={classes.stageText3}>$ 0.033</Typography>
                <Typography variant="h2" className={classes.stageText2}>Duration</Typography>
                <Typography variant="h2" className={classes.stageText3}>1,5 months</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <hr className={classes.hr}></hr>
    </div>
  );
}
