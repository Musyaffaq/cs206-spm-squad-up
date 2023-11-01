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
          <Typography  level="title-md" style={{ textDecoration: "underline", MarginBottom: "500" }}>
            Skills:
          </Typography>
          {Skills.map((skill, index) => (
            <Chip key={index} label={skill} />
          ))}
        </CardContent>
      </Card>
    );
  }
  
  export default DisplaySkills;
  