import React from "react";
import {
    Card,
    CardContent,
    Grid,
    Typography,
    Button,  
    CardActions,
  } from "@mui/material";

  const circleContainer = {
    width: '130px', 
    height: '130px',
    alignItems: 'center',
    overflow: 'hidden',
    display: 'flex',
    borderRadius: '50%',
    marginTop: '5px',
  };

  const cardStyles = {
    width: '330px', 
    alignItems: 'center',
    justifyContent: 'center',
    flexwrap: 'wrap',
    marginRight: '10px',
  };

  const contentStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center', // Center horizontally
    justifyContent: 'center', // Center vertically
    height: '16vh', // Full viewport height
  };
  
function MemberCard({memberData}) {
    return (
        <>
        <Grid item xs={2.5}>
        <Card style = {cardStyles}>
            <CardContent style={contentStyle}>
            <CardContent>
            <img src={memberData.dP} style={circleContainer} alt={memberData.username} />
            </CardContent>

            <CardContent style = {{marginTop: '50px'}}>
            <Typography>Username: </Typography>
            <Typography>{memberData.username}</Typography>
            <Typography>Personality: </Typography>
            <Typography>{memberData.personality}</Typography>
            <Typography>Skills:</Typography>
            <Typography>{memberData.skills.join(', ')}</Typography>
            </CardContent>
            </CardContent>
            <CardActions style = {{marginLeft: '20px'}}>
            <Button size="small">Invite to Group</Button>
            </CardActions>
        </Card>
        </Grid>
        </>
    );
}



export default MemberCard;