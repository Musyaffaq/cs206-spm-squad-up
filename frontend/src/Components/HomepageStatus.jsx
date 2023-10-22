import React from "react";
import { Alert, AlertTitle } from "@mui/material";

function HomepageStatus() {
  return (
    <Alert severity="info">
      <AlertTitle>Status</AlertTitle>
      You can view your group as well as which group to join here!
    </Alert>
  );
}

export default HomepageStatus;
