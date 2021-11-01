import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { useStyles } from "../utils/uiComponents";
import data from "../config/index.json";
import allocationImg from "../utils/images/allocation.png";

export default function Allocation() {
  let classes = useStyles();
  return (
    <div>
      <Grid container id="exchange" className={classes.allocation}>
        <Grid item xs={12} sm={6}>
          <div style={{ textAlign: "center" }}>
            <img
              src={allocationImg}
              style={{ width: "110%" }}
              alt="allocation"
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h1" className={classes.allocationTitle}>
            {data.data.allocation.title}
          </Typography>
          <Typography variant="h2" className={classes.allocationText}>
            {data.data.allocation.text}
          </Typography>
        </Grid>
      </Grid>

      <hr className={classes.hr}></hr>
    </div>
  );
}
