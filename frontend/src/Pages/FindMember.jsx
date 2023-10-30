import React, { useState } from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
} from "@mui/material";
import MemberCard from "../Components/MemberCard";
import Filter from "../Components/Filter";


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
    const [showFilter, setShowFilter] = useState(false);
  
    return (
      <>
        <div>
          <button onClick={() => setShowFilter(!showFilter)}>
            {showFilter ? 'Hide Filter' : 'Show Filter'}
          </button>
          {showFilter && <Filter />}
        </div>
        <div className="display-event-card">
          {memberDataArr.map((memberData, index) => {
            return <MemberCard key={index} memberData={memberData} />;
          })}
        </div>
      </>
    );
  }
  
  export default FindMember;