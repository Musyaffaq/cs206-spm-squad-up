import {
    Chip,
    Card,
    CardContent,
    Typography
  } from "@mui/material";
  import React from "react";

  
  function DisplaySkills({ Skills }) {
    return (
      <Card variant="outlined">
        <CardContent>
          <Typography  level="title-md" style={{ textDecoration: "underline", marginBottom: "0.4em" }}>Skills:</Typography>
          {Skills.map((skill, index) => (
            <Chip key={index} label={skill} style={{marginRight: "0.4em"}} />
          ))}
        </CardContent>
      </Card>
    );
  }
  
  export default DisplaySkills;
  