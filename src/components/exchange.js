import React from "react";
import { Grid, Button, Typography } from "@material-ui/core";
import { useStyles } from "../utils/uiComponents";

import exchangeImg from "../utils/images/exchange.png";
import exchangeImg2 from "../utils/images/exchange2.png";

export default function History() {
  let classes = useStyles();
  return (
    <div>
      <Grid container id="exchange">
        <Grid item xs={12} sm={6}>
          <Typography variant="h1" className={classes.exchangeTitle}>
            GOLD KOI EXCHANGE
          </Typography>
          <Typography variant="h2"  className={classes.exchangeText}>
            Yamabuki or Golden Koi - a symbol of wealth, prosperity, and good
            fortune. A Chinese legend tells a story about a courageous school of
            fish and their difficult journey against the current of a Yellow
            river. When they reached the waterfall, many of them decided to turn
            back and let the stream carry them downstream. However, some of them
            remained at the bottom attempting to leap up the cascading water.
            For hundred years, local demons were closely watching the fish,
            mocking them by heightening the waterfall and laughing at their
            unsuccessful tries to get to the top, until, finally, a single koi
            jumped high enough to make it into the river above. The Gods noticed
            the efforts of the courageous fish and rewarded it by turning it
            into a golden dragon - a symbol of power, determination, and
            strength.
          </Typography>
          <Button className={classes.whitePaperButton}>VIEW WHITEPAPER</Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div style={{ textAlign: "center" }}>
            <img src={exchangeImg} alt="exchange" />
            <img
              src={exchangeImg2}
              alt="exchange"
              style={{ marginBottom: 20 }}
            />
          </div>
        </Grid>
      </Grid>
      <hr className={classes.hr}></hr>
    </div>
  );
}
