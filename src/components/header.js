import React from "react";
import { AppBar, Toolbar, Typography, Grid } from "@material-ui/core/";
import { useStyles } from "../utils/uiComponents";

export default function Header() {
  let classes = useStyles();
  return (
    <AppBar className={classes.header} position="static">
      <Toolbar>
        <Grid
          container
          spacing={4}
          direction="row"
          alignItems="center"
          justify="center"
        >
          <Grid item>
            <a className={classes.headerHref} href="#history">
              <Typography>History</Typography>
            </a>
          </Grid>
          <Grid item>
            <a className={classes.headerHref} href="#future">
              <Typography>Future</Typography>
            </a>
          </Grid>
          <Grid item>
            <a className={classes.headerHref} href="#statistics">
              <Typography>Statistics</Typography>
            </a>
          </Grid>
          <Grid item>
            <a className={classes.headerHref} href="#team">
              <Typography>Team</Typography>
            </a>
          </Grid>
          <Grid item>
            <a className={classes.headerHref} href="mailto:abc@example.com">
              <Typography>Contact Us</Typography>
            </a>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
