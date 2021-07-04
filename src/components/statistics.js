import React from "react";
import { Typography } from "@material-ui/core";
import GoldenFish from "../utils/images/golderFish.png";
import StatisticsPng from "../utils/images/statistics.png";
import { useStyles } from "../utils/uiComponents";

export default function Statistics() {
  let classes = useStyles();

  return (
    <div id="statistics">
      <Typography className={classes.title}>STATISTICS</Typography>
      <img src={GoldenFish} className={classes.goldenTitleFish}></img>
      <img src={StatisticsPng} className={classes.statistics}></img>
      
    </div>
  );
}
