import React from "react";
import {
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
    image: 'Lit_Hack.png',
    information: 'Information for Event 1',
  },
  {
    title: 'Citi HackOverflow',
    image: 'Citi_Hack.png',
    information: 'Information for Event 2',
  },
  {
    title: 'SG-IN Hackathon',
    image: 'G20_Hack.png',
    information: 'Information for Event 3',
  },
];


function DisplayEventCards() {
  return (
    <div  className="display-event-card">
      <>
      {eventDataList.map((eventData, index) => (
        <EventCard key={index} eventData={eventData} />
      ))}
      </>
      <Grid item xs={2}>
        <CardActionArea>
          <Card>
            <CardContent>
              <Typography align="center">See More</Typography>
            </CardContent>
          </Card>
        </CardActionArea>
      </Grid>
    </div>

  );
}


export default DisplayEventCards;
