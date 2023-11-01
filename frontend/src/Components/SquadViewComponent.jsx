import React from 'react';
import DisplayPersonality from './DisplaySquad/DisplayPersonality';
import DisplaySkills from './DisplaySquad/DisplaySkills';
import Grid from '@mui/material/Unstable_Grid2';
import ImageCard from './ImageCard';

const inputArr = [
    {
      squadName : "Squad Name",
      EventName  : "Event Name",
      SkillsRequired : ["Skill 1", "Skill 2", "Skill 3"],
      FromDate : "dd/mm/yyyy",
      ToDate : "dd/mm/yyyy",
      TimeCommitment : 5,
      Personality : "Gay",
      ConfirmedMembers : ["Member 1", "Member 2", "Member 3"],

    }
]


const SquadViewComponent = () => {
  const { squadName, EventName, SkillsRequired, FromDate, ToDate, TimeCommitment, Personality, ConfirmedMembers } = inputArr[0];
  return (
    <div className="group-view">
      <h1>Competition Name</h1>

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
                <DisplayPersonality personality ={Personality} />
            </Grid>
            <Grid xs={6}>
                <DisplayPersonality Personality ={Personality} />
            </Grid>
        </Grid>

      </div>
    </div>
  );
};

export default SquadViewComponent;
