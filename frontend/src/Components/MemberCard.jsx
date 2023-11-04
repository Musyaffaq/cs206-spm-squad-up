import React from "react";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  CardActionArea,
} from "@mui/material";
import { Link } from "react-router-dom";
import InviteButton from "./InviteButton";
import MemberCardSkills from "./MemberCardSkills";

const circleContainer = {
  width: "8em",
  height: "8em",
  alignItems: "center",
  overflow: "hidden",
  display: "flex",
  borderRadius: "50%",
  marginTop: "3.5em",
  marginRight: "1.8em",
};

const cardStyles = {
  width: "23em",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
  marginRight: "1em",
};

const contentStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center", // Center horizontally
  justifyContent: "center", // Center vertically
  height: "19vh", // Full viewport height
};

const linkStyle = {
  color: "inherit",
  textDecoration: "none", // Remove underline
};

function MemberCard({ memberData }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/get-user/${memberData.userid}`)
      .then((res) => res.json()) // Parse the response as JSON
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <Grid item xs={2.5}>
      <Card style={cardStyles}>
        <Link to={`/profiles/${memberData.userid}`} style={linkStyle}>
          <CardActionArea>
            <CardContent style={contentStyle}>
              <div style={{ marginRight: "1.5em" }}>
                <br />
                <img
                  src="/default_profile.jpg"
                  style={circleContainer}
                  alt={memberData.username}
                />
              </div>
              <div>
                <br />
                <br />
                <Typography
                  style={{ textDecoration: "underline", marginBottom: "2px", marginTop: "3em" }}
                >
                  Username:
                </Typography>
                <Typography style={{ marginBottom: "6px" }}>
                  {memberData.username}
                </Typography>
                <Typography
                  style={{ textDecoration: "underline", marginBottom: "2px" }}
                >
                  Personality:
                </Typography>
                <Typography style={{ marginBottom: "6px" }}>
                  {memberData.personality}
                </Typography>
                <Typography
                  style={{ textDecoration: "underline", marginBottom: "2px" }}
                >
                  Skills:
                </Typography>
                <MemberCardSkills Skills={memberData.skills} />
              </div>
            </CardContent>
            <br />
            <br />
            <CardContent
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "2.8em",
              }}
            >
              <InviteButton memberName={memberData.username} />
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </Grid>
  );
}

export default MemberCard;
