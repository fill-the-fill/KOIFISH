import React from "react";
import { div } from "@material-ui/core";
import GoldenFish from "../utils/images/golderFish.png";
import { useStyles } from "../utils/uiComponents";

export default function History() {
  let classes = useStyles();
  return (
    <div id="history" className={classes.history}>
      <div className={classes.title}>Golden Koi</div>
      <img
        alt="goldenFish"
        src={GoldenFish}
        className={classes.goldenTitleFish}
      ></img>
      <div className={classes.historyText}>
        Yamabuki or Golden Koi - a symbol of wealth, prosperity and good fortune.
      </div>
      <div className={classes.historyText}>
        A Chinese legend tells a story about courageous school of fish and their difficult journey against the current of a Yellow river. When they reached the waterfall, many of them decided to turn back and let the stream carry them downstream. However, some of them remained at the bottom attempting to leap up the cascading water.
      </div>
      <div className={classes.historyText}>
        For hundred years, local demons were closely watching the fish, mocking them by heightening the waterfall and laughing at their unsuccessful tries to get to the top, until, finally, a single koi jumped high enough to make it into the river above.
      </div>
      <div className={classes.historyText}>
        The Gods noticed the efforts of the courageous fish and rewarded it by turning it into a golden dragon - a symbol of power, determination and strength.
      </div>
      <hr className={classes.hr}></hr>
    </div>
  );
}
