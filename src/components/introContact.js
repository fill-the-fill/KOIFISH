import React from "react";
import { useStyles } from "../utils/uiComponents";
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
// import KoiLogoNew from "../utils/images/NewLogo.png"

import MobileLogo from "../utils/images/koiLogoIntroMobile.png"
import LogoTest from "../utils/images/logoTest.png"



export default function Intro() {
  let classes = useStyles()
  const theme = useTheme()
  const sm = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <div>
      <img alt="koiLogo" src={sm ? MobileLogo : LogoTest} className={classes.koiLogo}></img>
    </div>
  );
}
