import React, { useState } from "react";
import { useStyles } from "../utils/uiComponents";
import data from "../config/index.json";
import { Grid, Typography } from "@material-ui/core/";

import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  background: 'none',
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ color: '#C3B96C' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: 'none',
  borderBottom: '1px solid 	#72878e ',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const classes = useStyles();

  return (
    <Grid container className={classes.policy}>
      <Grid item xs={12}>
        {data &&
          data.faq.map((e, i) => {
            return (
              <Accordion expanded={expanded === 'panel' + i} onChange={handleChange('panel' + i)}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                  <Typography variant="h6" style={{ marginTop: 0 }}>{e.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div key={i}>
                    <Typography variant="subtitle1">{e.text}</Typography>
                    {e.text2 ? (
                      <Typography variant="subtitle1">{e.text2}</Typography>
                    ) : null}
                    {e.text3 ? (
                      <Typography variant="subtitle1">{e.text3}</Typography>
                    ) : null}
                    {e.text4 ? (
                      <Typography variant="subtitle1">{e.text4}</Typography>
                    ) : null}
                    {e.text5 ? (
                      <Typography variant="subtitle1">{e.text5}</Typography>
                    ) : null}
                    {e.text6 ? (
                      <Typography variant="subtitle1">{e.text6}</Typography>
                    ) : null}
                    {e.text7 ? (
                      <Typography variant="subtitle1">{e.text7}</Typography>
                    ) : null}
                    {e.text8 ? (
                      <Typography variant="subtitle1">{e.text8}</Typography>
                    ) : null}
                    {e.text9 ? (
                      <Typography variant="subtitle1">{e.text9}</Typography>
                    ) : null}
                    {e.text10 ? (
                      <Typography variant="subtitle1">{e.text10}</Typography>
                    ) : null}
                    {e.text11 ? (
                      <Typography variant="subtitle1">{e.text11}</Typography>
                    ) : null}
                    {e.text12 ? (
                      <Typography variant="subtitle1">{e.text12}</Typography>
                    ) : null}
                  </div>
                </AccordionDetails>
              </Accordion>
            );
          })}
      </Grid>
    </Grid>
  );
}

