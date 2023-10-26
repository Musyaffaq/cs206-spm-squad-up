import {
  Card,
  CardContent,
  Grid,
  Typography,
  CardActionArea,
  Button,
} from "@mui/material";
import React from "react";

const circleContainer = {
  width: '55px', 
  height: '55px',
  alignItems: 'center',
  overflow: 'hidden',
  display: 'flex',
  borderRadius: '50%',
};

const imageRowContainer = {
  display: 'flex', // Use flexbox to arrange items in a row
  alignItems: 'center', // Align items vertically in the center
  justifyContent: 'space-around', // Adjust as needed to control spacing
};

const cardStyles = {
  width: '281px', 
  alignItems: 'center',
  justifyContent: 'space-around',
  flexwrap: 'wrap',
  marginRight: '10px',
};

const nameStyle = {
  marginBottom: '10px', // Add space below the name
};

function GroupCard( {groupData} ) {
  return (
    <Grid item xs={4.662}>
      <CardActionArea style = {cardStyles}>
        <Card>
        <CardContent>
          <Typography variant="h5" style={nameStyle}>
            {groupData.name}
          </Typography>
          <Typography variant="h6" style={nameStyle}>
            {groupData.hackathon}
          </Typography>
          <div style={imageRowContainer}>
            <img src={groupData.leader} style={circleContainer} alt="Leader" />
            <img src={groupData.member1} style={circleContainer} alt="member1" />
            <img src={groupData.member2} style={circleContainer} alt="member2" />
            <img src={groupData.member3} style={circleContainer} alt="member3" />
          </div>
        </CardContent>
        </Card>
      </CardActionArea>
      
    </Grid>
  );
}

export default GroupCard;
