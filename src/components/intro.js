import React from "react";
import { Button } from "@material-ui/core";
import { useStyles } from "../utils/uiComponents";
import LazyLoad from 'react-lazyload';
import KoiLogoNew from "../utils/images/NewLogo.png"

import LogoTest from "../utils/images/logoTest.png"

export default function Intro() {
  let classes = useStyles()
  return (
    <div>
      <LazyLoad>
      <img alt="koiLogo" src={LogoTest} className={classes.koiLogo}></img>
      </LazyLoad>
      <Button className={classes.buyButton}>BUY YOUR LUCK</Button>
    </div>
  );
}
