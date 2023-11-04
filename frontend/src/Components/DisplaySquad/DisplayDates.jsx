import {
    Card,
    CardContent,
    Typography
  } from "@mui/material";
  import React from "react";

function DisplayDates({FromDate, ToDate}) {
    return (
        <Card variant="outlined">
            <CardContent>
            <Typography level="title-md" style={{ textDecoration: "underline"}}>Dates Required:</Typography>
                <Typography>{FromDate} - {ToDate}</Typography>
            </CardContent>
        </Card>
    );
}

export default DisplayDates;