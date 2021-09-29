import React from "react";
import { Button } from "@material-ui/core";
import { useStyles } from "../utils/uiComponents";
// import KoiLogo from "../utils/images/KoiLogo.png";
import KoiLogoNew from "../utils/images/NewLogo.png"


export default function Intro() {
  let classes = useStyles()
  return (
    <div>
      <img alt="koiLogo" src={KoiLogoNew} className={classes.koiLogo}></img>
      <a href="/" alt="home" style={{textDecoration: 'none'}}>
      <Button className={classes.buyButton} style={{width: 100}}>HOME</Button>
      </a>
    </div>
  );
}
