import React from "react";
import { Typography } from "@material-ui/core";
import GoldenFish from "../utils/images/golderFish.png";
import { useStyles } from "../utils/uiComponents";

export default function History() {
  let classes = useStyles();
  return (
    <div id="history">
      <Typography className={classes.title}>HISTORY</Typography>
      <img src={GoldenFish} className={classes.goldenTitleFish}></img>
      <Typography className={classes.historyText}>
        The SafeMoon Protocol is a community driven, fair launched DeFi Token.
        Three simple functions occur during each trade: Reflection, LP
        Acquisition, & Burn.The SafeMoon Protocol is a community driven, fair
        launched DeFi Token. Three simple functions occur during each trade:
        Reflection, LP Acquisition, & Burn.The SafeMoon Protocol is a community
        driven, fair launched DeFi Token. Three simple functions occur during
        each trade: Reflection, LP Acquisition, & Burn.The SafeMoon Protocol is
        a community driven, fair launched DeFi Token. Three simple functions
        occur during each trade: Reflection, LP Acquisition, & Burn.The SafeMoon
        Protocol is a community driven, fair launched DeFi Token. Three simple
        functions occur during each trade: Reflection, LP Acquisition, &
        Burn.The SafeMoon Protocol is a community driven, fair launched DeFi
        Token. Three simple functions occur during each trade: Reflection, LP
        Acquisition, & Burn.The SafeMoon Protocol is a community driven, fair
        launched DeFi Token. Three simple functions occur during each trade:
        Reflection, LP Acquisition, & Burn.The SafeMoon Protocol is a community
        driven, fair launched DeFi Token. Three simple functions occur during
        each trade: Reflection, LP Acquisition, & Burn.The SafeMoon Protocol is
        a community driven, fair launched DeFi Token. Three simple functions
        occur during each trade: Reflection, LP Acquisition, & Burn.
      </Typography>
    </div>
  );
}
