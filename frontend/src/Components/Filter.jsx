import React, { useState } from "react";
import SkillsDropdown from "../Components/CreateSquad/SkillsDropdown";
import TimeCommitmentDropdown from "../Components/CreateSquad/TimeCommitmentDropdown";
import Personality from "../Components/CreateSquad/Personality";
import { Button } from "@mui/material";
import axios from "axios";

function Filter({ updateUserData }) {
  const [filter, setFilter] = useState("");
  const [skills, setSkills] = useState([]);
  const [commitmentLevel, setCommitmentLevel] = useState(5);
  const [personality, setPersonality] = useState("");

  const updateSkills = (newValue) => {
    setSkills(newValue);
  };

  const updateTimeCommitment = (newValue) => {
    setCommitmentLevel(newValue);
  };

  const updatePersonality = (newValue) => {
    setPersonality(newValue);
  };

  const handleFilter = async () => {
    const data = {
      timeCommitment: commitmentLevel, // int
      personality: personality, // string
      skillsRequired: skills, // array
    };

    const headers = {
      "Content-Type": "application/json",
    };

    try {
      const response = await axios.post("http://localhost:5000/filter", data, {
        headers,
      });
      updateUserData(response.data["usersList"]);
      // console.log(response.data["usersList"]);

      // Redirect or perform other actions as needed.
    } catch (error) {
      // Handle login error
      console.error("Failed to fetch data", error);
    }
  };

  return (
    <div>
      <TimeCommitmentDropdown updateTimeCommitment={updateTimeCommitment} />
      <SkillsDropdown updateSkills={updateSkills} />
      <Personality updatePersonality={updatePersonality} />
      <Button variant="contained" onClick={handleFilter}>
        Filter
      </Button>
    </div>
  );
}

export default Filter;
