import {
    Card,
    CardContent,
    Typography
  } from "@mui/material";
  import React from "react";

function DisplayPersonality({Personality}) {
    return (
        <Card variant="outlined">
            <CardContent>
                <Typography level="title-md" style={{ textDecoration: "underline"}}>Personality:</Typography>
                <Typography>{Personality}</Typography>
            </CardContent>
        </Card>
    );
}

export default DisplayPersonality;