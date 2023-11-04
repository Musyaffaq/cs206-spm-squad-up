import { Chip, Card, CardContent, Typography } from "@mui/material";
import React from "react";

function DisplayPersonality({ Personality, type }) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography level="title-md" style={{ textDecoration: "underline" }}>
          Personality:
        </Typography>
        {type === "profile" ? (
          <Typography>{Personality}</Typography>
        ) : (
          Personality.map((personality, index) => (
            <Chip
              key={index}
              label={personality}
              style={{ marginRight: "0.4em" }}
            />
          ))
        )}
      </CardContent>
    </Card>
  );
}

export default DisplayPersonality;
