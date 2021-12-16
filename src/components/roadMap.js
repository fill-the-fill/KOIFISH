import React from "react";
import { Grid, div, Typography } from "@material-ui/core";
import GoldenFish from "../utils/images/fish.png";
import { useStyles } from "../utils/uiComponents";
import data from "../config/index.json";
import rock1 from "../utils/images/rock1.png";
import rock2 from "../utils/images/rock2.png";
import rock3 from "../utils/images/rock3.png";
import rock4 from "../utils/images/rock4.png";
import line from "../utils/images/line.png";

export default function Future() {
  let classes = useStyles();
  return (
    <div >
      <Typography variant="h3">{data.data.roadmap[0].title}</Typography>
      <img
        alt="goldenFish"
        src={GoldenFish}
        className={classes.goldenTitleFish}
      ></img>
      <Grid container direction="row" alignItems="center" justifyContent="center">
        <Grid item className={classes.rockItem}>
          <Grid container>
            <Grid item xs={3} className={classes.futureRock}>
              <img alt="rock" className={classes.rock} src={rock1} />
            </Grid>
            <Grid item xs={1} className={classes.line}>
              <img alt="line" className={classes.line} src={line} />
            </Grid>
            <Grid item xs={8}>
              <Typography variant="h4">{data.data.roadmap[1].q}</Typography>
              <Typography variant="h2">{data.data.roadmap[1].text}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.rockItem}>
          <Grid container>
            <Grid item xs={8}>
              <Typography variant="h4" className={classes.futureDateRight}>
                {data.data.roadmap[2].q}
              </Typography>
              <Typography
                variant="h2"
                className={classes.futureDescriptionRight}
              >
                {data.data.roadmap[2].text}
              </Typography>
            </Grid>
            <Grid item xs={1} className={classes.line}>
              <img alt="line" className={classes.line} src={line} />
            </Grid>
            <Grid item xs={3} className={classes.futureRock}>
              <img alt="rock" className={classes.rock} src={rock2} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.rockItem}>
          <Grid container>
            <Grid item xs={3} className={classes.futureRock}>
              <img alt="rock" className={classes.rock} src={rock3} />
            </Grid>
            <Grid item xs={1} className={classes.line}>
              <img alt="line" className={classes.line} src={line} />
            </Grid>
            <Grid item xs={8}>
              <Typography variant="h4">{data.data.roadmap[3].q}</Typography>
              <Typography variant="h2">{data.data.roadmap[3].text}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.rockItem}>
          <Grid container>
            <Grid item xs={8}>
              <Typography variant="h4" className={classes.futureDateRight}>
                {data.data.roadmap[4].q}
              </Typography>
              <Typography
                variant="h2"
                className={classes.futureDescriptionRight}
              >
                {data.data.roadmap[4].text}
              </Typography>
            </Grid>
            <Grid item xs={1} className={classes.line}>
              <img alt="line" className={classes.line} src={line} />
            </Grid>
            <Grid item xs={3} className={classes.futureRock}>
              <img alt="rock" className={classes.rock} src={rock4} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <hr className={classes.hr} id="history"></hr>
    </div>
  );
}
