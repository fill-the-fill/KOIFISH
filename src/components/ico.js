import React from "react";
import { Grid, Typography, Button, Paper } from "@material-ui/core";
import { useStyles } from "../utils/uiComponents";

import IcoImg from "../utils/images/ico.png";

export default function History() {
  let classes = useStyles();
  return (
    <div>
      <Grid container id="allocation">
        <Grid item xs={12} sm={6}>
          <img src={IcoImg} alt="ico" style={{ width: "50%" }} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography className={classes.icoTitle}>ICO</Typography>
          <Typography className={classes.allocationText}>
            Yamabuki or Golden Koi - a symbol of wealth, prosperity, and good
            fortune. A Chinese legend tells a story about a courageous school of
            fish and their difficult journey against the current of a Yellow
            river. When they reached the waterfall, many of them decided to turn
            back and let the stream carry them downstream. However, some of them
            remained at the bottom attempting to leap up the cascading water.
            For hundred years. Yamabuki or Golden Koi - a symbol of wealth,
            prosperity, and good fortune. A Chinese legend tells a story about a
            courageous school of fish and their difficult journey against the
            current of a Yellow river. When they reached the waterfall,
          </Typography>
          <Button className={classes.buyButton}>BECOME FAMILY</Button>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid xs={2}>
              <Paper elevation={0} className={classes.stageSquare}>
                <Typography className={classes.stageText}>STAGE 1</Typography>
              </Paper>
            </Grid>

            <Grid xs={2}>
              <Paper elevation={0} className={classes.stageSquare}>
                <Typography className={classes.stageText}>STAGE 2</Typography>
              </Paper>
            </Grid>
            <Grid xs={2}>
              <Paper elevation={0} className={classes.stageSquare}>
                <Typography className={classes.stageText}>STAGE 3</Typography>
              </Paper>
            </Grid>
            <Grid xs={2}>
              <Paper elevation={0} className={classes.stageSquare}>
                <Typography className={classes.stageText}>STAGE 4</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <hr className={classes.hr}></hr>
    </div>
  );
}
