import { useEffect, useState } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import ProfileViewComponent from "../Components/ProfileViewComponent";
import BackToFindMember from "../Components/DisplaySquad/BackToFindMember";
import API_LINK from "../Api";

function Profile() {
  const [data, setData] = useState([]);
  const { userid } = useParams(); // this is the username
  useEffect(() => {
    fetch(API_LINK + `get-user/${userid}`)
      .then((res) => res.json()) // Parse the response as JSON
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <>
      <BackToFindMember />
      <ProfileViewComponent userId={userid} />
    </>
  );
}

export default Profile;
