import React from "react";
import { Grid } from "@material-ui/core";
import { useStyles } from "../utils/uiComponents";

import allocationImg from "../utils/images/allocation.png";

export default function History() {
  let classes = useStyles();
  return (
    <div>
      <Grid container id="exchange" className={classes.allocation}>
        <Grid item xs={12} sm={6}>
          <div style={{ textAlign: "center" }}>
            <img src={allocationImg} style={{width: '110%'}} alt="allocation" />
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={classes.allocationTitle}>
            TOKEN ALLOCATION
          </div>
          <div className={classes.allocationText}>
            Yamabuki or Golden Koi - a symbol of wealth, prosperity, and good
            fortune. A Chinese legend tells a story about a courageous school of
            fish and their difficult journey against the current of a Yellow
            river. When they reached the waterfall, many of them decided to turn
            back and let the stream carry them downstream. However, some of them
            remained at the bottom attempting to leap up the cascading water.
            For hundred years.
          </div>
        </Grid>
      </Grid>

      <hr className={classes.hr}></hr>
    </div>
  );
}
