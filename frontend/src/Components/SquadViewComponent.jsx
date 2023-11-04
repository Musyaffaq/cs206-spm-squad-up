import React from "react";
import DisplayPersonality from "./DisplaySquad/DisplayPersonality";
import DisplaySkills from "./DisplaySquad/DisplaySkills";
import DisplayDates from "./DisplaySquad/DisplayDates";
import DisplayTimeCommitment from "./DisplaySquad/DisplayTimeCommitment";
import DisplayCfmMember from "./DisplaySquad/DisplayCfmMember";
import Grid from "@mui/material/Unstable_Grid2";
import ImageCard from "./ImageCard";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API_LINK from "../Api";

const SquadViewComponent = () => {
  const { squadid } = useParams(); // this is the username
  useEffect(() => {
    fetch(API_LINK + `get-squad/${squadid}`)
      .then((res) => res.json()) // Parse the response as JSON
      .then((data) => {
        setSquadName(data.squad.squadName);
        setEventName(data.squad.eventName);
        setSkillsRequired(data.squad.skillsRequired);
        setFromDate(data.squad.fromDate.slice(5, 16));
        setToDate(data.squad.toDate.slice(5, 16));
        setTimeCommitment(data.squad.timeCommitment);
        setPersonality(data.squad.personality);
        setConfirmedMembers(data.squad.confirmedMembers);
      });
  }, []);
  const [confirmedMembers, setConfirmedMembers] = useState([]);
  const [personality, setPersonality] = useState([]);
  const [timeCommitment, setTimeCommitment] = useState(0);
  const [toDate, setToDate] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [skillsRequired, setSkillsRequired] = useState([]);
  const [eventName, setEventName] = useState("");
  const [squadName, setSquadName] = useState("");
  return (
    <div className="group-view">
      <h1>{squadName}</h1>
      <h2>{eventName}</h2>

      <ImageCard Event={eventName} />

      <div className="group-info">
        <h2>Group Information</h2>
        <Grid container spacing={2}>
          <Grid xs={6}>
            <DisplayPersonality Personality={personality} />
          </Grid>
          <Grid xs={6}>
            <DisplaySkills Skills={skillsRequired} type="squad" />
          </Grid>
          <Grid xs={6}>
            <DisplayDates FromDate={fromDate} ToDate={toDate} />
          </Grid>
          <Grid xs={6}>
            <DisplayTimeCommitment TimeCommitment={timeCommitment} />
          </Grid>
          <Grid xs={12}>
            <DisplayCfmMember ConfirmedMembers={confirmedMembers} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default SquadViewComponent;
