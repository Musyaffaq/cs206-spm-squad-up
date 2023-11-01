import React from "react";
import { Card, CardContent, Typography, Chip } from "@mui/material";

const circleContainer = {
  width: "80px",
  height: "80px",
  alignItems: "center",
  overflow: "hidden",
  display: "flex",
  borderRadius: "50%",
  marginRight: "5px",
  marginBottom: "13px",
};

const imageRowContainer = {
  display: "flex", // Use flexbox to arrange items in a row
  alignItems: "center", // Align items vertically in the center
  justifyContent: "space-around", // Adjust as needed to control spacing
  marginTop: "10px",
};

function DisplayCfmMember({ ConfirmedMembers }) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6" style={{ textDecoration: "underline" }}>
          Confirmed Members:
        </Typography>
        <div style={imageRowContainer}>
          {ConfirmedMembers.map((member, index) => (
            <div key={index}>
              <img
                src={`${process.env.PUBLIC_URL}/person${index}.jpg`}
                style={circleContainer}
                alt={member}
              />
              <Chip label={member} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default DisplayCfmMember;
