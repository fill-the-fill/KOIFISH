import React from "react";
import { Grid, div } from "@material-ui/core";
import GoldenFish from "../utils/images/golderFish.png";
import { useStyles } from "../utils/uiComponents";

import LinkedInIcon from "@material-ui/icons/LinkedIn";

import JonathanImg from "../utils/images/jonathan.JPG"
import MazenaImg from "../utils/images/mazena.jpg"
import FillipsImg from "../utils/images/developer.png"

const team = [
  {
    img: JonathanImg,
    name: "Jonathan Mendel Gorshkov",
    position:
      "CEO",
    linkedin: "https://www.linkedin.com/in/jonathan-mendel-gorshkov-797250185/",
  },
  {
    img: MazenaImg,
    name: "Mazena Leskovica",
    position:
      "Marketing",
    linkedin: "https://www.linkedin.com/in/mazena-leskovica/",
  },
  {
    img: FillipsImg,
    name: "Fillips Ickevics",
    position:
      "Developer",
    linkedin: "https://www.linkedin.com/in/fillips-ickevics-1560041b3/",
  },
];

export default function Team() {
  let classes = useStyles();

  return (
    <div id="team">
      <div className={classes.title}>OUR TEAM</div>
      <img alt="goldenFish" src={GoldenFish} className={classes.goldenTitleFish}></img>
      <Grid container>
        {team.map((member, key) => {
          return (
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              key={key}
              className={classes.member}
            >
              <img
                alt="teamMember "
                src={member.img}
                className={classes.teamImage}
              ></img>
              <div className={classes.teamName}>
                {member.name}
              </div>
              <div className={classes.teamAbout}>
                {member.position}
              </div>
              <Grid container>
                <Grid item className={classes.facebookGrid}>
                </Grid>
                <Grid item className={classes.linkedinGrid}>
                  <a href={member.linkedin}>
                    <LinkedInIcon className={classes.linkedinIcon} />
                  </a>
                </Grid>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
      <hr className={classes.hr}></hr>
    </div>
  );
}
