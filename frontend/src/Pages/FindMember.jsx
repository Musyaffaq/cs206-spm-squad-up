import React, { useEffect, useState } from "react";
import { Button, Card, CardActionArea, CardContent, Grid } from "@mui/material";
import MemberCard from "../Components/MemberCard";
import Filter from "../Components/Filter";
import { Typography } from "@mui/material";
import BackToSquad from "../Components/BackToSquad";
import axios from "axios";

import API_LINK from "../Api";

function FindMember() {
  // const [showFilter, setShowFilter] = useState(false);
  const [userData, setUserData] = useState([]);

  const updateUserData = (newValue) => {
    setUserData(newValue);
  };
  const response1 = axios.get(
    API_LINK + `get-squad-by-leader/` + sessionStorage.getItem("username")
  );

  return (
    <>
      <div>
        {/* <Button variant="outlined" onClick={() => setShowFilter(!showFilter)}>
          {showFilter ? "Hide Filter" : "Show Filter"}
        </Button> */}
        <BackToSquad squadid = {response1} />
        <Grid item xs={12}>
          <Typography variant="h4" align="left" gutterBottom>
            Create Squad
          </Typography>
        </Grid>
        <Filter updateUserData={updateUserData} />
      </div>
      <div className="display-event-card">
        {userData.map((memberData, index) => {
          return <MemberCard key={index} memberData={memberData} />;
        })}
      </div>
    </>
  );
}

export default FindMember;
