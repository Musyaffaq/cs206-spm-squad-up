import React from "react";
import DisplayPersonality from "./DisplaySquad/DisplayPersonality";
import DisplaySkills from "./DisplaySquad/DisplaySkills";
import DisplayTimeCommitment from "./DisplaySquad/DisplayTimeCommitment";
import Grid from "@mui/material/Unstable_Grid2";
import ImageCard from "./ImageCard";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import InviteButton from "./InviteButton";

const circleContainer = {
  width: "150px",
  height: "150px",
  alignItems: "center",
  overflow: "hidden",
  display: "flex",
  borderRadius: "50%",
  marginRight: "5px",
};

const ProfileViewComponent = ({ userId }) => {
  const [isInvited, setIsInvited] = useState(false);
  const [username, setUsername] = useState("");
  const [skills, setSkills] = useState([]);
  const [personality, setPersonality] = useState("");
  const [timeCommitment, setTimeCommitment] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:5000/get-user/${userId}`)
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
      <div style={{ display: "flex", alignItems: "center" }}>
        <h1 style={{ marginRight: "1em" }}>{username} </h1>
        {username !== sessionStorage.getItem("username") ? (
          <InviteButton memberName={username} userId={userId} />
        ) : (
          <Link to="/profiles/edit">
            <Button variant="outlined">Edit Profile</Button>
          </Link>
        )}
      </div>

      <img src="/person1.jpg" style={circleContainer} alt="image" />
      <div className="group-info">
        <h2>User Information</h2>
        <Grid container spacing={2}>
          <Grid xs={6}>
            <DisplayPersonality Personality={personality} />
          </Grid>
          <Grid xs={6}>
            <DisplaySkills Skills={skills} />
          </Grid>
          <Grid xs={6}>
            <DisplayTimeCommitment TimeCommitment={timeCommitment} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ProfileViewComponent;
