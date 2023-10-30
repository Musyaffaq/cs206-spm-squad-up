import React from 'react';
import DisplayAttributeCards from './DistributeAttributeCards';
import Grid from '@mui/material/Unstable_Grid2';
import InviteButton from './InviteButton';


const UserViewComponent = () => {
    return (
      <div className="group-view">
      <h1>Person Name</h1>

    
      <div className="group-info">
        <h2>Person Information</h2>
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
            <Grid xs={6}>
                <InviteButton>Invite member</InviteButton>
            </Grid>
        </Grid>

      </div>
      
    </div>
    )
}

export default UserViewComponent;