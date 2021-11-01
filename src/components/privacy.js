import React from "react";
import { useStyles } from "../utils/uiComponents";
import data from "../config/index.json";
import { Grid, Typography } from "@material-ui/core/";

export default function Privacy() {
  const classes = useStyles();
  return (
    <Grid container className={classes.policy}>
      <Grid item xs={12}>
        <Typography variant="subtitle1">
          We Koicoin, are committed to protecting any data that we collect
          concerning you. By using our services you agree to the use of the data
          that we collect in accordance with this Privacy Policy.
        </Typography>
        {data &&
          data.privacy.map((e, i) => {
            return (
              <div key={i}>
                <Typography variant="h6">{e.title}</Typography>
                <Typography variant="subtitle1">{e.text}</Typography>
                {e.text2 ? (
                  <Typography variant="subtitle1">{e.text2}</Typography>
                ) : null}
              </div>
            );
          })}
      </Grid>
    </Grid>
  );
}
