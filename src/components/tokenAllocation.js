import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { useStyles } from "../utils/uiComponents";
import data from "../config/index.json";
import allocationImg from "../utils/images/allocation.png";
import GoldenFish from "../utils/images/fish.png";

export default function Allocation() {
  let classes = useStyles();
  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        id="token"
        className={classes.allocation}
      >
        <Grid item xs={12} sm={6}>
          <div style={{ textAlign: "center" }}>
            <img
              src={allocationImg}
              className={classes.allocationImage}
              alt="allocation"
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h1" className={classes.allocationTitle}>
            {data.data.allocation.title}
          </Typography>
          <img
            alt="goldenFish"
            src={GoldenFish}
            className={classes.goldenTitleFish}
          ></img>
          <Typography variant="h2" className={classes.allocationText}>
            {data.data.allocation.text}
          </Typography>
        </Grid>
      </Grid>

      <hr className={classes.hr}></hr>
    </div>
  );
}
