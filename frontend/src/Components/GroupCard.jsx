import {
  Card,
  CardContent,
  Grid,
  Typography,
  CardActionArea,
} from "@mui/material";
import React from "react";

const circleContainerLeader = {
  width: '55px', 
  height: '55px',
  alignItems: 'center',
  overflow: 'hidden',
  display: 'flex',
  borderRadius: '50%',
  marginRight: '15px',
};

const circleContainer = {
  width: '55px', 
  height: '55px',
  alignItems: 'center',
  overflow: 'hidden',
  display: 'flex',
  borderRadius: '50%',
  marginRight: '5px',
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

const separatorStyle = {
  display: 'flex', // Use flex to arrange items in a row
  alignItems: 'center', // Align items vertically in the center
  justifyContent: 'space-between', // Create space between leader and members
  position: 'relative',
};

const separatorLine = {
  content: '',
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: '24%', // Position in the middle
  borderLeft: '2px solid #333', // Adjust width and color
};

function GroupCard({ groupData }) {
  return (
    <Grid item xs={4.662}>
      <CardActionArea style={cardStyles}>
        <Card>
          <CardContent>
            <Typography variant="h5" style={nameStyle}>
              {groupData.name}
            </Typography>
            <Typography variant="h6" style={nameStyle}>
              {groupData.hackathon}
            </Typography>
            <div style={separatorStyle}>
              <div style={imageRowContainer}>
                <img src={groupData.leader} style={circleContainerLeader} alt="Leader" />
                <div style={separatorLine}></div>
                <img src={groupData.member1} style={circleContainer} alt="member1" />
                <img src={groupData.member2} style={circleContainer} alt="member2" />
                <img src={groupData.member3} style={circleContainer} alt="member3" />
              </div>
              
            </div>
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

export default GroupCard;
