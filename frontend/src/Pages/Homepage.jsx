import Grid from "@mui/material/Grid";
import React from "react";
import HomepageStatus from "../Components/HomepageStatus";
import { Button, Typography } from "@mui/material";
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import DisplayGroupCards from "../Components/DisplayGroupCards";
import DisplayEventCards from "../Components/DisplayEventCards";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import API_LINK from "../Api";



function Homepage() {
  const { userid } = useParams()
  const [personality, setPersonality] = useState("");

  useEffect(() => {
    fetch(API_LINK + `get-user/${userid}`)
      .then((res) => res.json()) // Parse the response as JSON
      .then((data) => {
        setPersonality(data.user.personality);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [userid]);
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <HomepageStatus />
        </Grid>
        <Grid item xs={2}>

          {personality !== "undefined" ? (
          <Link to="/profiles/edit">
          <Button variant="outlined">Create Profile</Button>
          </Link>
        ) : (

          <Link to="/squads/create">
          <Button variant="contained" color="success" endIcon={<GroupAddIcon />}>SquadUp!</Button>
          </Link>
        )}
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
