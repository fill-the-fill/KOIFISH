import React from "react";
import { Button } from "@material-ui/core";
import { useStyles } from "../utils/uiComponents";
import KoiLogo from "../utils/images/KoiLogo.png";

export default function Intro() {
  let classes = useStyles()
  return (
    <div>
      <img alt="koiLogo" src={KoiLogo} className={classes.koiLogo}></img>
      <Button className={classes.buyButton}>BUY YOUR LUCK</Button>
    </div>
  );
}
