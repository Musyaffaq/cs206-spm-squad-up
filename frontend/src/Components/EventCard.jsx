import {
  Card,
  CardContent,
  Grid,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import React from "react";

const cardStyles = {
  width: "600px",
  alignItems: "center",
  justifyContent: "center",
  flexwrap: "wrap",
};

function EventCard({ eventData }) {
  return (
    <Grid item xs={2.5} style={cardStyles}>
      <Card>
        <CardContent>
          <Typography>{eventData.title}</Typography>
          <img
            src={eventData.image}
            alt={eventData.title}
            width="140"
            height="110"
          />
          <Typography>{eventData.information}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">See More</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default EventCard;
