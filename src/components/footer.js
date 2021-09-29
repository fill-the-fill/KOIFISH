import React from "react";
import { useStyles } from "../utils/uiComponents";

export default function Footer() {
  let classes = useStyles();

  return (
    <div className={classes.footer}>
      © GoldKoiCoin, 2021 All rights reserved | <a href='/privacy-policy' className={classes.privacyRedirect}>Privacy Policy</a>
    </div>
  );
}
