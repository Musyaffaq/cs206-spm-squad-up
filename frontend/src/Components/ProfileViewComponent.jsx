import React from "react";
import DisplayPersonality from "./DisplaySquad/DisplayPersonality";
import DisplaySkills from "./DisplaySquad/DisplaySkills";
import DisplayTimeCommitment from "./DisplaySquad/DisplayTimeCommitment";
import Grid from "@mui/material/Unstable_Grid2";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import InviteButton from "./InviteButton";
import BackToFindMember from "../Components/DisplaySquad/BackToFindMember";
import BackToHome from "../Components/DisplaySquad/BackToHome";

import API_LINK from "../Api";

const ProfileContainer = {
  width: "190px",
  height: "190px",
  alignItems: "center",
  overflow: "hidden",
  display: "flex",
  borderRadius: "5%",
  marginRight: "5px",
};

const usernameToImage = {
  "Lauren": "/lauren.jpg",
  "Zhiyi": "/zhiyi.jpg",
  "Eugene": "/eugene.jpg",
  "Mush": "/mush.jpg",
  "Leann": "/leann.jpg",
};

const ProfileViewComponent = ({ userId }) => {
  const [isInvited, setIsInvited] = useState(false);
  const [username, setUsername] = useState("");
  const [skills, setSkills] = useState([]);
  const [personality, setPersonality] = useState("");
  const [timeCommitment, setTimeCommitment] = useState(0);

  useEffect(() => {
    fetch(API_LINK + `get-user/${userId}`)
      .then((res) => res.json()) // Parse the response as JSON
      .then((data) => {
        setUsername(data.user.username);
        setSkills(data.user.skills);
        setPersonality(data.user.personality);
        setTimeCommitment(data.user.timeCommitment);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [userId]);

  return (
    <div className="group-view">
          {username !== sessionStorage.getItem("username") ? (
          <BackToFindMember />
        ) : (
            <BackToHome/>
        )}
      <div
        style={{ display: "flex", alignItems: "center", marginTop: "-26px" }}
      >
        <h1 style={{ marginRight: "1em" }}>{username} </h1>
        {username !== sessionStorage.getItem("username") ? (
          <InviteButton memberName={username} userId={userId} />
        ) : (
          <Link to="/profiles/edit">
            <Button variant="outlined">Edit Profile</Button>
          </Link>
        )}
      </div>

      <img src={usernameToImage[username] || "/default_profile.jpg"} style={ProfileContainer} alt="image" />
      <div className="group-info">
        <h2>User Information</h2>
        <Grid container spacing={2}>
          <Grid xs={6}>
            <DisplayPersonality Personality={personality} type="profile" />
          </Grid>
          <Grid xs={6}>
            <DisplayTimeCommitment TimeCommitment={timeCommitment} />
          </Grid>
          <Grid xs={12}>
            <DisplaySkills Skills={skills} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ProfileViewComponent;
