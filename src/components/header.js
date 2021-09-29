import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  useTheme,
  useMediaQuery,
  IconButton
} from "@material-ui/core/";
import { useStyles } from "../utils/uiComponents";
import MobileNavigation from "./mobileNavigation";
import MenuIcon from "@material-ui/icons/Menu";


import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import TelegramIcon from '@material-ui/icons/Telegram';
import BrightnessMediumIcon from '@material-ui/icons/BrightnessMedium';

const socials = [
  {
    linkedin: "https://www.linkedin.com/company/gold-koi-coin",
    facebook: "https://www.facebook.com/GoldKoiCoin/",
    twitter: "https://twitter.com/GoldenKoiCoin",
    medium: "https://medium.com/@GoldKoiCoin/about",
    github: "https://github.com/Gold-Koi-Coin",
    telegram: "https://t.me/joinchat/3JqIlJUKun44OTM0"
  },
];

export default function Header() {
  let classes = useStyles();
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down("md"));
  const [showMobile, setShowMobile] = useState(false);
  console.log()
  return (
    <AppBar className={classes.header} position="static">
      {md ? (
        <AppBar
          position="fixed"
          className={classes.backgroundDrawer}
        >
          <Toolbar>
            <IconButton color="inherit" aria-label="menu" style={{ fontSize: 20 }}>
              <MenuIcon onClick={() => setShowMobile(!showMobile)} />
            </IconButton>
          </Toolbar>
          <MobileNavigation showMobile={showMobile} setShowMobile={setShowMobile} />
        </AppBar>
      ) : (
        <Toolbar>
          <Grid container>
            <Grid item xs={12}>
              <Grid
              container
              spacing={4}
              direction="row"
              alignItems="center"
              justify="center"
              style={{marginTop: 10}}
            >
              <Grid item>
                <a className={classes.headerHref} href="#history">
                  <div className={classes.headerdiv}>History</div>
                </a>
              </Grid>
              <Grid item>
                <a className={classes.headerHref} href="#future">
                  <div className={classes.headerdiv}>Future</div>
                </a>
              </Grid>
              <Grid item>
                <a className={classes.headerHref} href="#statistics">
                  <div className={classes.headerdiv}>Statistics</div>
                </a>
              </Grid>
              <Grid item>
                <a className={classes.headerHref} href="#team">
                  <div className={classes.headerdiv}>Team</div>
                </a>
              </Grid>
              <Grid item>
                <a className={classes.headerHref} href="mailto:koifishcoin363@gmail.com">
                  <div className={classes.headerdiv}>Contact Us</div>
                </a>
              </Grid>
            </Grid></Grid>
            <Grid item xs={12}>
              <Grid container spacing={1}>
                <Grid item>
                  <a href={socials[0].linkedin}>
                    <LinkedInIcon className={classes.linkedinIcon} />
                  </a>
                </Grid>
                <Grid item>
                  <a href={socials[0].facebook}>
                    <FacebookIcon className={classes.linkedinIcon} />
                  </a>
                </Grid>
                <Grid item>
                  <a href={socials[0].twitter}>
                    <TwitterIcon className={classes.linkedinIcon} />
                  </a>
                </Grid>
                <Grid item>
                  <a href={socials[0].github}>
                    <GitHubIcon className={classes.linkedinIcon} />
                  </a>
                </Grid>
                <Grid item>
                  <a href={socials[0].telegram}>
                    <TelegramIcon className={classes.linkedinIcon} />
                  </a>
                </Grid>
                <Grid item>
                  <a href={socials[0].medium}>
                    <BrightnessMediumIcon className={classes.linkedinIcon} />
                  </a>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      )}
    </AppBar>
  );
}
