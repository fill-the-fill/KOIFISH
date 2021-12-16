import { Typography } from "@material-ui/core";
import React from "react";
import GoldenFish from "../utils/images/fish.png";
import { useStyles } from "../utils/uiComponents";
import data from "../config/index.json";

export default function History() {
  let classes = useStyles();
  return (
    <div >
      <Typography variant="h3"> {data.data.history.title}</Typography>
      <img
        alt="goldenFish"
        src={GoldenFish}
        className={classes.goldenTitleFish}
      ></img>
      <Typography variant="h2" className={classes.historyText}>
        {data.data.history.text}
      </Typography>
      <hr className={classes.hr}></hr>
    </div>
  );
}
