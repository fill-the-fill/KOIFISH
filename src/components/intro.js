import React from "react";
import { Button } from "@material-ui/core";
import { useStyles } from "../utils/uiComponents";
import LazyLoad from 'react-lazyload';
import KoiLogoNew from "../utils/images/NewLogo.png"

export default function Intro() {
  let classes = useStyles()
  return (
    <div>
      <LazyLoad>
      <img alt="koiLogo" src={KoiLogoNew} className={classes.koiLogo}></img>
      </LazyLoad>
      <Button className={classes.buyButton}>BUY YOUR LUCK</Button>
    </div>
  );
}
