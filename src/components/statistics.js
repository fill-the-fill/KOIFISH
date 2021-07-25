import React, { useState } from "react";
import { Typography, Grid } from "@material-ui/core";
import GoldenFish from "../utils/images/golderFish.png";
import { useStyles } from "../utils/uiComponents";

import VisibilitySensor from "react-visibility-sensor";
import CountUp from "react-countup";

import PricePng from "../utils/images/price.png";
import LiquidityPng from "../utils/images/liqudity.png";
import SupplyPng from "../utils/images/supply.png";
import HoldersPng from "../utils/images/holders.png";
import MarketCapPng from "../utils/images/marketcap.png";

export default function Statistics() {
  let classes = useStyles();
  const [didViewCountUp, setDidViewCountUp] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setDidViewCountUp(true);
    }
  };

  let statistics = [
    {
      img: PricePng,
      name: "Price",
      value: 2000,
    },
    {
      img: LiquidityPng,
      name: "Liquidity",
      value: 3232,
    },
    {
      img: SupplyPng,
      name: "Supply",
      value: 1930,
    },
    {
      img: HoldersPng,
      name: "Holders",
      value: 2300,
    },
    {
      img: MarketCapPng,
      name: "Market Cap",
      value: 9213,
    },
  ];

  return (
    <div id="statistics">
      <Typography className={classes.title}>STATISTICS</Typography>
      <img
        alt="goldenFish"
        src={GoldenFish}
        className={classes.goldenTitleFish}
      ></img>
      <VisibilitySensor
        onChange={onVisibilityChange}
        offSet={{
          top: 10,
        }}
        partialVisibility={true}
      >
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="center"
        >
          {statistics.map((statistic, key) => {
            return (
              <Grid item xs={6} sm={2} key={key} className={classes.statistic}>
                <img
                  alt="statistica"
                  src={statistic.img}
                  className={classes.statisticImg}
                ></img>
                <Typography className={classes.statisticName}>
                  {statistic.name}
                </Typography>
                <Typography className={classes.statiscticsNumbers}>
                  <CountUp
                    start={0}
                    end={didViewCountUp ? statistic.value : 0}
                    duration={4}
                    prefix="$ "
                  ></CountUp>
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </VisibilitySensor>
    </div>
  );
}
