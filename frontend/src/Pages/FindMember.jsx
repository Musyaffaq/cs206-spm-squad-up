import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
} from "@mui/material";
import MemberCard from "../Components/MemberCard";


const memberDataArr =[
    {
        username: 'gay',
        skills: ['python', 'java', 'c++'],
        timeCommittment: 2,
        personality: 'INTJ',
        dP: 'person1.jpg',
    },

    {
        username: 'not gay',
        skills: ['python', 'java', 'c++'],
        timeCommittment: 2,
        personality: 'Annoying',
        dP: 'person2.jpg',
    }
]


function FindMember() {
    const cardActionAreaStyle = {
        height: '180px',
        width: '90px',
        alignItems: 'center',
        justifyContent: 'center',
      };
    return (
        <div className="display-event-card">
        <>
        {memberDataArr.map((memberData, index) => {
            return <MemberCard key={index} memberData={memberData} />
        })}
        </>
        </div>

    );
}

export default FindMember;