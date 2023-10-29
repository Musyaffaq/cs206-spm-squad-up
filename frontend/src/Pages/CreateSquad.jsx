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
import { Button } from "@mui/material";

function CreateSquad() {
  // Event Type, Event Name, Group Name, Skills required, Dates Required (from and to), commitment level
  const [eventName, setEventName] = useState("");
  const [groupName, setGroupName] = useState("");
  const [skills, setskills] = useState([]);
  const [datesFrom, setDatesFrom] = useState("");
  const [datesTo, setDatesTo] = useState("");
  const [commitmentLevel, setCommitmentLevel] = useState(0);
  const navigate = useNavigate();

  const updateEventName = (newValue) => {
    setEventName(newValue);
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
            <SkillsDropdown />
          </Grid>
          <Grid item xs={3}>
            <FromDateDropdown />
          </Grid>
          <Grid item xs={3} align="right">
            <ToDateDropdown />
          </Grid>
          <Grid item xs={6} align="center">
            <TimeCommitmentDropdown />
          </Grid>
          <Grid item x={12} align="center">
            <Button variant="contained">Create Squad</Button>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
}

export default CreateSquad;
