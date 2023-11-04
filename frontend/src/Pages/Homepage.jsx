import Grid from "@mui/material/Grid";
import React from "react";
import HomepageStatus from "../Components/HomepageStatus";
import { Button, Typography } from "@mui/material";
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import DisplayGroupCards from "../Components/DisplayGroupCards";
import DisplayEventCards from "../Components/DisplayEventCards";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <HomepageStatus />
        </Grid>
        <Grid item xs={2}>
          <Link to="/squads/create">
            <Button variant="contained" color="success" endIcon={<GroupAddIcon />}>SquadUp!</Button>
          </Link>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5">Your Groups</Typography>
        </Grid>
        <DisplayGroupCards />
        <Grid item xs={12}>
          <Typography variant="h5" style={{ marginTop: "15px" }}>
            Available Hackathons
          </Typography>
        </Grid>
        <DisplayEventCards />
      </Grid>
    </>
  );
}

export default Homepage;
