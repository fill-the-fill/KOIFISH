import React, {useState, useEffect} from "react";
import { Grid } from "@material-ui/core";
import { useStyles } from "../utils/uiComponents";

import Intro from "../components/intro";
import ICO from "../components/ico";
import Exchange from "../components/exchange";
import Allocation from "../components/tokenAllocation";
import History from "../components/history";
import RoadMap from "../components/roadMap";
// import Statistics from "../components/statistics";
import Team from "../components/team";

import Header from "../components/header";
import Footer from "../components/footer";

import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();


export default function Landing() {

  const [showScroll, setShowScroll] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll', checkScrollTop)
    return function cleanup() {
      window.removeEventListener('scroll', checkScrollTop)
    }
  })

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  let classes = useStyles();
  return (
    <Grid container className={classes.backgroundImage}>
      <Header />
      <Grid item xs={12} className={classes.introHeight} data-aos="zoom-in">
        <Intro />
      </Grid>
      <div className={classes.websitePadding}>
        <Grid item xs={12} data-aos="fade-up">
          <ICO />
        </Grid>
        <Grid item xs={12} data-aos="fade-up">
          <Exchange />
        </Grid>
        <Grid item xs={12} data-aos="fade-up">
          <Allocation />
        </Grid>
        <Grid item xs={12} data-aos="fade-up">
          <RoadMap />
        </Grid>
        <Grid item xs={12} data-aos="fade-up">
          <History />
        </Grid>
        {/* <Grid item xs={12}>
        <Statistics />
      </Grid> */}
        <Grid item xs={12} data-aos="fade-up">
          <Team />
        </Grid>
      </div>
      <Footer />
    </Grid>
  );
}
