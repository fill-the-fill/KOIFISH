import React, { Fragment, useState } from "react";
import { makeStyles, Collapse, Grid, List, ListItem } from "@material-ui/core";
import clsx from "clsx";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import "./style.scss";

const menulists = [
  {
    id: 1,
    name: "History",
    link: "##history",
  },
  {
    id: 2,
    name: "Future",
    link: "##future",
  },
  {
    id: 3,
    name: "Statistics",
    link: "##statistics",
  },  
  {
    id: 5,
    name: "Team",
    link: "##team",
  },
  {
    id: 6,
    name: "Contact Us",
    link: "mailto:abc@example.com",
  },
];
  
const useStyles = makeStyles((theme) => ({
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  text: {
    textTransform: "uppercase",
    fontize: "1.5rem",
    color: "#f1783f",
    lineHeight: "2.57",
    fontWeight: "300",
  },
}));

const MobileMenu = ({ showMobile, setShowMobile }) => {
  const classes = useStyles();
  const [menuId, setActiveMid] = useState();

  function handleExpandClick(id) {
    setActiveMid(id);
    if (menuId === id) {
      setActiveMid();
    }
  }
  return (
    <Fragment>
      <Grid className={`mobileMenu ${showMobile ? "" : "hidden"}`}>
      {/* <img
          src={Logo}
          alt="logo"
        ></img> */}
        <List>
          {menulists.map((item) => {
            return (
              <ListItem key={item.id}>
                {!item.submenu ? (
                  <Link onClick={(e) => setShowMobile(false)}to={item.link}>{item.name}</Link>
                ) : (
                  <Grid
                    className="mItem"
                    onClick={() => handleExpandClick(item.id)}
                  >
                    <span>{item.name}</span>
                    <Grid
                      className={clsx(classes.expand, {
                        [classes.expandOpen]: menuId === item.id,
                      })}
                    >
                      <KeyboardArrowDownIcon style={{color: ''}}/>
                    </Grid>
                  </Grid>
                )}
                {item.submenu
                  ? item.submenu.map((subitem) => {
                      return (
                        <Collapse
                          key={subitem.id}
                          className="subMenu"
                          in={menuId === item.id}
                          timeout="auto"
                          unmountOnExit
                        >
                          <Link to={subitem.link}>{subitem.name}</Link>
                        </Collapse>
                      );
                    })
                  : ""}
              </ListItem>
            );
          })}
        </List>
        <Grid
          onClick={() => setShowMobile(!showMobile)}
          className={`menuHoverlay ${showMobile ? "show" : ""}`}
        ></Grid>
      </Grid>
    </Fragment>
  );
};

export default MobileMenu;
