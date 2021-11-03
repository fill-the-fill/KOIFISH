import React from "react";
import { Button } from "@material-ui/core";
import { useStyles } from "../utils/uiComponents";
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
// import KoiLogoNew from "../utils/images/NewLogo.png"

import MobileLogo from "../utils/images/koiLogoIntroMobile.png"
import LogoTest from "../utils/images/logoTest.png"



export default function Intro() {
  let classes = useStyles()
  const theme = useTheme()
  const md = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <div>
      <img alt="koiLogo" src={md ? MobileLogo : LogoTest} className={classes.koiLogo}></img>
      <Button className={classes.buyButton}>BUY YOUR LUCK</Button>
    </div>
  );
}
