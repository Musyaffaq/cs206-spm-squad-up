import {
  Card,
  CardContent,
  Grid,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import React from "react";

function GroupCard() {
  return (
    <Grid item xs={2}>
      <Card>
        <CardContent>
          <Typography>Group 1</Typography>
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

export default GroupCard;
