import React from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import GroupCard from "../Components/GroupCard";


const groupDataList = [
  {
    name: 'Code Genius',
    hackathon: 'Code for Good',
    leader: 'person1.jpg',
    member1: 'person2.jpg',
    member2: 'person3.jpg',
    member3: 'person4.jpg',
  },

  {
    name: 'Stark Industries',
    hackathon: 'SG-IN Hackathon',
    leader: 'person7.jpg',
    member1: 'person8.jpg',
    member2: 'person9.jpg',
    member3: 'person1.jpg',
  },
];


function DisplayGroupCards() {
  const cardActionAreaStyle = {
    height: '180px',
    width: '90px',
    alignItems: 'center',
    justifyContent: 'center',
  };
  const buttonStyle = {
    height: '143px',
    width: '60px',
    alignItems: 'center',
    justifyContent: 'center',
  };
  return (
    <div  className="display-event-card">
      <>
      {groupDataList.map((groupData, index) => (
        <GroupCard key={index} groupData={groupData} />
      ))}
      </>
      <Grid item xs={2} >
        <CardActionArea style = {cardActionAreaStyle} >
          <Card style = {cardActionAreaStyle}>
            <CardContent justifyContent="center">
              <Box display="flex" style = {buttonStyle}>
                <ArrowForwardIosIcon fontSize="large" />
              </Box>
            </CardContent>
          </Card>
        </CardActionArea>
      </Grid>
    </div>

  );
}

export default DisplayGroupCards;
