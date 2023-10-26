import Grid from "@mui/material/Grid";
import React from "react";
import HomepageStatus from "../Components/HomepageStatus";
import { Button, Typography } from "@mui/material";
import DisplayGroupCards from "../Components/DisplayGroupCards";
import DisplayEventCards from "../Components/DisplayEventCards";

function Homepage() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <HomepageStatus />
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained">Create a Squad</Button>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5">Your Groups</Typography>
        </Grid>
        <DisplayGroupCards />
        <Grid item xs={12}>
          <Typography variant="h5" style={{marginTop: '15px'}}>Available Hackathons</Typography>
        </Grid>
        <DisplayEventCards />
      </Grid>
    </>
  );
}

export default Homepage;
