import React from "react";
import { Alert, AlertTitle } from "@mui/material";

function HomepageStatus() {
  return (
    <Alert severity="info">
      <AlertTitle>Status</AlertTitle>
      You have not created your profile yet, please create one to get started!
    </Alert>
  );
}

export default HomepageStatus;
