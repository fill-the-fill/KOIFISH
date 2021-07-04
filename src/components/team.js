import React from "react";
import { Grid, Typography } from "@material-ui/core";
import GoldenFish from "../utils/images/golderFish.png";
import { useStyles } from "../utils/uiComponents";

import Person from "../utils/images/person.jpg";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const team = [
  {
    img: Person,
    name: "Bob Ross",
    about:
      "Lorem ipsum dollar sit amet lorem ipsum dollar sit ametLorem ipsum dollar sit amet",
    facebook: "test",
    linkedin: "test",
  },
  {
    img: Person,
    name: "Bob Ross",
    about:
      "Lorem ipsum dollar sit amet lorem ipsum dollar sit ametLorem ipsum dollar sit amet",
    facebook: "test",
    linkedin: "test",
  },
  {
    img: Person,
    name: "Bob Ross",
    about:
      "Lorem ipsum dollar sit amet lorem ipsum dollar sit ametLorem ipsum dollar sit amet",
    facebook: "test",
    linkedin: "test",
  },
];

export default function Team() {
  let classes = useStyles();

  return (
    <div>
      <Typography className={classes.title}>OUR TEAM</Typography>
      <img src={GoldenFish} className={classes.goldenTitleFish}></img>
      <Grid container>
        {team.map((member, key) => {
          return (
            <Grid item xs={4} key={key} className={classes.member}>
              <img src={member.img} className={classes.teamImage}></img>
              <Typography className={classes.teamName}>
                {member.name}
              </Typography>
              <Typography className={classes.teamAbout}>
                {member.about}
              </Typography>
              <Grid container>
                <Grid item className={classes.facebookGrid}>
                  <a href={member.facebook}>
                    <FacebookIcon className={classes.facebookIcon} />
                  </a>
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
    </div>
  );
}
