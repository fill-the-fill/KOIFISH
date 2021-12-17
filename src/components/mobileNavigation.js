import React, { Fragment, useState } from "react";
import { makeStyles, Collapse, Grid, List, ListItem } from "@material-ui/core";
import clsx from "clsx";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import CloseIcon from '@material-ui/icons/Close'
import "./style.scss";

const menulists = [
  {
    id: 1,
    name: "ICO",
    link: "#ico",
  },
  {
    id: 2,
    name: "Exchange",
    link: "#exchange",
  },
  {
    id: 3,
    name: "Token",
    link: "#token",
  },
  {
    id: 4,
    name: "Roadmap",
    link: "#roadmap",
  },
  {
    id: 5,
    name: "History",
    link: "#history",
  },
  {
    id: 6,
    name: "Team",
    link: "#team",
  },
  {
    id: 8,
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
        <CloseIcon className={classes.closeIcon} onClick={(e) => setShowMobile(false)}/>
        <List>
          {menulists.map((item) => {
            return (
              <ListItem key={item.id}>
                {!item.submenu ? (
                  <a href={item.link} onClick={(e) => setShowMobile(false)}to={item.link}>{item.name}</a>
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
