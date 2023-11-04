import {
    Chip,
    Card,
    CardContent,
    Typography
  } from "@mui/material";
  import React from "react";

  
  function MemberCardSkills({ Skills }) {
    return (
      <div>
          {Skills.map((skill, index) => (
            <Chip key={index} label={skill} />
          ))}
      </div>
    );
  }
  
  export default MemberCardSkills;
  