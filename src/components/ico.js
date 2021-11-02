import React from "react";
import { Grid, Button, Paper, Typography } from "@material-ui/core";
import data from "../config/index.json";
import { useStyles } from "../utils/uiComponents";

import IcoImg from "../utils/images/ico.png";

export default function ICO() {
  let classes = useStyles();
  return (
    <div>
      <Grid container id="ico">
        <Grid item xs={12} sm={6}>
          <img src={IcoImg} alt="ico" style={{ width: "50%" }} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h1" className={classes.icoTitle}>
            {data.data.ico.title}
          </Typography>
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
            <Grid item sm={6} md={2}>
              <Paper elevation={0} className={classes.stageSquare}>
                <div className={classes.stageText}>STAGE 1</div>
              </Paper>
            </Grid>

            <Grid item sm={6} md={2}>
              <Paper elevation={0} className={classes.stageSquare}>
                <div className={classes.stageText}>STAGE 2</div>
              </Paper>
            </Grid>
            <Grid item sm={6} md={2}>
              <Paper elevation={0} className={classes.stageSquare}>
                <div className={classes.stageText}>STAGE 3</div>
              </Paper>
            </Grid>
            <Grid item sm={6} md={2}>
              <Paper elevation={0} className={classes.stageSquare}>
                <div className={classes.stageText}>STAGE 4</div>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <hr className={classes.hr}></hr>
    </div>
  );
}
