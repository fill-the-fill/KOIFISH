import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  useTheme,
  useMediaQuery,
  IconButton,
  Typography
} from "@material-ui/core/";
import { useStyles } from "../utils/uiComponents";
import MobileNavigation from "./mobileNavigation";
import MenuIcon from "@material-ui/icons/Menu";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import TelegramIcon from "@material-ui/icons/Telegram";
import BrightnessMediumIcon from "@material-ui/icons/BrightnessMedium";

import { AiFillMediumCircle } from "react-icons/ai";

import line1Img from "../utils/images/lines1.png"
import line2Img from "../utils/images/lines2.png"

import mobileLogo from "../utils/images/koiLogoMobile.png"

const socials = {
  linkedin: "https://www.linkedin.com/company/gold-koi-coin",
  facebook: "https://www.facebook.com/GoldKoiCoin/",
  twitter: "https://twitter.com/GoldenKoiCoin",
  medium: "https://medium.com/@GoldKoiCoin/about",
  github: "https://github.com/Gold-Koi-Coin",
  telegram: "https://t.me/joinchat/3JqIlJUKun44OTM0",
};

export default function Header() {
  let classes = useStyles();
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down("md"));
  const [showMobile, setShowMobile] = useState(false);
  return (
    <AppBar className={classes.header} position="static">
      {md ? (
        <div>
        <AppBar position="fixed" className={classes.backgroundDrawer}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="menu"
              style={{ fontSize: 20}}
              onClick={() => setShowMobile(!showMobile)}
            >
              <MenuIcon  />
            </IconButton>
          </Toolbar>
          <MobileNavigation
            showMobile={showMobile}
            setShowMobile={setShowMobile}
          />
          <img src={mobileLogo} alt="logo" className={classes.mobileLogo}/>
        </AppBar>
          <Grid item xs={2} className={classes.socialAbsoluteMobile}>
              <Grid
               container
               direction="column"
               justifyContent="flex-end"
               alignItems="flex-end"
                style={{ marginTop: 25 }}
              >
                  <a target="__blank" href={socials.linkedin}>
                    <LinkedInIcon className={classes.linkedinIcon} />
                  </a>
                  <a target="__blank" href={socials.facebook}>
                    <FacebookIcon className={classes.linkedinIcon} />
                  </a>
                  <a target="__blank" href={socials.twitter}>
                    <TwitterIcon className={classes.linkedinIcon} />
                  </a>
                  <a target="__blank" href={socials.github}>
                    <GitHubIcon className={classes.linkedinIcon} />
                  </a>
                  <a target="__blank" href={socials.telegram}>
                    <TelegramIcon className={classes.linkedinIcon} />
                  </a>
                  <a target="__blank" href={socials.medium}>
                    <AiFillMediumCircle style={{width: 23, height: 23}} className={classes.linkedinIcon}/>
                  </a>
              </Grid>
            </Grid>
            </div>
      ) : (
        <Toolbar>
          <Grid container>
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
              <Grid
                container
                spacing={4}
                direction="row"
                alignItems="center"
                justifyContent="center"
                style={{ marginTop: 10 }}
              >
                 <Grid item>
                  <a className={classes.headerHref} href="#ico">
                    <Typography variant="h2">ICO</Typography>
                  </a>
                </Grid>
                <Grid item>
                  <a className={classes.headerHref} href="#exchange">
                    <Typography variant="h2">Exchange</Typography>
                  </a>
                </Grid>
                <Grid item>
                  <a className={classes.headerHref} href="#token">
                    <Typography variant="h2">Token</Typography>
                  </a>
                </Grid>
                <Grid item>
                  <a className={classes.headerHref} href="#roadmap">
                    <Typography variant="h2">Road Map</Typography>
                  </a>
                </Grid>
                <Grid item>
                  <a className={classes.headerHref} href="#history">
                    <Typography variant="h2">History</Typography>
                  </a>
                </Grid>
                <Grid item>
                  <a className={classes.headerHref} href="#team">
                    <Typography variant="h2">Team</Typography>
                  </a>
                </Grid>
                <Grid item>
                  <a
                    className={classes.headerHref}
                    href="mailto:koifishcoin363@gmail.com"
                  >
                    <Typography variant="h2">Contact Us</Typography>
                  </a>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2} className={classes.socialAbsolute}>
              <Grid
               container
               direction="column"
               justifyContent="flex-end"
               alignItems="flex-end"
                style={{ marginTop: 25 }}
              >
                  <img src={line1Img} className={classes.socialLine} alt="line1"/>
                  <a target="__blank" href={socials.linkedin} >
                    <LinkedInIcon className={classes.linkedinIcon} />
                  </a>
                  <a target="__blank" href={socials.facebook}>
                    <FacebookIcon className={classes.linkedinIcon} />
                  </a>
                  <a target="__blank" href={socials.twitter}>
                    <TwitterIcon className={classes.linkedinIcon} />
                  </a>
                  <a target="__blank" href={socials.github}>
                    <GitHubIcon className={classes.linkedinIcon} />
                  </a>
                  <a target="__blank" href={socials.telegram}>
                    <TelegramIcon className={classes.linkedinIcon} />
                  </a>
                  <a target="__blank" href={socials.medium}>
                    <AiFillMediumCircle style={{width: 23, height: 23}} className={classes.linkedinIcon}/>
                  </a>
                  <img src={line2Img} className={classes.socialLine} alt="line2"/>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      )}
    </AppBar>
  );
}
