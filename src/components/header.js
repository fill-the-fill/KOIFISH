import React, {useState} from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  useTheme,
  useMediaQuery,
  IconButton
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
        <AppBar
        position="fixed"
        className={classes.backgroundDrawer}
      >
        <Toolbar>
          <IconButton color="inherit" aria-label="menu" style={{fontSize: 20}}>
            <MenuIcon onClick={() => setShowMobile(!showMobile)} />
          </IconButton>
        </Toolbar>
        <MobileNavigation showMobile={showMobile} setShowMobile={setShowMobile} />
      </AppBar>
      ) : (
        <Toolbar>
          <Grid
            container
            spacing={4}
            direction="row"
            alignItems="center"
            justify="center"
          >
            <Grid item>
              <a className={classes.headerHref} href="#history">
                <Typography className={classes.headerTypography}>History</Typography>
              </a>
            </Grid>
            <Grid item>
              <a className={classes.headerHref} href="#future">
                <Typography className={classes.headerTypography}>Future</Typography>
              </a>
            </Grid>
            <Grid item>
              <a className={classes.headerHref} href="#statistics">
                <Typography className={classes.headerTypography}>Statistics</Typography>
              </a>
            </Grid>
            <Grid item>
              <a className={classes.headerHref} href="#team">
                <Typography className={classes.headerTypography}>Team</Typography>
              </a>
            </Grid>
            <Grid item>
              <a className={classes.headerHref} href="mailto:abc@example.com">
                <Typography className={classes.headerTypography}>Contact Us</Typography>
              </a>
            </Grid>
          </Grid>
        </Toolbar>
      )}
    </AppBar>
  );
}
