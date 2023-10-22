import Grid from "@mui/material/Grid";
import React from "react";
import HomepageStatus from "../Components/HomepageStatus";
import { Button } from "@mui/material";
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
        <DisplayGroupCards />
        <DisplayEventCards />
      </Grid>
    </>
  );
}

export default Homepage;
