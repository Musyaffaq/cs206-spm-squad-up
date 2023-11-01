import React from 'react';
import DisplayAttributeCards from './DisplayAttributeCards';
import Grid from '@mui/material/Unstable_Grid2';
import ImageCard from './ImageCard';


const SquadViewComponent = () => {
  return (
    <div className="group-view">
      <h1>Competition Name</h1>

    <ImageCard />
      

      <div className="group-info">
        <h2>Group Information</h2>
        <Grid container spacing = {2}>
            <Grid xs={6}>
                <DisplayAttributeCards />
            </Grid>
            <Grid xs={6}>
                <DisplayAttributeCards />
            </Grid>
            <Grid xs={6}>
                <DisplayAttributeCards />
            </Grid>
            <Grid xs={6}>
                <DisplayAttributeCards />
            </Grid>
        </Grid>

      </div>
    </div>
  );
};

export default SquadViewComponent;
