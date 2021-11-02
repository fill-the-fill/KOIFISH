import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  div,
  Grid,
  useTheme,
  useMediaQuery,
  IconButton,
} from "@material-ui/core/";
import { useStyles } from "../utils/uiComponents";
import MobileNavigation from "./mobileNavigation";
import MenuIcon from "@material-ui/icons/Menu";

export default function Header() {
  let classes = useStyles();
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down("md"));
  const [showMobile, setShowMobile] = useState(false);

  return (
    <AppBar className={classes.header} position="static">
      {md ? (
        <AppBar position="fixed" className={classes.backgroundDrawer}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="menu"
              style={{ fontSize: 20 }}
            >
              <MenuIcon onClick={() => setShowMobile(!showMobile)} />
            </IconButton>
          </Toolbar>
          <MobileNavigation
            showMobile={showMobile}
            setShowMobile={setShowMobile}
          />
        </AppBar>
      ) : (
        <Toolbar>
          <Grid
            container
            spacing={4}
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item>
              <a className={classes.headerHref} href="/">
                <div className={classes.headerdiv}>History</div>
              </a>
            </Grid>
            <Grid item>
              <a className={classes.headerHref} href="/">
                <div className={classes.headerdiv}>Future</div>
              </a>
            </Grid>
            <Grid item>
              <a className={classes.headerHref} href="/">
                <div className={classes.headerdiv}>Statistics</div>
              </a>
            </Grid>
            <Grid item>
              <a className={classes.headerHref} href="/">
                <div className={classes.headerdiv}>Team</div>
              </a>
            </Grid>
            <Grid item>
              <a className={classes.headerHref} href="/">
                <div className={classes.headerdiv}>Contact Us</div>
              </a>
            </Grid>
          </Grid>
        </Toolbar>
      )}
    </AppBar>
  );
}
