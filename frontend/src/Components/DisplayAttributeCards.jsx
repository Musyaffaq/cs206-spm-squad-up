import {
    Card,
    CardContent,
    Typography
  } from "@mui/material";
  import React from "react";

function DisplayAttributeCards() {
    return (
        <Card variant="outlined">
            <CardContent>
                <Typography level="title-md">Plain card</Typography>
                <Typography>Description of the card.</Typography>
            </CardContent>
        </Card>
    );
}

export default DisplayAttributeCards;