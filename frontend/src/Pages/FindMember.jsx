import React, { useEffect, useState } from "react";
import { Button, Card, CardActionArea, CardContent, Grid } from "@mui/material";
import MemberCard from "../Components/MemberCard";
import Filter from "../Components/Filter";

function FindMember() {
  const [showFilter, setShowFilter] = useState(false);
  const [userData, setUserData] = useState([]);

  const updateUserData = (newValue) => {
    setUserData(newValue);
  };

  useEffect(() => {
    fetch("http://localhost:5000/get-all-users")
      .then((res) => res.json())
      .then((data) => {
        setUserData(data["usersList"]);
      });
  }, []);

  return (
    <>
      <div>
        <Button variant="outlined" onClick={() => setShowFilter(!showFilter)}>
          {showFilter ? "Hide Filter" : "Show Filter"}
        </Button>
        {showFilter && <Filter updateUserData={updateUserData} />}
      </div>
      <div className="display-event-card">
        {userData.map((memberData, index) => {
          return <MemberCard key={index} memberData={memberData} />;
        })}
      </div>
    </>
  );
}

export default FindMember;
