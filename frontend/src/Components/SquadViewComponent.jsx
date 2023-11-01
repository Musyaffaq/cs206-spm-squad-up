import React from 'react';
import DisplayPersonality from './DisplaySquad/DisplayPersonality';
import DisplaySkills from './DisplaySquad/DisplaySkills';
import DisplayDates from './DisplaySquad/DisplayDates';
import DisplayTimeCommitment from './DisplaySquad/DisplayTimeCommitment';
import DisplayCfmMember from './DisplaySquad/DisplayCfmMember';
import Grid from '@mui/material/Unstable_Grid2';
import ImageCard from './ImageCard';

const inputArr = [
    {
      squadName : "Squad Gay",
      EventName  : "LIT Hackathon 2023",
      SkillsRequired : ["Skill 1", "Skill 2", "Skill 3"],
      FromDate : "22/11/1990",
      ToDate : "22/11/2222",
      TimeCommitment : 5,
      Personality : "Gay",
      ConfirmedMembers : ["Member1", "Member2", "Member3"],

    }
]


const SquadViewComponent = () => {
  const { squadName, EventName, SkillsRequired, FromDate, ToDate, TimeCommitment, Personality, ConfirmedMembers } = inputArr[0];
  return (
    <div className="group-view">
      <h1>{squadName}</h1>
      <h2>{EventName}</h2>

    <ImageCard />
      

      <div className="group-info">
        <h2>Group Information</h2>
        <Grid container spacing = {2}>
            <Grid xs={6}>
                <DisplayPersonality Personality ={Personality}/>
            </Grid>
            <Grid xs={6}>
                <DisplaySkills Skills ={SkillsRequired} />
            </Grid>
            <Grid xs={6}>
                <DisplayDates FromDate = {FromDate} ToDate = {ToDate}/>
            </Grid>
            <Grid xs={6}>
                <DisplayTimeCommitment TimeCommitment ={TimeCommitment} />
            </Grid>
            <Grid xs={12}>
                <DisplayCfmMember ConfirmedMembers ={ConfirmedMembers} />
            </Grid>
        </Grid>

      </div>
    </div>
  );
};

export default SquadViewComponent;
