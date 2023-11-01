import {
    Card,
    CardContent,
    Typography
  } from "@mui/material";
  import React from "react";

function DisplayTimeCommitment({TimeCommitment}) {
    return (
        <Card variant="outlined">
            <CardContent>
            <Typography level="title-md" style={{ textDecoration: "underline"}}>Time Commitment:</Typography>
                <Typography>{TimeCommitment} hrs/day</Typography>
            </CardContent>
        </Card>
    );
}

export default DisplayTimeCommitment;