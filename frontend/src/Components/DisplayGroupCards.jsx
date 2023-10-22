import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import GroupCard from "../Components/GroupCard";

function DisplayGroupCards() {
  return (
    <>
      <GroupCard />
      <GroupCard />
      <GroupCard />
      <GroupCard />
      <GroupCard />
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

export default DisplayGroupCards;
