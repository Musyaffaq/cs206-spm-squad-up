import React from "react";
import { IconButton } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";

const BackToSquad = (squadid) => {
  const buttonStyle = {
    padding: "0", 
    width: "auto", 
    height: "auto", 
  };
  
  const linkToProfile = `/squads/${squadid}`;

  return (
    <IconButton aria-label="Back" style={buttonStyle}>
      <Link to={linkToProfile}>
        <ArrowBackIcon style={{display: "block", margin: "auto"}}/>
      </Link>
    </IconButton>
  );
}

export default BackToSquad;
