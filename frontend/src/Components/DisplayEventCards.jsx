import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import EventCard from "./EventCard";

function DisplayEventCards() {
  return (
    <>
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <Grid item xs={2}>
        <CardActionArea>
          <Card>
            <CardContent>
              <Typography>See More</Typography>
            </CardContent>
          </Card>
        </CardActionArea>
      </Grid>
    </>
  );
}

export default DisplayEventCards;
