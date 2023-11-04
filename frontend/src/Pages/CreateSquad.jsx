import React from "react";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { Typography, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import EventNameDropdown from "../Components/CreateSquad/EventNameDropdown";
import SkillsDropdown from "../Components/CreateSquad/SkillsDropdown";
import TimeCommitmentDropdown from "../Components/CreateSquad/TimeCommitmentDropdown";
import ToDateDropdown from "../Components/CreateSquad/ToDateDropdown";
import FromDateDropdown from "../Components/CreateSquad/FromDateDropdown";
import Personality from "../Components/CreateSquad/Personality";
import { Button } from "@mui/material";
import axios from "axios";
import API_LINK from "../Api";

function CreateSquad() {
  // Event Type, Event Name, Group Name, Skills required, Dates Required (from and to), commitment level
  const [eventName, setEventName] = useState("");
  const [groupName, setGroupName] = useState("");
  const [skills, setSkills] = useState([]);
  const [datesFrom, setDatesFrom] = useState("");
  const [datesTo, setDatesTo] = useState("");
  const [commitmentLevel, setCommitmentLevel] = useState(5);
  const [personality, setPersonality] = useState("");
  const navigate = useNavigate();
  const username = sessionStorage.getItem("username");

  const handleCreateSquad = async () => {
    const data = {
      squadName: groupName, // string
      leaderID: username, // string
      eventName: eventName, // string
      fromDate: datesFrom.slice(0, 10), // string
      toDate: datesTo.slice(0, 10), // string
      timeCommitment: commitmentLevel, // int
      personality: personality, // string
      skillsRequired: skills, // array
    };
    console.log(data);

    const headers = {
      "Content-Type": "application/json",
    };

    try {
      const response = await axios.post(API_LINK + `create-squad`, data, {
        headers,
      });

      // Successful login
      console.log(response.data.squadid);
      navigate(`/squads/` + response.data.squadid);

      // Redirect or perform other actions as needed.
    } catch (error) {
      // Handle login error
      console.error("Login failed", error);
    }
  };

  const updateEventName = (newValue) => {
    setEventName(newValue);
  };

  const updateSkills = (newValue) => {
    setSkills(newValue);
  };

  const updateFromDate = (newValue) => {
    setDatesFrom(newValue);
  };

  const updateToDate = (newValue) => {
    setDatesTo(newValue);
  };

  const updateTimeCommitment = (newValue) => {
    setCommitmentLevel(newValue);
  };

  const updatePersonality = (newValue) => {
    setPersonality(newValue);
  };

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Typography variant="h4" align="left" gutterBottom>
          Create Squad
        </Typography>
      </Grid>
      <form>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <EventNameDropdown updateEventName={updateEventName} />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Group Name"
              fullWidth
              margin="normal"
              variant="outlined"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <SkillsDropdown updateSkills={updateSkills} />
          </Grid>
          <Grid item xs={3}>
            <FromDateDropdown updateFromDate={updateFromDate} />
          </Grid>
          <Grid item xs={3} align="right">
            <ToDateDropdown updateToDate={updateToDate} />
          </Grid>
          <Grid item xs={6} align="center">
            <TimeCommitmentDropdown
              updateTimeCommitment={updateTimeCommitment}
            />
          </Grid>
          <Grid item xs={12}>
            <Personality updatePersonality={updatePersonality} />
          </Grid>
          <Grid item x={12} align="center">
            <Button variant="contained" onClick={handleCreateSquad}>
              Create Squad
            </Button>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
}

export default CreateSquad;
