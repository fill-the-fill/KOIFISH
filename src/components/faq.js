import React from "react";
import { useStyles } from "../utils/uiComponents";
import data from "../config/index.json";
import { Grid, Typography } from "@material-ui/core/";

export default function Faq() {
  const classes = useStyles();
  return (
    <Grid container className={classes.policy}>
      <Grid item xs={12}>
        {data &&
          data.faq.map((e, i) => {
            return (
              <div key={i}>
                <Typography variant="h6">{e.title}</Typography>
                <Typography variant="subtitle1">{e.text}</Typography>
                {e.text2 ? (
                  <Typography variant="subtitle1">{e.text2}</Typography>
                ) : null}
                {e.text3 ? (
                  <Typography variant="subtitle1">{e.text3}</Typography>
                ) : null}
                {e.text4 ? (
                  <Typography variant="subtitle1">{e.text4}</Typography>
                ) : null}
              </div>
            );
          })}
      </Grid>
    </Grid>
  );
}
