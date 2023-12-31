import React from "react";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { Typography } from "@mui/material";
import SkillsDropdownEdit from "../Components/SkillsDropdownEdit";
import TimeCommitmentDropdown from "../Components/CreateSquad/TimeCommitmentDropdown";
import Personality from "../Components/CreateSquad/Personality";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import API_LINK from "../Api";

function EditProfile() {
  const [skills, setSkills] = useState([]);
  const [personality, setPersonality] = useState("");
  const [timeCommitment, setTimeCommitment] = useState(5);
  const navigate = useNavigate();
  const userid = sessionStorage.getItem("userid");

  const handleEditProfile = async () => {
    const data = {
      skills: skills,
      personality: personality,
      timeCommitment: timeCommitment,
      userid: userid,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await axios.post(API_LINK + `edit-user/` + userid, data, {
      headers,
    });

    // Successful login
    navigate(`/profiles/` + userid);
    sessionStorage.setItem("personality", personality);

  };

  const updateSkills = (newValue) => {
    setSkills(newValue);
  };

  const updatePersonality = (newValue) => {
    setPersonality(newValue);
  };

  const updateTimeCommitment = (newValue) => {
    setTimeCommitment(newValue);
  };

  return (
    <Grid container spacing={4}>
      <Grid item xs={16}>
        <Typography variant="h4" align="left" gutterBottom>
          Edit Profile
        </Typography>
      </Grid>
      <form>
        <Grid container spacing={4}>
          <Grid item xs={16}>
            <Personality updatePersonality={updatePersonality} type="profile" />
          </Grid>
          <Grid item xs={16}>
            <SkillsDropdownEdit updateSkills={updateSkills} />
          </Grid>
          <Grid item xs={16} align="center">
            <TimeCommitmentDropdown
              updateTimeCommitment={updateTimeCommitment}
            />
          </Grid>
        </Grid>
        <Grid item xs={16} align="center">
          <Button variant="contained" onClick={handleEditProfile}>
            Edit Profile
          </Button>
        </Grid>
      </form>
    </Grid>
  );
}

export default EditProfile;
