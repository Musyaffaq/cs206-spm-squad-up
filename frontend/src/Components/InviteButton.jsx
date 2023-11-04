import React from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import { useState, useEffect } from "react";
import { Alert, Snackbar } from "@mui/material";

import API_LINK from "../Api";

function InviteButton({ memberName, userId }) {
  const [squadName, setSquadName] = useState("");
  let currUsername = sessionStorage.getItem("username");
  const [isInvited, setIsInvited] = useState(false);
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    console.log(memberName);
    currUsername = sessionStorage.getItem("username");
    fetch(API_LINK + `get-user/${userId}`)
      .then((res) => res.json()) // Parse the response as JSON
      .then((data) => {
        setUsername(data.user.username);
        fetch(API_LINK + `get-squad-by-leader/` + currUsername)
          .then((res) => res.json())
          .then((data2) => {
            console.log(data.user.username);
            let users = data2.squad.invitedMembers;
            if (users.indexOf(data.user.username) !== -1) {
              console.log(`${data.user.username} is in the array.`);
              setIsInvited(true);
            }
          });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleButtonClick = async () => {
    try {
      const response1 = await axios.get(
        API_LINK + `get-squad-by-leader/` + currUsername
      );
      const squadName = response1.data.squad.squadName;
      try {
        const data = {
          squadName: squadName,
          memberName: memberName,
        };
        const response2 = await axios.post(API_LINK + `add-user`, data);
        setIsInvited(true);
        setOpen(true);
      } catch (error) {
        console.error("Error:", error);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div>
      {isInvited ? (
        <Button disabled variant="outlined" onClick={handleButtonClick}>
          Invited!
        </Button>
      ) : (
        <Button variant="outlined" onClick={handleButtonClick}>
          Invite
        </Button>
      )}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          You have invited {memberName} to your group!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default InviteButton;
