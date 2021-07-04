import React from "react";
import { Grid, Typography } from "@material-ui/core";
import GoldenFish from "../utils/images/golderFish.png";
import { useStyles } from "../utils/uiComponents";

import rock1 from "../utils/images/rock1.png";
import rock2 from "../utils/images/rock2.png";
import rock3 from "../utils/images/rock3.png";
import rock4 from "../utils/images/rock4.png";
import line from "../utils/images/line.png";

export default function Future() {
  let classes = useStyles();

  return (
    <div id="future">
      <Typography className={classes.title}>FUTURE</Typography>
      <img src={GoldenFish} className={classes.goldenTitleFish}></img>
      <Grid container>
        <Grid item className={classes.rockItem}>
          <Grid container>
            <Grid item xs={3} className={classes.futureRock}>
              <img className={classes.rock} src={rock1} />
            </Grid>
            <Grid item xs={1} className={classes.line}>
              <img className={classes.line} src={line} />
            </Grid>
            <Grid item xs={8}>
              <Typography className={classes.futureDate}>Q1 2021</Typography>
              <Typography className={classes.futureName}>
                Protocol Initialized
              </Typography>
              <Typography className={classes.futureDescription}>
                We have successfully onboarded and confirmed a DogeCoin trading
                pair with Bibipom. We have also successfully begun integration
                process with WhiteBit and began legal paperwork with Bitmart.
                Our team size has doubled and our marketing campaign has begun.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.rockItem}>
          <Grid container>
            <Grid item xs={8}>
              <Typography className={classes.futureDate}>Q1 2021</Typography>
              <Typography className={classes.futureName}>
                Protocol Initialized
              </Typography>
              <Typography className={classes.futureDescription}>
                We have successfully onboarded and confirmed a DogeCoin trading
                pair with Bibipom. We have also successfully begun integration
                process with WhiteBit and began legal paperwork with Bitmart.
                Our team size has doubled and our marketing campaign has begun.
              </Typography>
            </Grid>
            <Grid item xs={1} className={classes.line}>
              <img className={classes.line} src={line} />
              <Grid item xs={3} className={classes.futureRock}>
                <img className={classes.rock} src={rock2} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.rockItem}>
          <Grid container>
            <Grid item xs={3} className={classes.futureRock}>
              <img className={classes.rock} src={rock3} />
            </Grid>
            <Grid item xs={1} className={classes.line}>
              <img className={classes.line} src={line} />
            </Grid>
            <Grid item xs={8}>
              <Typography className={classes.futureDate}>Q1 2021</Typography>
              <Typography className={classes.futureName}>
                Protocol Initialized
              </Typography>
              <Typography className={classes.futureDescription}>
                We have successfully onboarded and confirmed a DogeCoin trading
                pair with Bibipom. We have also successfully begun integration
                process with WhiteBit and began legal paperwork with Bitmart.
                Our team size has doubled and our marketing campaign has begun.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.rockItem}>
          <Grid container>
            <Grid item xs={8}>
              <Typography className={classes.futureDate}>Q1 2021</Typography>
              <Typography className={classes.futureName}>
                Protocol Initialized
              </Typography>
              <Typography className={classes.futureDescription}>
                We have successfully onboarded and confirmed a DogeCoin trading
                pair with Bibipom. We have also successfully begun integration
                process with WhiteBit and began legal paperwork with Bitmart.
                Our team size has doubled and our marketing campaign has begun.
              </Typography>
            </Grid>
            <Grid item xs={1} className={classes.line}>
              <img className={classes.line} src={line} />
              <Grid item xs={3} className={classes.futureRock}>
                <img className={classes.rock} src={rock4} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
