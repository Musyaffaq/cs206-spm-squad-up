import {
  Card,
  CardContent,
  Grid,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import React from "react";

function EventCard() {
  return (
    <Grid item xs={2}>
      <Card>
        <CardContent>
          <Typography>Event 1</Typography>
          <Typography>Information</Typography>
          <Typography>More Information</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">See More</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default EventCard;
