import React from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import EventCard from "./EventCard";
import './DisplayEventCards.css';

const eventDataList = [
  {
    title: 'LIT Hackathon',
    image: 'LIT_Hack.png',
    information: 'Organised by SMU\'s LIT Club...',
  },
  {
    title: 'Citi HackOverflow',
    image: 'Citi_Hack.png',
    information: 'Citi Bank\'s premier hackathon...',
  },
  {
    title: 'SG-IN Hackathon',
    image: 'G20_Hack.png',
    information: 'NTU Singapore in partnership with ...',
  },
];

const eventDataList2 = [
  {
    title: 'Ellipsis Tech Series',
    image: 'Ellipsis_Hack.png',
    information: 'Ellipsis presents our annual...',
  },
  {
    title: 'Technica Hackathon',
    image: 'Technica_Hack.png',
    information: 'The world\'s largest hackathon...',
  },

];


function DisplayEventCards() {
  const cardActionAreaStyle = {
    height: '267px',
    width: '90px',
    alignItems: 'center',
    justifyContent: 'center',
  };
  const buttonStyle = {
    height: '222px',
    width: '60px',
    alignItems: 'center',
    justifyContent: 'center',
  };
  return (
    <div  className="display-event-card">
      <>
      {eventDataList.map((eventData, index) => (
        <EventCard key={index} eventData={eventData} />
      ))}
      </>
      <Grid item xs={2} >
        <CardActionArea style = {cardActionAreaStyle} >
          <Card style = {cardActionAreaStyle}>
            <CardContent justifyContent="center">
              <Box display="flex" style = {buttonStyle}>
                <ArrowForwardIosIcon fontSize="large" />
              </Box>
            </CardContent>
          </Card>
        </CardActionArea>
      </Grid>
    </div>

  );
}


export default DisplayEventCards;
